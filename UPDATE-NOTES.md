# Wonder Works Creative UI and Navigation Update

This version fixes the story-card image treatment, routes the author event call-to-action to `/events`, and replaces placeholder/hash navigation with functional Next.js pages.

## Added routes

- `/publishing`
- `/screen`
- `/code`
- `/about`
- `/events`
- `/contact`
- `/connect`
- `/projects/when-the-lights-knock`
- `/characters/elena-rostova`
- `/characters/leah-baptiste`
- `/privacy`
- `/terms`
- `/accessibility`

## Story image fixes

- Story artwork is rendered with `next/image`, `object-fit: cover`, and controlled focal positioning.
- The Leah card uses a new crop focused on Leah and Imani, with the man removed from the frame.
- The Elena image removes the unwanted source-cover spine strip.

## Event link

- The About section button now opens `/events`.
- The events page deliberately states that no public events have been formally announced yet and directs readers to the Launch Team signup.

## Social links

The social icons route to `/connect` until verified external profile URLs are supplied. This avoids dead `#` links and avoids inventing social account URLs.
