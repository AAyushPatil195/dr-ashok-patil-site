import { Resend } from "resend";
import { enquirySchema } from "@/lib/enquiry-schema";

type EnquiryResponse = {
  success: boolean;
  message: string;
  fieldErrors?: Record<string, string[]>;
};

function jsonResponse(body: EnquiryResponse, status: number) {
  return Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

export async function POST(request: Request) {
  let requestBody: unknown;

  try {
    requestBody = await request.json();
  } catch {
    return jsonResponse(
      {
        success: false,
        message: "We could not read this enquiry. Please check the form and try again.",
      },
      400,
    );
  }

  const parsed = enquirySchema.safeParse(requestBody);

  if (!parsed.success) {
    return jsonResponse(
      {
        success: false,
        message: "Please correct the highlighted fields.",
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      422,
    );
  }

  const enquiry = parsed.data;

  // Quietly accept honeypot submissions so automated senders receive no signal.
  if (enquiry.website) {
    return jsonResponse(
      {
        success: true,
        message: "Thank you. Your enquiry has been received.",
      },
      200,
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromAddress = process.env.ENQUIRY_EMAIL_FROM;
  const destinationAddress = process.env.ENQUIRY_EMAIL_TO;

  if (!apiKey || !fromAddress || !destinationAddress) {
    console.error("Enquiry email configuration is incomplete.");
    return jsonResponse(
      {
        success: false,
        message:
          "Online enquiry is temporarily unavailable. Please try again a little later.",
      },
      503,
    );
  }

  const emailBody = [
    "New appointment / enquiry request",
    "",
    `Name: ${enquiry.name}`,
    `Phone: ${enquiry.phone}`,
    `Email: ${enquiry.email ?? "Not provided"}`,
    `Preferred time: ${enquiry.preferredTime ?? "Not specified"}`,
    "",
    "Reason for visit / message:",
    enquiry.message,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromAddress,
      to: [destinationAddress],
      subject: "New website appointment / enquiry request",
      replyTo: enquiry.email,
      text: emailBody,
    });

    if (error) {
      console.error("Resend could not deliver an enquiry email:", error.name);
      return jsonResponse(
        {
          success: false,
          message:
            "We could not send your enquiry right now. Please try again shortly.",
        },
        502,
      );
    }

    return jsonResponse(
      {
        success: true,
        message:
          "Thank you. Your enquiry has been sent. The clinic will respond when available.",
      },
      200,
    );
  } catch (error) {
    console.error(
      "Unexpected error while sending an enquiry:",
      error instanceof Error ? error.name : "UnknownError",
    );
    return jsonResponse(
      {
        success: false,
        message:
          "We could not send your enquiry right now. Please try again shortly.",
      },
      500,
    );
  }
}
