# Provisional clinic imagery

The ten supplied PNG originals are preserved unchanged in `public/images/`.
`optimized/` contains full-resolution, lossless WebP copies. Their decoded
pixels are identical to the originals. Next/Image generates responsive,
browser-ready derivatives from these copies; gallery and homepage images
are lazy-loaded. Only the selected lightbox image loads eagerly.

Paths, dimensions, categories, captions, crop positions and provisional status
are maintained in `src/config/clinic-images.ts`.

These images contain digital alterations, including furniture and fixtures.
They remain provisional until verified against the actual clinic. Captions
describe views and do not verify facilities, equipment or medical capabilities.

To replace an image, update its entry in the typed module and preserve the
original source separately. If generating another WebP copy, use the existing
Sharp dependency with lossless encoding and retain the original dimensions.
