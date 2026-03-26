# 🌐 Sumit Deshmukh — Personal Portfolio Website


> A modern, responsive personal portfolio website showcasing my skills, projects, and professional journey as an aspiring Data Analyst & Developer.

---

## 🔗 Live Demo

👉 **[View Portfolio](https://github.com/SumitDeshmukh1220)**

---

## 📸 Preview

| Page | Description |
|------|-------------|
| **Home** | Animated hero section with stats counter & parallax background |
| **About** | Bio, tabbed skills/experience/education timeline |
| **Services** | Data Analysis, UI/UX Design, App Development cards |
| **Work** | Project showcase with hover overlays |
| **Contact** | Contact form integrated with Google Sheets |

---

## 👨‍💻 About Me

I'm **Sumit Deshmukh**, an aspiring **Data Analyst** and Developer with hands-on experience in real-world datasets, dashboards, and backend systems. Currently pursuing my Master of Computer Science, I'm passionate about turning raw data into meaningful insights and building clean, functional digital experiences.

- 🎓 MCS @ MIT Arts, Commerce & Science College, Alandi (2024–2026)
- 💼 Data Analyst Intern @ MaxGen Technologies Pvt. Ltd. (Mar–Apr 2025)
- 📍 Pune, Maharashtra, India
- 📧 sumitganeshd212@gmail.com
- 🟢 **Open to Work** — seeking entry-level Data Analyst / Developer roles

---

## 🛠️ Tech Stack & Skills

### Languages & Tools
| Category | Technologies |
|----------|-------------|
| **Data & Analytics** | Python, SQL, Power BI, MS Excel |
| **Web Development** | HTML5, CSS3, JavaScript |
| **Backend / OOP** | Java |
| **Design** | UI/UX Design, Figma |
| **Other** | Data Modeling, Data Visualization, Dashboard Design |

---

## 📁 Project Structure

```
portfolio/
├── index.html        # Home page — hero, stats, CTA
├── about.html        # About — bio, skills, experience, education tabs
├── services.html     # Services — Data Analysis, UI/UX, App Development
├── work.html         # Work — project showcase cards
├── contact.html      # Contact — form + social links + CV download
├── style.css         # All styles (dark theme, animations, responsive)
├── script.js         # Shared JS — loader, cursor, nav, scroll reveal
└── images/           # Background, profile photo, project screenshots
```

---

## 🚀 Projects Showcased

### 1. 📱 Social Media App
A modern social media application designed to connect users through intuitive UI and real-time interactions. Focused on clean user experience and seamless navigation.

### 2. 🎬 Streaming Platform
A web-based streaming platform built to deliver smooth on-demand content. Designed with user-friendly navigation and a polished interface.

### 3. 🛍️ Virtual Shopping Store
A full-featured e-commerce concept store providing a smooth, secure, and intuitive online shopping experience.

---

## ✨ Website Features

- **Custom animated cursor** with smooth follower effect
- **Page loader** with percentage counter animation
- **Scroll reveal animations** — elements fade in on scroll
- **Sticky navigation** with active link highlighting
- **Mobile responsive** with hamburger menu
- **Parallax hero background** on the homepage
- **Animated stats counter** (Projects, Internships, Skills)
- **Tabbed content** on About page (Skills / Experience / Education)
- **3D card tilt effect** on Services & Work cards
- **Contact form** connected to Google Sheets for message collection
- **Film grain noise overlay** for premium aesthetic
- **Dark theme** throughout with accent color highlights

---

## 🎓 Education

| Degree | Institution | Year |
|--------|------------|------|
| Master of Computer Science (MCS) | MIT Arts, Commerce & Science College, Alandi | 2024 – 2026 |
| Bachelor of Computer Science (BCS) | MIT Arts, Commerce & Science College, Alandi | 2021 – 2024 |
| HSC (12th) | Priyadarshani Jr. College, Bhosari | 2019 – 2021 |

---

## 💼 Experience

**Data Analyst Intern** — *MaxGen Technologies Pvt. Ltd.*
📅 March 2025 – April 2025

- Worked with real-world datasets and developed data-driven insights
- Built dashboards and visualizations using Python and Power BI
- Gained hands-on experience with SQL for data querying and backend systems

---

## 🛠️ How I Built It

### Development Journey

I built this entire portfolio **in under a week** — from a blank file to a fully functional, multi-page website — using nothing but **VS Code** as my editor. No frameworks, no build tools, just clean HTML, CSS, and vanilla JavaScript.

### Approach

I started with the overall layout and design direction — going for a **dark, modern aesthetic** with smooth animations to make the portfolio feel premium and stand out from generic templates. Each page was built and refined one at a time:

1. **`style.css` first** — established the design system (colors, typography, spacing, CSS variables) before writing a single line of HTML, so every page stayed visually consistent
2. **`script.js` shared logic** — loader, cursor, navigation, and scroll reveal were written once and reused across all 5 pages
3. **Page by page** — Home → About → Services → Work → Contact, with each page building on the shared foundation

### Biggest Challenge — Mobile Responsiveness

The hardest part was making the site **fully responsive across all screen sizes**. Key things I had to solve:

- The **hero section** with an absolute-positioned background image, overlaid text, and floating stats needed careful restructuring for small screens
- The **navigation** required a complete hamburger menu system with smooth open/close animation and scroll-lock on mobile
- **Grid layouts** (about, services, work, contact) had to gracefully collapse from multi-column to single-column without breaking spacing or visual hierarchy
- The **custom cursor** had to be hidden on touch devices since it doesn't make sense on mobile

Every breakpoint was tested and tweaked manually in VS Code using browser DevTools.

### What I Learned

- Writing **reusable, page-agnostic JavaScript** that works across multiple HTML files without duplication
- Using **CSS custom properties (variables)** to maintain a consistent design system at scale
- Integrating a **Google Sheets backend** for the contact form with zero server-side code
- Implementing **IntersectionObserver** for performant scroll-triggered animations
- Managing the **loading experience** — hiding content until assets are ready, then revealing elements in a choreographed sequence

---

## 🚀 Getting Started (Run Locally)

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/portfolio.git

# 2. Navigate to the project folder
cd portfolio

# 3. Open index.html in your browser
# No build tools or dependencies required — pure HTML/CSS/JS!
open index.html
```

> Or simply open `index.html` by double-clicking it in your file explorer.

---

<div align="center">
  <p>Crafted with passion ✨ and precision 🧠 by <strong>Sumit Deshmukh</strong></p>
  <p>© 2026 Sumit Deshmukh. All rights reserved.</p>
</div>
