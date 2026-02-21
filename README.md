# Felix Juma - Software Developer Portfolio

A modern, responsive, and professional portfolio website built with React and Vite.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-success)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-5.1.0-purple)

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Scrolling**: Navigation with active section highlighting
- **Contact Form**: Working contact form with EmailJS integration
- **Fast Performance**: Built with Vite for optimal loading speed
- **SEO Friendly**: Proper meta tags and semantic HTML

## 📋 Sections

1. **Home**: Hero section with introduction and call-to-action
2. **About**: Professional summary with focus areas
3. **Skills**: Technical skills categorized by type
4. **Experience**: Work history with timeline layout
5. **Projects**: Showcase of 4 key projects
6. **Contact**: Working contact form with validation

## 🛠️ Technologies Used

- React 18
- Vite
- EmailJS (for contact form)
- React Icons
- CSS3 (custom properties, flexbox, grid)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/felix-juma-portfolio.git
cd felix-juma-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

4. Run the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## 🔧 EmailJS Setup

To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an Email Service (Gmail, Outlook, etc.)
3. Create an Email Template with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
   - `{{to_email}}`
4. Copy your Public Key, Service ID, and Template ID to the `.env` file

## 🚀 Deployment (Vercel)

### Option 1: Deploy with Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Deploy via GitHub

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables on Vercel

Add these environment variables in your Vercel project settings:

- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`

## 📁 Project Structure

```
felix-juma-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── sections/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Skills.jsx
│   │   ├── Skills.css
│   │   ├── Experience.jsx
│   │   ├── Experience.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Contact

Felix Juma - [felixjuma1995@gmail.com](mailto:felixjuma1995@gmail.com)

---

Built with ❤️ by Felix Juma
