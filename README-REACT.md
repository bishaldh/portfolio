# Bishal Dahal - Portfolio Website (React Version)

This is the React version of the portfolio website, converted from the static HTML template.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Copy assets to public folder:
```bash
# Copy all assets from the original project to public/assets
# The structure should be:
# public/
#   assets/
#     css/
#     img/
#     vendor/
```

3. Set up EmailJS (for contact form):
   - Go to [EmailJS](https://www.emailjs.com/) and create a free account
   - Create a service (Gmail, Outlook, etc.)
   - Create an email template
   - Get your Service ID, Template ID, and Public Key
   - Update `src/components/Contact.jsx` with your credentials:
     ```javascript
     const serviceId = 'YOUR_SERVICE_ID'
     const templateId = 'YOUR_TEMPLATE_ID'
     const publicKey = 'YOUR_PUBLIC_KEY'
     ```

### Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

Build the project:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
src/
  components/
    About.jsx
    Contact.jsx
    Footer.jsx
    Header.jsx
    Hero.jsx
    Portfolio.jsx
    Preloader.jsx
    Resume.jsx
    ScrollTop.jsx
    Services.jsx
    Skills.jsx
    Stats.jsx
    Testimonials.jsx
  utils/
    initLibraries.js
  App.jsx
  main.jsx
  index.css

public/
  assets/
    css/
    img/
    vendor/
```

## ✨ Features

- ✅ Fully responsive design
- ✅ Smooth animations (AOS)
- ✅ Typed.js for hero section
- ✅ Swiper for testimonials
- ✅ Isotope for portfolio filtering
- ✅ GLightbox for image galleries
- ✅ Functional contact form with EmailJS
- ✅ PureCounter for statistics
- ✅ Waypoints for skills animation

## 📝 Notes

- All styling and assets are preserved from the original template
- The contact form uses EmailJS for sending emails (no backend required)
- Make sure to configure EmailJS credentials before using the contact form
- All vendor libraries are loaded from the public/assets folder

## 🔧 Configuration

### EmailJS Setup
1. Sign up at https://www.emailjs.com/
2. Add your email service (Gmail recommended)
3. Create an email template with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{subject}}`
   - `{{message}}`
4. Update the credentials in `src/components/Contact.jsx`

## 📄 License

Same as the original template license.

