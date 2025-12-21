# 🏗️ Civil Engineer Portfolio Website

A complete, modern, and fully responsive portfolio website designed specifically for civil engineers to showcase their projects, skills, and professional experience to clients and potential employers.

## ✨ Features

### 🎨 **Design & UI/UX**
- ✅ Clean, modern, and professional design
- ✅ Fully responsive (Mobile, Tablet, Desktop)
- ✅ Dark/Light mode toggle
- ✅ Smooth scrolling and animations
- ✅ Intuitive navigation with active section highlighting
- ✅ Premium color scheme and typography
- ✅ Hover effects and transitions

### 📱 **Sections Included**

1. **Hero/Profile Section**
   - Profile photo with animated border
   - Full name and professional title
   - Engaging bio/tagline
   - Call-to-action buttons (View Projects, Download Resume)
   - Social media links

2. **About Me Section**
   - Detailed professional description
   - Career summary and achievements
   - Personal information display
   - Career goals and interests
   - Statistics counter (Years, Projects, Clients)

3. **Skills Section**
   - Engineering software skills with animated progress bars
   - Design & analysis capabilities
   - Other tools and technologies
   - Soft skills showcase with icons

4. **Education & Certifications**
   - Timeline layout for education history
   - Degree details with descriptions
   - Professional certifications
   - Course completions

5. **Professional Experience**
   - Detailed work history
   - Company names and roles
   - Duration and location
   - Key responsibilities and achievements

6. **Projects Portfolio**
   - Grid layout with filtering (All, Residential, Commercial, Infrastructure)
   - Project cards with images
   - Technology stack tags
   - Click to view detailed modal

7. **Project Modal/Gallery**
   - Full project details
   - Image gallery with lightbox view
   - Client information
   - Budget, duration, location details
   - Key features and highlights
   - Technologies used
   - Links to documentation

8. **Contact Section**
   - Contact form with validation
   - Name, Email, Phone, Subject, Message fields
   - Contact information display
   - Social media links
   - Availability information

9. **Footer**
   - Quick navigation links
   - Services listing
   - Contact information
   - Social media icons
   - Copyright information

### ⚡ **Functionality**

- 📱 Mobile-friendly hamburger navigation
- 🌓 Dark/Light theme toggle with local storage
- 📊 Animated skill progress bars
- 🔍 Project filtering by category
- 🖼️ Image lightbox/gallery viewer
- ✉️ Form validation with JavaScript
- ⬆️ Scroll to top button
- 🎭 Scroll reveal animations
- 🚀 Smooth page transitions
- 📌 Active navigation link on scroll

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, etc.) for customization
- Basic understanding of HTML/CSS/JavaScript (for customization)

### Installation

1. **Download or Clone the Repository**
   ```bash
   cd "MY PORTFOLIO"
   ```

2. **Open the Website**
   - Simply open `index.html` in your web browser
   - Or use a local server for better development experience:
   
   **Using VS Code Live Server:**
   - Install "Live Server" extension in VS Code
   - Right-click on `index.html` and select "Open with Live Server"
   
   **Using Python:**
   ```bash
   # Python 3
   python -m http.server 8000
   # Then open http://localhost:8000 in your browser
   ```
   
   **Using Node.js:**
   ```bash
   npx http-server
   ```

## 📝 Customization Guide

### 1. **Personal Information**

**Edit `index.html` and replace the following placeholders:**

#### Hero Section (Lines ~60-85)
```html
<!-- Replace profile image -->
<img src="assets/images/profile.jpg" alt="Your Name">

<!-- Update your details -->
<h1>Hi, I'm <span class="highlight">Your Full Name</span></h1>
<h2>Professional Civil Engineer</h2>
<p>Your bio and tagline here...</p>

<!-- Update resume link -->
<a href="assets/Your_Resume.pdf" download>Download Resume</a>

<!-- Update social media links -->
<a href="https://linkedin.com/in/your-profile">LinkedIn</a>
<a href="https://github.com/your-username">GitHub</a>
```

