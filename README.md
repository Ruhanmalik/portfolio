# Ruhan Malik - Portfolio Website

A modern, responsive portfolio website built with React, featuring smooth scrolling animations, glassmorphism design, and interactive components.

## 🌟 Features

- **Modern Design**: Glassmorphism UI with gradient text effects and smooth animations
- **Responsive Layout**: Optimized for all device sizes
- **Smooth Scrolling**: Custom scroll stack component with Lenis for buttery smooth scrolling
- **Interactive Elements**: Hover effects and animated transitions
- **PDF Integration**: Embedded resume viewer with download functionality
- **Performance Optimized**: Efficient rendering and animation management

## 🛠️ Technologies Used

- **React** - Frontend framework
- **React Router** - Client-side routing
- **Lenis** - Smooth scrolling library
- **CSS3** - Modern styling with glassmorphism effects
- **JavaScript (ES6+)** - Modern JavaScript features

## 📁 Project Structure

```
src/
├── components/
│   ├── GradientText.jsx      # Animated gradient text component
│   ├── ScrollStack.jsx       # Custom scroll stack with animations
│   └── NavBar.jsx           # Navigation component
├── pages/
│   ├── Home.jsx             # Landing page
│   ├── AboutMe.jsx          # About section
│   ├── Projects.jsx         # Projects showcase
│   ├── Resume.jsx           # Resume viewer
│   └── Contact.jsx          # Contact information
└── CSS/
    ├── NavBar.css
    ├── Contact.css
    ├── AboutMe.css
    ├── Projects.css
    ├── ScrollStack.css
    └── GradientText.css
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Ruhanmalik/your-portfolio-repo.git
cd your-portfolio-repo
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📋 Required Assets

Make sure to add these files to your `public` folder:

- `pfp.jpeg` - Profile picture for About Me section
- `Ruhan_Malik_Resume.pdf` - Resume PDF file
- `WNReader.png` - Web Novel Reader project screenshot
- `epub.PNG` - EPUB converter project screenshot

## 🎨 Key Components

### ScrollStack
A custom component that creates a stacking scroll effect with configurable parameters:
- Item distance and scaling
- Stack positioning
- Animation duration
- Blur and rotation effects

### GradientText
An animated gradient text component with customizable:
- Color schemes
- Animation speed
- Border effects
- Styling options

### Navigation
Responsive navigation bar with glassmorphism styling and smooth transitions.

## 🎯 Sections

- **Home**: Welcome landing with gradient text and introduction
- **About Me**: Personal introduction with profile picture
- **Projects**: Showcases key projects with detailed descriptions
- **Resume**: Embedded PDF viewer with download option
- **Contact**: Contact information with social media links

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Design Features

- **Glassmorphism**: Modern glass-like effects with backdrop blur
- **Gradient Animations**: Smooth color transitions and text effects
- **Smooth Scrolling**: Enhanced user experience with Lenis
- **Interactive Hover States**: Engaging micro-interactions
- **Performance Optimized**: Efficient animations using transform3d and will-change

## 🔧 Customization

### Colors
Update the color scheme by modifying the CSS custom properties and gradient configurations in the components.

### Content
- Update personal information in each component
- Replace project descriptions and images
- Modify contact links and resume file

### Animations
Adjust animation parameters in the ScrollStack component:
- `itemDistance`: Space between stacked items
- `itemScale`: Scaling factor for stacked items
- `stackPosition`: Where items start stacking
- `animationSpeed`: Speed of gradient animations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: aruhanmalik@gmail.com
- **LinkedIn**: [linkedin.com/in/ruhan-malik/](https://www.linkedin.com/in/ruhan-malik/)
- **GitHub**: [github.com/Ruhanmalik](https://github.com/Ruhanmalik)

## 🚀 Deployment

The site can be deployed to various platforms:

### Netlify
```bash
npm run build
# Deploy the build folder to Netlify
```

### Vercel
```bash
npm run build
# Deploy using Vercel CLI or GitHub integration
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add deployment scripts to package.json
npm run deploy
```

---

Built with ❤️ by Ruhan Malik