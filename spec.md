# Core Artistry Pilates Studio

## Current State
New project. Empty backend (main.mo scaffold only). No frontend implemented.

## Requested Changes (Diff)

### Add
- Full single-page application for a premium boutique Pilates studio
- Global sticky header with nav links (Home, About, Classes, Book, Shop, Events, Contact)
- Auth-aware header: guest shows "Sign In" button; authenticated user shows dropdown (My Account, My Packages, My Bookings, My Orders)
- Mobile hamburger menu
- Hero section: full-width image/video background, minimalist overlaid text, "Sign Up Now" CTA
- "Featured In" social proof strip below hero (Vogue, TimeOut, Expat Living logos/text)
- Contact modal: First Name, Last Name, Email, Phone, Message
- Private Session Booking modal: Instructor selector, Time preference (Mornings/Afternoons/Evenings), Days preference, Contact Method
- Credits warning alert modal with "Don't show this message again" toggle
- Class schedule section: grid/list view, color-coded status badges (Booked, Waitlisted, Booking Closed, Fully Booked)
- Testimonial slider section titled "Reflections": quotes, names, custom left/right arrows
- Global footer: brand sign-off, secondary links, social links, legal links

### Modify
- N/A

### Remove
- N/A

## Implementation Plan
1. Backend: minimal actor with stub types for classes, bookings, user state
2. Frontend: implement all sections and modals in React + Tailwind + Framer Motion
   - Header component with auth state toggle and mobile menu
   - Hero section with background image and CTA
   - FeaturedIn strip
   - ClassSchedule section with status badges
   - Modal system (Contact, BookingRequest, CreditsAlert)
   - Testimonials carousel
   - Footer