#### About Section (Lines ~130-200)
```html
<!-- Replace about image -->
<img src="assets/images/about.jpg">

<!-- Update statistics -->
<h3>5+</h3> <!-- Years Experience -->
<h3>50+</h3> <!-- Projects Completed -->
<h3>30+</h3> <!-- Happy Clients -->

<!-- Update personal info -->
<p>Your Full Name</p>
<p>+1 (123) 456-7890</p>
<p>your.email@example.com</p>
<p>Your City, Country</p>
```

#### Skills Section (Lines ~220-350)
```html
<!-- Update skill percentages and names -->
<span>AutoCAD</span>
<span>90%</span>
<div class="skill-progress" data-progress="90"></div>

<!-- Add or remove skills as needed -->
```

#### Education Section (Lines ~380-480)
```html
<!-- Update each timeline item -->
<span class="timeline-date">2015 - 2019</span>
<h3>Bachelor of Technology in Civil Engineering</h3>
<h4>University Name / Institute Name</h4>
<p>Your description...</p>
```

#### Experience Section (Lines ~500-600)
```html
<!-- Update work experience details -->
<h3>Senior Civil Engineer</h3>
<h4>Company Name</h4>
<span>January 2022 - Present</span>
<span>City, Country</span>
```

#### Projects Section (Lines ~650-800)
```html
<!-- For each project card, update: -->
<img src="assets/images/project1.jpg">
<h3>Luxury Villa Construction</h3>
<p>Project description...</p>

<!-- Update technology tags -->
<span>AutoCAD</span>
<span>Revit</span>
```

#### Contact Section (Lines ~900-1000)
```html
<!-- Update contact information -->
<p>+1 (123) 456-7890</p>
<p>your.email@example.com</p>
<p>Your City, Country</p>
```

### 2. **Images**

**Add your images to the `assets/images/` folder:**

- `profile.jpg` - Your profile photo (400x400px recommended)
- `about.jpg` - About section photo (500x600px recommended)
- `project1.jpg` to `project6.jpg` - Project thumbnails (600x400px recommended)
- `project1-1.jpg`, `project1-2.jpg`, etc. - Additional project images for gallery

**Image Guidelines:**
- Use high-quality images (at least 1000px width)
- Optimize images for web (use tools like TinyPNG)
- Recommended formats: JPG for photos, PNG for graphics
- Keep file sizes under 500KB for faster loading

### 3. **Projects Data**

**Edit `js/script.js` (Lines ~200-400) to update project details:**

```javascript
const projectsData = {
    project1: {
        title: "Your Project Title",
        category: "Residential", // or "Commercial", "Infrastructure"
        client: "Client Name",
        location: "City, Country",
        duration: "12 Months",
        budget: "$500,000",
        year: "2023",
        description: "Detailed project description...",
        features: [
            "Feature 1",
            "Feature 2",
            // Add more features
        ],
        technologies: ["AutoCAD", "Revit", "STAAD Pro"],
        images: [
            "assets/images/project1-1.jpg",
            "assets/images/project1-2.jpg"
        ],
        links: {
            demo: "https://your-project-link.com",
            github: "path/to/documentation.pdf"
        }
    }
    // Add more projects...
};
```

### 4. **Colors & Theme**

**Edit `css/style.css` (Lines ~10-40) to customize colors:**

```css
:root {
    /* Change these colors to match your brand */
    --primary-color: #3498db;     /* Main blue color */
    --secondary-color: #2c3e50;   /* Dark gray */
    --accent-color: #e74c3c;      /* Red accent */
    --success-color: #27ae60;     /* Green */
    --warning-color: #f39c12;     /* Orange */
}
```

### 5. **Fonts**

**Current fonts:** Inter & Poppins (from Google Fonts)

**To change fonts, edit `index.html` (Lines ~15-18):**

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;600;700&display=swap" rel="stylesheet">
```

**Then update `css/style.css`:**

```css
--font-primary: 'YourFont', sans-serif;
--font-secondary: 'YourFont', sans-serif;
```

### 6. **Resume Download**

1. Save your resume as PDF in the `assets/` folder
2. Name it something like `Your_Name_Resume.pdf`
3. Update the link in `index.html`:

```html
<a href="assets/Your_Name_Resume.pdf" class="btn btn-secondary" download>
    Download Resume
