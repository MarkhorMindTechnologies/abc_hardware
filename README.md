# ABC Hardware House – Premium Hardware Store Website (Business Demo)

**Developed by:** [Markhormind Technologies](https://github.com/MarkhorMindTechnologies)  
**Target Location:** Jammu, Jammu & Kashmir, India  
**Brand:** ABC Hardware House  
**Tagline:** *Everything You Need to Build Better.*

---

## 🏗️ Project Overview

This website is a portfolio demonstration created by **Markhormind Technologies** to showcase modern web development capabilities for hardware and building material businesses.

It demonstrates how a traditional local hardware store in Jammu can establish an authoritative, modern online presence to drive customer trust, contractor inquiries, and WhatsApp-based product leads.

> ⚠️ **DEMO NOTICE:** This is a demonstration website. No online cart, checkout, or monetary pricing is implemented. All product entries and availability markers are realistic sample data created for demonstration purposes.

---

## 🎨 Visual Identity & Design Direction

- **Palette:** Industrial Navy Blue (`#0d1b2e`, `#1e3a5f`), Clean White, Safety Orange Accents (`#f97316`)
- **Typography:** Poppins (Headings) + Inter (Body text)
- **Design Philosophy:** Clean industrial aesthetic, high-quality hardware imagery, subtle animations, and 100% mobile-first responsiveness.

---

## 📱 Features & Highlights

- **Mobile-First UX:**
  - App-style mobile bottom navigation bar (`MobileBottomNav`) with direct access to Home, Catalogue, WhatsApp, Phone, and Map.
  - Smooth horizontal scrolling category chips.
  - Responsive tap-outside mobile drawer menu.
  - Full-width touch-friendly CTA buttons.
- **Product Catalogue:**
  - 10 comprehensive categories (Hand Tools, Power Tools, Electrical Supplies, Plumbing Materials, Paints & Accessories, Construction Materials, Safety Equipment, Fasteners, Bathroom Fittings, Doors & Furniture Hardware).
  - Dynamic keyword search and real-time category filtering.
  - Availability badges (`Available` & `Contact to Confirm`).
- **Interactive Location Map:**
  - Embedded Google Map of Jammu, Jammu & Kashmir, India with directions link and GPS coordinates overlay.
- **Dynamic WhatsApp Lead Integration:**
  - Pre-filled enquiry messages formatted dynamically per product name.
- **Admin Dashboard Preview (`/admin-preview`):**
  - Interactive preview showcasing Product Management, Category Management, Brand Partners, Customer Enquiries Inbox, and Storefront CMS settings.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/MarkhorMindTechnologies/abc_hardware.git

# Navigate into the project folder
cd abc_hardware

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be accessible at `http://localhost:5173/`.

### Production Build

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
hardware_demo/
├── public/              # Favicon and static assets
├── src/
│   ├── assets/          # Static media
│   ├── components/      # Reusable UI components (Navbar, Footer, ProductCard, Map, etc.)
│   ├── data/            # Sample products, categories, brands, and gallery datasets
│   ├── hooks/           # Custom React hooks
│   ├── layouts/         # Main layout wrapper
│   ├── pages/           # Page routes (Home, About, Products, ProductDetail, Brands, Services, Gallery, Contact, AdminPreview, NotFound)
│   ├── utils/           # WhatsApp helper functions, formatters, and slugifiers
│   ├── App.jsx          # Router and lazy page definitions
│   ├── index.css        # Tailwind directives and utility classes
│   └── main.jsx         # React DOM root entry
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🏢 Credits

Designed & Developed with precision by **Markhormind Technologies**.