</a>
```

## 📂 Folder Structure

```
MY PORTFOLIO/
│
├── index.html              # Main HTML file
│
├── css/
│   └── style.css          # All styles and responsive design
│
├── js/
│   └── script.js          # All JavaScript functionality
│
├── assets/
│   ├── images/            # Store all images here
│   │   ├── profile.jpg
│   │   ├── about.jpg
│   │   ├── project1.jpg
│   │   └── ...
│   │
│   └── Your_Resume.pdf    # Your resume file
│
└── README.md              # This file
```

## 🎯 Key Customization Areas

### Quick Checklist ✅

- [ ] Replace all "Your Name" with your actual name
- [ ] Update profile and about images
- [ ] Update phone number and email
- [ ] Update location information
- [ ] Customize bio and descriptions
- [ ] Update social media links (LinkedIn, GitHub, Instagram)
- [ ] Add your resume PDF file
- [ ] Update education details
- [ ] Add work experience entries
- [ ] Update skills and percentages
- [ ] Add your project images
- [ ] Update project details in JavaScript
- [ ] Customize color theme (optional)
- [ ] Test on mobile devices
- [ ] Test contact form validation

## 🌐 Deployment

### **Option 1: GitHub Pages (Free)**

1. Create a GitHub repository
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select branch (main) and folder (root)
5. Your site will be live at `https://yourusername.github.io/repository-name`

### **Option 2: Netlify (Free)**

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site goes live instantly
4. Get a custom domain (optional)

### **Option 3: Vercel (Free)**

1. Go to [vercel.com](https://vercel.com)
2. Import your project from GitHub
3. Deploy with one click

### **Option 4: Traditional Web Hosting**

1. Purchase hosting (Bluehost, HostGator, etc.)
2. Upload files via FTP
3. Point your domain to the hosting

## 📱 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technical Details

### Technologies Used:
- **HTML5** - Semantic markup
- **CSS3** - Flexbox, Grid, Custom Properties, Animations
- **JavaScript (Vanilla)** - No frameworks required
- **Font Awesome** - Icons
- **Google Fonts** - Typography

### Features Implemented:
- Responsive design with CSS Grid and Flexbox
- CSS custom properties for theming
- LocalStorage for theme persistence
- Intersection Observer for lazy loading
- Form validation with regex
- Smooth scroll behavior
- CSS animations and transitions
- Mobile-first approach

## 🐛 Troubleshooting

### Images not showing?
- Check file paths are correct
- Ensure images are in `assets/images/` folder
- Check file extensions match (jpg vs jpeg)

### Resume download not working?
- Ensure PDF file is in `assets/` folder
- Check file name matches the link

### Dark mode not persisting?
- Check if browser allows localStorage
- Try a different browser

### Contact form not working?
- This is a frontend-only demo
- To make it functional, you need to:
  - Add a backend service (PHP, Node.js)
  - Use a form service (Formspree, Netlify Forms)
  - Integrate email API (SendGrid, EmailJS)

## 📚 Learning Resources

- [HTML Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [Google Fonts](https://fonts.google.com/)

## 💡 Tips for Success

1. **Keep it Updated** - Regularly add new projects and achievements
2. **Professional Photos** - Use high-quality, professional images
3. **Proofread** - Check for spelling and grammar errors
4. **Test Thoroughly** - Test on different devices and browsers
5. **Get Feedback** - Ask colleagues to review your portfolio
6. **SEO Optimize** - Update meta tags for better search visibility
7. **Performance** - Optimize images and code for fast loading

## 🤝 Support

If you encounter any issues or need help with customization:

1. Check this README thoroughly
2. Review the comments in the code files
3. Test in a different browser
4. Clear browser cache and reload

## 📄 License

This portfolio template is free to use for personal and commercial projects. 
Feel free to customize it to match your brand and requirements.

## 🎉 Final Notes

This portfolio website is designed to help civil engineers create a professional online presence. Remember to:

- **Be Authentic** - Let your personality shine through
- **Show Your Best Work** - Quality over quantity
- **Keep it Professional** - Maintain a professional tone
- **Update Regularly** - Add new projects and skills
- **Get Online** - Deploy your portfolio and share it

Good luck with your civil engineering career! 🏗️✨

---

**Created with ❤️ for Civil Engineers**

*Building the future, one structure at a time.*
