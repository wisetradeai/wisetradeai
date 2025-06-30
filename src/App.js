// App.js
import React from 'react';
// No external CSS import needed as styles are embedded below

// Lucide Icons (still used as they are React components)
import { Compass, Eye, BookOpen, Timer, Puzzle, LineChart, Activity, Sparkles, Globe, Bitcoin, Lightbulb, LayoutDashboard, Code, CheckSquare, ChevronRight } from 'lucide-react';

// Utility function for smooth scrolling to sections
const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

// Main App component
const App = () => {
    return (
        <div className="container">
            {/* Embedded Global Styles */}
            <style>
                {`
                /* Import Inter font from Google Fonts */
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

                html,
                body {
                  padding: 0;
                  margin: 0;
                  font-family: 'Inter', sans-serif;
                  background-color: #0d1117; /* Overall dark background */
                  color: #e2e8f0; /* Light text for contrast */
                  line-height: 1.6;
                  -webkit-font-smoothing: antialiased;
                  -moz-osx-font-smoothing: grayscale;
                }

                a {
                  color: inherit;
                  text-decoration: none;
                }

                * {
                  box-sizing: border-box;
                }

                /* Animations */
                @keyframes fadeInUpx {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }

                /* General Container */
                .container {
                  min-height: 100vh;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: flex-start;
                  background-color: #0d1117;
                  color: #e2e8f0;
                  font-family: 'Inter', sans-serif;
                }

                /* Navbar */
                .navbar {
                  background-color: #1a202c;
                  padding: 1rem 1.5rem;
                  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
                  position: fixed;
                  width: 100%;
                  top: 0;
                  z-index: 50;
                }

                .navbar-content {
                  max-width: 1200px;
                  margin: 0 auto;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  align-items: center;
                }

                .navbar-title {
                  font-size: 2rem; /* 32px */
                  font-weight: 800;
                  color: #60a5fa; /* blue-500 */
                  letter-spacing: 0.05em;
                  margin-bottom: 1rem;
                }

                .navbar-nav {
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: center;
                  gap: 1rem; /* 16px */
                }

                .nav-item {
                  color: #cbd5e1; /* gray-300 */
                  transition: color 0.3s ease-in-out;
                  padding: 0.25rem 0.75rem; /* 4px 12px */
                  border-radius: 0.375rem; /* 6px */
                  font-size: 0.875rem; /* 14px */
                }
                .nav-item:hover {
                  color: #90cdf4; /* blue-300 */
                }

                /* Hero Section */
                .hero-container {
                  background: linear-gradient(135deg, #1f2a37 0%, #0d1117 100%);
                  text-align: center;
                  padding: 8rem 1.5rem 6rem; /* 128px 24px 96px */
                  border-bottom-left-radius: 40px;
                  border-bottom-right-radius: 40px;
                  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
                  overflow: hidden;
                  position: relative;
                  width: 100%;
                  padding-top: 10rem; /* Space for fixed navbar */
                }

                .hero-blob {
                  position: absolute;
                  border-radius: 9999px; /* full rounded */
                  mix-blend-mode: multiply; /* Conceptual, blend modes are complex in CSS */
                  filter: blur(2rem); /* 32px */
                  animation: blob 7s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55);
                }

                .hero-blob-1 {
                  top: 25%;
                  left: 25%;
                  width: 8rem; /* 128px */
                  height: 8rem; /* 128px */
                  background-color: #3b82f6; /* blue-500 */
                  opacity: 0.2;
                }

                .hero-blob-2 {
                  top: 50%;
                  right: 25%;
                  width: 12rem; /* 192px */
                  height: 12rem; /* 192px */
                  background-color: #8b5cf6; /* purple-500 */
                  opacity: 0.2;
                  animation-delay: 2s;
                }

                .hero-blob-3 {
                  bottom: 25%;
                  left: 33%;
                  width: 6rem; /* 96px */
                  height: 6rem; /* 96px */
                  background-color: #14b8a6; /* teal-500 */
                  opacity: 0.2;
                  animation-delay: 4s;
                }

                .hero-content {
                  position: relative;
                  z-index: 10;
                  max-width: 900px;
                  margin: 0 auto;
                }

                .hero-title {
                  font-size: 3rem; /* 48px */
                  font-weight: 800;
                  color: #ffffff;
                  margin-bottom: 1.5rem; /* 24px */
                  line-height: 1.2;
                  animation: fadeInUpx 1s ease-out forwards;
                }

                .hero-title-highlight {
                  color: #60a5fa; /* blue-400 */
                }

                .hero-subtitle {
                  font-size: 1.25rem; /* 20px */
                  color: #cbd5e1; /* gray-300 */
                  margin-bottom: 2.5rem; /* 40px */
                  max-width: 700px;
                  margin-left: auto;
                  margin-right: auto;
                  animation: fadeInUpx 1s ease-out forwards;
                  animation-delay: 0.2s;
                }

                .hero-buttons-container {
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  gap: 1.5rem; /* 24px */
                  animation: fadeInUpx 1s ease-out forwards;
                  animation-delay: 0.4s;
                }

                /* Button Base Styles */
                .button {
                  padding: 0.75rem 2rem; /* 12px 32px */
                  border-radius: 9999px; /* full rounded */
                  font-size: 1.125rem; /* 18px */
                  font-weight: 600;
                  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.25);
                  transition: all 0.3s ease-in-out;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  width: 80%; /* responsive width */
                  max-width: 300px;
                }
                .button:hover {
                  transform: scale(1.05);
                  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.4);
                }

                .primary-button {
                  background: linear-gradient(90deg, #3b82f6, #60a5fa); /* blue-500 to blue-400 */
                  color: #ffffff;
                }
                .primary-button:hover {
                  background: linear-gradient(90deg, #2563eb, #3b82f6); /* blue-600 to blue-500 */
                }

                .secondary-button {
                  background-color: #4a5568; /* gray-700 */
                  color: #cbd5e1; /* gray-200 */
                  border: 1px solid #718096; /* gray-600 */
                }
                .secondary-button:hover {
                  background-color: #718096; /* gray-600 */
                  border-color: #a0aec0; /* gray-500 */
                }

                .button-icon {
                    margin-left: 0.5rem;
                    width: 1.25rem; /* 20px */
                    height: 1.25rem; /* 20px */
                }


                /* Section General Styles */
                .section-container {
                  padding: 5rem 1.5rem; /* 80px 24px */
                  border-radius: 30px;
                  margin-top: 5rem; /* 80px */
                  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
                  position: relative;
                  overflow: hidden;
                  max-width: 1200px;
                  margin-left: auto;
                  margin-right: auto;
                  width: calc(100% - 3rem); /* Adjust for horizontal padding */
                }

                .section-bg-1 {
                  background-color: #1a202c; /* gray-800 */
                }
                .section-bg-2 {
                  background-color: #0f172a; /* gray-900 */
                }

                .section-title {
                  font-size: 2.25rem; /* 36px */
                  font-weight: 800;
                  text-align: center;
                  color: #60a5fa; /* blue-400 */
                  margin-bottom: 4rem; /* 64px */
                  position: relative;
                }

                .section-title-underline {
                  display: block;
                  width: 6rem; /* 96px */
                  height: 0.25rem; /* 4px */
                  background-color: #3b82f6; /* blue-500 */
                  margin: 1rem auto 0; /* 16px auto 0 */
                  border-radius: 9999px;
                }

                .section-subtitle {
                  font-size: 1.125rem; /* 18px */
                  color: #cbd5e1; /* gray-300 */
                  text-align: center;
                  margin-bottom: 4rem;
                  max-width: 800px;
                  margin-left: auto;
                  margin-right: auto;
                  line-height: 1.6;
                }

                /* Card General Styles */
                .card {
                  padding: 2rem; /* 32px */
                  background: linear-gradient(145deg, #1e293b, #0f172a); /* dark blues/grays */
                  border-radius: 1rem; /* 16px */
                  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                  border: 1px solid #2d3748; /* gray-700 */
                  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  text-align: center;
                  height: 100%; /* Ensure cards in a grid have same height */
                }
                .card:hover {
                  transform: translateY(-0.25rem) scale(1.01);
                  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
                }

                .icon-container {
                  display: inline-flex;
                  padding: 1rem; /* 16px */
                  border-radius: 9999px; /* full rounded */
                  background-color: #1a202c; /* gray-800 */
                  border: 1px solid #3b82f6; /* blue-600 */
                  margin-bottom: 1.5rem; /* 24px */
                }

                /* Icon Sizing (Lucide icons) */
                .icon-large {
                    width: 2rem; /* 32px */
                    height: 2rem; /* 32px */
                    color: #60a5fa; /* blue-400 */
                }
                .icon-default {
                    width: 1.75rem; /* 28px */
                    height: 1.75rem; /* 28px */
                    color: #60a5fa; /* blue-400 */
                }


                .card-title {
                  font-size: 1.5rem; /* 24px */
                  font-weight: 600;
                  color: #ffffff;
                  margin-bottom: 1rem; /* 16px */
                }

                .card-text {
                  font-size: 1rem; /* 16px */
                  color: #a0aec0; /* gray-300 */
                  line-height: 1.5;
                }

                /* Mission & Vision Grid */
                .mission-vision-grid {
                  display: grid;
                  grid-template-columns: 1fr;
                  gap: 3rem; /* 48px */
                }
                @media (min-width: 768px) { /* md breakpoint */
                  .mission-vision-grid {
                    grid-template-columns: repeat(2, 1fr);
                  }
                }

                /* Problem & Solution Grid */
                .problem-solution-grid {
                  display: grid;
                  grid-template-columns: 1fr;
                  gap: 2.5rem; /* 40px */
                }
                @media (min-width: 1024px) { /* lg breakpoint */
                  .problem-solution-grid {
                    grid-template-columns: repeat(3, 1fr);
                  }
                }

                .problem-solution-card {
                  /* No specific additional styling needed as it inherits from .card */
                }

                .card-text-problem {
                  flex-grow: 1; /* Allows the problem text to expand */
                  margin-bottom: 1.5rem;
                  font-size: 1rem;
                  color: #a0aec0;
                }

                .solution-highlight {
                  color: #90cdf4; /* blue-300 */
                  font-size: 1.25rem; /* 20px */
                  font-weight: 500;
                  margin-top: auto; /* Pushes solution to bottom */
                  margin-bottom: 0.5rem;
                }

                .card-text-solution {
                  font-size: 1rem;
                  color: #e2e8f0; /* light gray */
                  line-height: 1.5;
                }

                .why-now-container {
                  margin-top: 5rem; /* 80px */
                  text-align: center;
                }

                .why-now-title {
                  font-size: 2.25rem; /* 36px */
                  font-weight: 700;
                  color: #ffffff;
                  margin-bottom: 1.5rem;
                }

                .why-now-text {
                  font-size: 1.125rem; /* 18px */
                  color: #cbd5e1;
                  max-width: 800px;
                  margin: 0 auto 2.5rem;
                  line-height: 1.6;
                }

                .placeholder-chart-container {
                  position: relative;
                  width: 100%;
                  max-width: 800px;
                  margin: 0 auto;
                  background-color: #1e293b;
                  border-radius: 0.75rem; /* 12px */
                  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.6);
                  border: 1px solid #4a5568;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  min-height: 250px;
                  overflow: hidden;
                  padding: 1.5rem;
                }

                .placeholder-image {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    position: absolute;
                    opacity: 0.2; /* Subtly show the image */
                }
                .placeholder-image-text {
                    font-size: 0.875rem; /* 14px */
                    color: #a8a8a8; /* gray-500 */
                    margin-top: 1rem;
                    text-align: center;
                    position: relative; /* Keep text above placeholder image */
                    z-index: 1;
                }

                /* Features Grid */
                .features-grid {
                  display: grid;
                  grid-template-columns: 1fr;
                  gap: 2rem; /* 32px */
                }
                @media (min-width: 768px) {
                  .features-grid {
                    grid-template-columns: repeat(2, 1fr);
                  }
                }
                @media (min-width: 1024px) {
                  .features-grid {
                    grid-template-columns: repeat(3, 1fr);
                  }
                }

                .feature-card {
                  flex-direction: row;
                  align-items: flex-start;
                  padding: 1.5rem; /* 24px */
                }

                .feature-icon-wrapper {
                  margin-right: 1rem; /* 16px */
                  margin-top: 0.25rem; /* 4px, slight vertical adjustment */
                }

                .feature-text-content {
                  flex: 1; /* Allows text to take remaining space */
                  text-align: left; /* Align text to left within card */
                }

                .app-mockup-container {
                  margin-top: 5rem; /* 80px */
                  width: 100%;
                  max-width: 900px;
                  margin-left: auto;
                  margin-right: auto;
                  background-color: #1e293b;
                  border-radius: 1.25rem; /* 20px */
                  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.4);
                  border: 1px solid #2d3748;
                  min-height: 350px;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  overflow: hidden;
                  padding: 2rem;
                }

                .app-mockup-image {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    position: absolute;
                    opacity: 0.2;
                }

                /* Pricing Grid */
                .pricing-grid {
                  display: flex;
                  flex-direction: row;
                  gap: 2rem;
                  overflow-x: auto;
                  padding-bottom: 1rem;
                  scrollbar-width: thin;
                  scrollbar-color: #3b82f6 #1a202c;
                }
                .pricing-grid::-webkit-scrollbar {
                  height: 10px;
                }
                .pricing-grid::-webkit-scrollbar-thumb {
                  background: #3b82f6;
                  border-radius: 8px;
                }
                .pricing-grid::-webkit-scrollbar-track {
                  background: #1a202c;
                  border-radius: 8px;
                }

                .pricing-card {
                  min-width: 340px;
                  max-width: 380px;
                  flex: 0 0 auto;
                  margin-bottom: 1rem;
                }

                .pricing-card-popular {
                  border-color: #60a5fa; /* blue-500 */
                  border-width: 2px;
                }

                .popular-badge {
                  position: absolute;
                  top: -0.75rem; /* -12px */
                  right: 1.5rem; /* 24px */
                  background-color: #3b82f6; /* blue-600 */
                  color: #ffffff;
                  font-size: 0.75rem; /* 12px */
                  font-weight: 700;
                  padding: 0.25rem 0.75rem; /* 4px 12px */
                  border-radius: 9999px;
                  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
                  text-transform: uppercase;
                }

                .popular-badge-text {
                  color: #ffffff;
                }

                .pricing-title,
                .pricing-price-bold {
                  word-break: break-word;
                  overflow-wrap: break-word;
                  white-space: normal;
                  text-align: center;
                }

                .pricing-price-bold {
                  font-size: clamp(2rem, 5vw, 2.5rem); /* Responsive font size */
                }

                @media (min-width: 768px) {
                  .pricing-price-bold {
                    font-size: clamp(2.5rem, 4vw, 3.5rem);
                  }
                }

                .pricing-price {
                  font-size: 1.125rem; /* 18px */
                  color: #cbd5e1;
                  margin-bottom: 1.5rem; /* 24px */
                }

                .pricing-features-list {
                  list-style: none;
                  padding: 0;
                  margin-bottom: 1.5rem; /* Adjusted margin-bottom */
                  width: 100%; /* Take full width for features list */
                  flex-grow: 1; /* Allow features list to take available space */
                  display: flex;
                  flex-direction: column;
                  justify-content: flex-start; /* Align items to the start */
                  align-items: center;
                }

                .pricing-feature-item {
                  display: flex;
                  align-items: flex-start; /* Align icon and text to top */
                  margin-bottom: 0.5rem; /* 8px */
                  color: #cbd5e1;
                  width: 100%;
                  max-width: 200px; /* Constrain feature item width */
                  line-height: 1.4; /* Ensure text fits well */
                }
                .pricing-feature-item .feature-check { /* Specific styling for lucide icon within list */
                    color: #48bb78; /* green-500 */
                    margin-right: 0.5rem; /* 8px */
                    width: 1.25rem; /* 20px */
                    height: 1.25rem; /* 20px */
                    flex-shrink: 0; /* Prevent icon from shrinking */
                }
                .pricing-feature-item .feature-text-item { /* Added for better control over feature text */
                    text-align: left; /* Ensure text is left-aligned within the item */
                    flex-grow: 1; /* Allow text to take remaining space */
                }


                .pricing-target {
                  font-size: 0.875rem; /* 14px */
                  color: #a0aec0; /* gray-400 */
                  margin-top: auto; /* Push to bottom */
                  padding-top: 1rem; /* 16px */
                  border-top: 1px solid #2d3748;
                  width: 100%;
                }

                /* Team Section */
                .team-container {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  text-align: center;
                }

                .team-image {
                  width: 12rem; /* 192px */
                  height: 12rem; /* 192px */
                  border-radius: 9999px; /* full rounded */
                  object-fit: cover;
                  border: 4px solid #60a5fa; /* blue-500 */
                  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
                  margin-bottom: 1.5rem; /* 24px */
                  transition: transform 0.3s ease-in-out;
                }
                .team-image:hover {
                  transform: scale(1.05);
                }

                .team-name {
                  font-size: 1.875rem; /* 30px */
                  font-weight: 600;
                  color: #ffffff;
                  margin-bottom: 0.5rem; /* 8px */
                }

                .team-role {
                  font-size: 1.25rem; /* 20px */
                  color: #90cdf4; /* blue-300 */
                  margin-bottom: 1.5rem;
                }

                .team-description {
                  font-size: 1rem; /* 16px */
                  color: #cbd5e1;
                  max-width: 600px;
                  margin-left: auto;
                  margin-right: auto;
                  line-height: 1.6;
                }

                /* Roadmap Section */
                .roadmap-grid {
                  display: grid;
                  grid-template-columns: 1fr;
                  gap: 2rem; /* 32px */
                }
                .roadmap-substeps-list {
                    list-style: disc; /* Use bullet points */
                    padding-left: 1.5rem; /* Indent the list */
                    text-align: left; /* Align text left within the list */
                    color: #a0aec0; /* Gray text for substeps */
                    font-size: 0.95rem;
                    margin-top: 1rem;
                }

                .roadmap-substep-item {
                    margin-bottom: 0.5rem;
                }
                @media (min-width: 768px) {
                  .roadmap-grid {
                    grid-template-columns: repeat(3, 1fr);
                  }
                }

                .roadmap-card {
                  /* Inherits from .card */
                }

                /* Footer */
                .footer {
                  background-color: #1a202c; /* gray-900 */
                  text-align: center;
                  padding: 2.5rem 1.5rem; /* 40px 24px */
                  margin-top: 5rem; /* 80px */
                  border-top-left-radius: 30px;
                  border-top-right-radius: 30px;
                  box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.3);
                }

                .footer-content {
                  max-width: 1200px;
                  margin: 0 auto;
                }

                .footer-text {
                  font-size: 1.125rem; /* 18px */
                  color: #a0aec0; /* gray-400 */
                  margin-bottom: 0.75rem; /* 12px */
                }

                .footer-contact {
                  font-size: 1.125rem; /* 18px */
                  color: #a0aec0;
                  margin-bottom: 1.5rem; /* 24px */
                }

                .footer-link {
                  color: #60a5fa; /* blue-400 */
                  transition: color 0.3s ease-in-out;
                }
                .footer-link:hover {
                  text-decoration: underline;
                }

                .social-icons-container {
                  display: flex;
                  justify-content: center;
                  gap: 1.5rem; /* 24px */
                }

                .social-icon {
                  padding: 0.5rem; /* 8px */
                  border-radius: 9999px;
                  background-color: #2d3748; /* gray-700 */
                  border: 1px solid #4a5568; /* gray-600 */
                  transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out;
                }
                .social-icon:hover {
                  background-color: #4a5568;
                  border-color: #718096;
                }

                .social-icon-svg {
                  width: 1.5rem; /* 24px */
                  height: 1.5rem; /* 24px */
                  color: #a0aec0; /* gray-400 */
                }

                /* Media Queries for Responsiveness */

                /* Small devices (phones, 640px and up) - already handled by default column/gap setup */

                /* Medium devices (tablets, 768px and up) */
                @media (min-width: 768px) {
                  .navbar-content {
                    flex-direction: row;
                  }
                  .navbar-title {
                    margin-bottom: 0;
                  }
                  .hero-container {
                    padding: 10rem 3rem 8rem; /* 160px 48px 128px */
                  }
                  .hero-title {
                    font-size: 4rem; /* 64px */
                  }
                  .hero-subtitle {
                    font-size: 1.25rem; /* 20px */
                  }
                  .hero-buttons-container {
                    flex-direction: row;
                    gap: 1.5rem;
                  }
                  .button {
                    width: auto; /* Let content dictate width */
                  }
                  .section-container {
                    padding: 6rem 2.5rem; /* 96px 40px */
                  }
                  .section-title {
                    font-size: 3rem; /* 48px */
                  }
                  .card-title {
                    font-size: 1.75rem; /* 28px */
                  }
                  .pricing-title {
                    font-size: 2rem; /* 32px */
                  }
                  .pricing-price-bold {
                    font-size: 3.5rem; /* 56px */
                  }
                  .team-name {
                    font-size: 2rem; /* 32px */
                  }
                }

                /* Large devices (desktops, 1024px and up) */
                @media (min-width: 1024px) {
                  .hero-container {
                    padding: 12rem 4rem 10rem; /* 192px 64px 160px */
                  }
                  .hero-title {
                    font-size: 5rem; /* 80px */
                  }
                  .hero-subtitle {
                    font-size: 1.5rem; /* 24px */
                  }
                  .section-container {
                    padding: 7rem 4rem; /* 112px 64px */
                  }
                  .section-title {
                    font-size: 3.5rem; /* 56px */
                  }
                }
                `}
            </style>

            {/* Navbar Component */}
            <Navbar />

            {/* Hero Section Component */}
            <HeroSection />

            {/* Mission & Vision Section Component */}
            <MissionVisionSection />

            {/* Problem & Solution Section Component */}
            <ProblemSolutionSection />

            {/* Features Section Component */}
            <FeaturesSection />

            {/* Pricing Section Component */}
            <PricingSection />

            {/* Team Section Component */}
            <TeamSection />

            {/* Roadmap Section Component */}
            <RoadmapSection />

            {/* Footer Component */}
            <Footer />
        </div>
    );
};

// Navbar Component
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                {/* Updated href to point to the top of the page with a specific ID for proper navigation */}
                <a href="#top" className="navbar-title" onClick={() => scrollToSection('top')}>WiseTrade AI</a>
                <div className="navbar-nav">
                    <NavItem href="mission" text="Mission" />
                    <NavItem href="problem" text="Problem" />
                    <NavItem href="features" text="Features" />
                    <NavItem href="pricing" text="Pricing" />
                    <NavItem href="team" text="Team" />
                    <NavItem href="roadmap" text="Roadmap" />
                </div>
            </div>
        </nav>
    );
};

// Navbar Item Component
const NavItem = ({ href, text }) => (
    // Updated to use onClick for smooth scrolling to section IDs
    <a href={`#${href}`} className="nav-item" onClick={() => scrollToSection(href)}>
        {text}
    </a>
);

// Hero Section Component
const HeroSection = () => {
    return (
        <header id="top" className="hero-container"> {/* Added ID for Navbar to scroll to */}
            {/* Abstract shapes for background visual interest */}
            <div className="hero-blob hero-blob-1"></div>
            <div className="hero-blob hero-blob-2"></div>
            <div className="hero-blob hero-blob-3"></div>

            <div className="hero-content">
                <h1 className="hero-title">
                    WiseTrade AI: <span className="hero-title-highlight">Smarter Stock Analysis</span> for Everyone.
                </h1>
                <p className="hero-subtitle">
                    Simplify your trading journey with cutting-edge AI-powered insights and a powerful charting tool. Gain the edge you need without the overwhelming complexity.
                </p>
                <div className="hero-buttons-container">
                    {/* Updated onClick for smooth scrolling */}
                    <Button primary href="features">
                        Explore Features <ChevronRight className="button-icon" />
                    </Button>
                    <Button secondary href="pricing">
                        View Pricing
                    </Button>
                </div>
            </div>
        </header>
    );
};

// Reusable Button Component
const Button = ({ children, primary, secondary, href }) => {
    const buttonClasses = primary ? 'primary-button' : 'secondary-button';
    return (
        // Updated onClick for smooth scrolling
        <a href={`#${href}`} className={`button ${buttonClasses}`} onClick={() => scrollToSection(href)}>
            {children}
        </a>
    );
};

// Section Wrapper Component
const SectionWrapper = ({ id, title, children, bgColorClass }) => (
    <section id={id} className={`section-container ${bgColorClass}`}>
        <h2 className="section-title">
            {title}
            <span className="section-title-underline"></span>
        </h2>
        {children}
    </section>
);

// Card Component
const Card = ({ children, className = '' }) => (
    <div className={`card ${className}`}>
        {children}
    </div>
);

// Icon Container Component
const IconContainer = ({ children }) => (
    <div className="icon-container">
        {children}
    </div>
);

// Mission & Vision Section Component
const MissionVisionSection = () => (
    <SectionWrapper id="mission" title="Our Purpose" bgColorClass="section-bg-1">
        <div className="mission-vision-grid">
            <Card>
                <IconContainer><Compass className="icon-large" /></IconContainer>
                <h3 className="card-title">Our Mission</h3>
                <p className="card-text">
                    To simplify the stock analysis process, making it accessible to every trader, regardless of their expertise level.
                </p>
            </Card>
            <Card>
                <IconContainer><Eye className="icon-large" /></IconContainer>
                <h3 className="card-title">Our Vision</h3>
                <p className="card-text">
                    To provide an easy-to-use stock analysis and charting tool for non-experts, while also simplifying the process of generating high-quality insights for seasoned professionals.
                </p>
            </Card>
        </div>
    </SectionWrapper>
);

// Problem & Solution Section Component
const ProblemSolutionSection = () => (
    <SectionWrapper id="problem" title="The Challenge & Our Solution" bgColorClass="section-bg-2">
        <p className="section-subtitle">
            Understanding the hurdles traders face, we've crafted a solution that simplifies complexity and empowers informed decisions.
        </p>

        <div className="problem-solution-grid">
            <ProblemSolutionCard
                icon={<BookOpen className="icon-default" />}
                problemTitle="Investment Knowledge Gap"
                problemText="Stocks and other investment analysis have a large knowledge base that is required to be learned which leaves a lot of people unable to enter or lose their money"
                solutionText="We provide AI-driven insights on stock movement, leveraging financial indicators and company fundamentals, making complex data digestible."
            />
            <ProblemSolutionCard
                icon={<Timer className="icon-default" />}
                problemTitle="Analysis Overhead"
                problemText="Stock analysis depends on robust financial models that are set up by industry experts which takes a lot of time for the experts and are hard for the amateurs"
                solutionText="Access a strong library of indicators based on robust financial models, producing deep and quick insights into a company's health."
            />
            <ProblemSolutionCard
                icon={<Puzzle className="icon-default" />}
                problemTitle="Misaligned Solutions"
                problemText="There are multiple investment analysis tools that provide GPT capability, but it is not the core of their value proposition"
                solutionText="Charting + AI is our core functionality, simplifying the entire insight generation process into a seamless experience."
            />
        </div>

        <div className="why-now-container">
            <h3 className="why-now-title">Why Now? The Market is Ready.</h3>
            <p className="why-now-text">
                The feasibility of entering the stock market has never been simpler, but is not met by equivalent ability to make the right decision which risk a lot of money to be lost.
            </p>
            <div className="placeholder-chart-container">
                <img src="https://placehold.co/600x200/1e293b/a8a8a8?text=Market+Trend+Chart" alt="Market Trend Chart Placeholder" className="placeholder-image" />
                <p className="placeholder-image-text">Visuals from pitch deck showing increasing retail trade volume and demand for tools would go here.</p>
            </div>
        </div>
    </SectionWrapper>
);

// Problem Solution Card Component
const ProblemSolutionCard = ({ icon, problemTitle, problemText, solutionText }) => (
    <Card className="problem-solution-card">
        <IconContainer>{icon}</IconContainer>
        <h3 className="card-title">{problemTitle}</h3>
        <p className="card-text-problem">{problemText}</p>
        <div className="solution-highlight">Our Solution:</div>
        <p className="card-text-solution">{solutionText}</p>
    </Card>
);

// Features Section Component
const FeaturesSection = () => (
    <SectionWrapper id="features" title="Powerful Features for Smarter Trading" bgColorClass="section-bg-1">
        <div className="features-grid">
            <FeatureCard
                icon={<LineChart className="icon-default" />}
                title="Advanced Charting Tool"
                description="A powerful charting tool, similar to Tradingview, providing a clear overview of stock performance. Scalable to display custom charts upon AI agent requests."
            />
            <FeatureCard
                icon={<Activity className="icon-default" />}
                title="Comprehensive Indicators"
                description="Powerful visualization of key indicators (MACD, Volatility, etc.) directly on your charts. Plus, the ability to create and integrate your own indicators using Python."
            />
            <FeatureCard
                icon={<Sparkles className="icon-default" />}
                title="AI-Powered Insights & Chat"
                description="Generate actionable takeaways from charts using our AI model. Request the AI to highlight key trends or patterns with natural language queries."
            />
            <FeatureCard
                icon={<Globe className="icon-default" />}
                title="Access to global market charts"
                description="Gain access to charts for global stock markets, expanding your investment horizons and providing a comprehensive view."
            />
            <FeatureCard
                icon={<Bitcoin className="icon-default" />}
                title="Access to Crypto Assets (coins) charts"
                description="Track and analyze your favorite cryptocurrency assets with dedicated charting tools, offering detailed insights into the digital market."
            />
            <FeatureCard
                icon={<Lightbulb className="icon-default" />}
                title="Educational Edge"
                description="Our AI can explain complex financial concepts in plain language, making it an ideal teaching tool for retail investors and financial educators alike."
            />
        </div>
        <div className="app-mockup-container">
            <img src="https://placehold.co/800x450/1e293b/a8a8a8?text=WiseTrade+AI+App+Mockup" alt="WiseTrade AI Application Design" className="app-mockup-image" />
            <p className="placeholder-image-text">A visual representation of the WiseTrade AI application interface, as shown in your pitch deck.</p>
        </div>
    </SectionWrapper>
);

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => (
    <Card className="feature-card">
        <div className="feature-icon-wrapper">
            <IconContainer>{icon}</IconContainer>
        </div>
        <div className="feature-text-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{description}</p>
        </div>
    </Card>
);

// Pricing Section Component
const PricingSection = () => (
    <SectionWrapper id="pricing" title="Flexible Plans to Fit Your Needs" bgColorClass="section-bg-2">
        <p className="section-subtitle">
            Our main selling point is AI-Driven stock market analysis, offered through a flexible pricing model designed for diverse users.
        </p>

        <div className="pricing-grid">
            <PricingCard
                title="Freemium"
                price="Free"
                target="User acquisition"
                features={["Free basic charts", "5 AI queries/day", "Basic market data"]}
                isPopular={false}
            />
            <PricingCard
                title="Pro Tier"
                price="$29"
                period="/ month"
                target="Serious retail traders"
                features={["Unlimited AI queries", "Advanced indicators", "Real-time market data", "Priority support"]}
                isPopular={true}
            />
            <PricingCard
                title="Institutional"
                price="Custom"
                period="pricing"
                target="Hedge funds, educators"
                features={["Dedicated API access", "White-label solutions", "Bulk data feeds", "Dedicated account manager", "Custom integrations"]}
                isPopular={false}
            />
            <PricingCard
                title="Data Upsell"
                price="$10"
                period="/ month"
                target="Quant traders"
                features={["Alternative data (sentiment, news)", "Premium data sources", "Historical data access", "Advanced analytics"]}
                isPopular={false}
            />
            <PricingCard
                title="Affiliate Revenue"
                price="Commissions"
                period=""
                target="High-volume traders"
                features={["Broker sign-up commissions", "Exclusive trading bonuses", "Partner platform access"]}
                isPopular={false}
            />
        </div>
    </SectionWrapper>
);

// Pricing Card Component
const PricingCard = ({ title, price, period, target, features, isPopular }) => (
    <Card className={`pricing-card ${isPopular ? 'pricing-card-popular' : ''}`}>
        {isPopular && (
            <div className="popular-badge">
                <span className="popular-badge-text">Popular</span>
            </div>
        )}
        <h3 className="pricing-title">{title}</h3>
        <p className="pricing-price">
            <span className="pricing-price-bold">{price}</span> {period}
        </p>
        <ul className="pricing-features-list">
            {features.map((feature, index) => (
                <li key={index} className="pricing-feature-item">
                    <ChevronRight className="feature-check" />
                    <span className="feature-text-item">{feature}</span> {/* Wrapped text in a span for easier styling */}
                </li>
            ))}
        </ul>
        <p className="pricing-target">{target}</p>
    </Card>
);

// Team Section Component
const TeamSection = () => (
    <SectionWrapper id="team" title="Meet Our Visionary Team" bgColorClass="section-bg-1">
        <div className="team-container">
            <img
                src="https://placehold.co/200x200/0f172a/a8a8a8?text=Hassan+Alnamer" // Placeholder. Replace with actual image
                alt="Hassan Alnamer"
                className="team-image"
            />
            <h3 className="team-name">Hassan Alnamer</h3>
            <p className="team-role">Chief Executive Officer</p>
            <p className="team-description">
                Our team provides deep understanding of stock analysis technology, entrepreneurship and AI.
            </p>
        </div>
    </SectionWrapper>
);

// Roadmap Section Component
const RoadmapSection = () => (
    <SectionWrapper id="roadmap" title="Our Journey Ahead" bgColorClass="section-bg-2">
        <p className="section-subtitle">
            We will create the application in less than 2 months and ship it to production
        </p>

        <div className="roadmap-grid">
            <RoadmapStep
                icon={<LayoutDashboard className="icon-default" />}
                title="Develop UI"
                substeps={[
                    "Build application layout",
                    "Build Charting Tool"
                ]}
            />
            <RoadmapStep
                icon={<Code className="icon-default" />}
                title="Develop Functionality"
                substeps={[
                    "Build Charting Tool Functionality",
                    "Build required indicators",
                    "Develop ability for user to add indicators",
                    "Build AI agent Tool Functionality",
                    "Understand required AI agent",
                    "Develop a process for integrating AI models",
                    "Develop a process for integrating AI agent with indicators results"
                ]}
            />
            <RoadmapStep
                icon={<CheckSquare className="icon-default" />}
                title="Test"
                substeps={[
                    "Develop UI tests",
                    "Develop Functionality Test",
                    "Develop Security Tests",
                    "Validate results and iterate fix bugs"
                ]}
            />
        </div>
    </SectionWrapper>
);

// Roadmap Step Component
const RoadmapStep = ({ icon, title, substeps }) => (
    <Card className="roadmap-card">
        <IconContainer>{icon}</IconContainer>
        <h3 className="card-title">{title}</h3>
        <ul className="roadmap-substeps-list">
            {substeps.map((step, index) => (
                <li key={index} className="roadmap-substep-item">{step}</li>
            ))}
        </ul>
    </Card>
);

// Footer Component
const Footer = () => (
    <footer className="footer">
        <div className="footer-content">
            <p className="footer-text">&copy; {new Date().getFullYear()} WiseTrade AI. All rights reserved.</p>
            <p className="footer-contact">Contact us: <a href="mailto:info@wisetradeai.com" className="footer-link">info@wisetradeai.com</a></p>
            <div className="social-icons-container">
                {/* Social Media Icons - Updated to valid placeholder URLs and target="_blank" */}
                <a href="https://github.com/WiseTradeAI" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="social-icon-svg"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.83 9.504.475.088.65-.206.65-.468 0-.23-.008-.888-.014-1.744-2.782.607-3.37-1.34-3.37-1.34-.454-1.157-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.89 1.528 2.336 1.088 2.903.832.09-.645.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.945 0-1.09.39-1.984 1.03-2.68a3.684 3.684 0 010-2.825s-.325-.104 1.03-.428c.39-.112 1.02-.27 2.05-.268 1.03.002 1.66.156 2.05.268 1.355.324 1.03.428 1.03.428a3.684 3.684 0 010 2.825c.64.696 1.03 1.59 1.03 2.68 0 3.842-2.339 4.686-4.568 4.935.359.308.678.918.678 1.855 0 1.338-.012 2.417-.012 2.747 0 .265.174.558.655.466C20.133 20.217 23 16.462 23 12.017 23 6.484 18.522 2 12 2z"/></svg>
                </a>
                <a href="https://linkedin.com/company/WiseTradeAI" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="social-icon-svg"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM4 9h4v12H4zM6 7a2 2 0 110-4 2 2 0 010 4z"/></svg>
                </a>
                <a href="https://twitter.com/WiseTradeAI" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="social-icon-svg"><path d="M22.254 5.676c-.66.294-1.37.49-2.115.58-.752-.673-1.802-1.094-3.002-1.094-2.27 0-4.113 1.843-4.113 4.113 0 .324.037.64.108.94C8.948 9.53 5.765 7.844 3.6 4.992c-.378.64-.593 1.38-.593 2.17 0 1.428.724 2.69 1.824 3.424-.67-.02-1.298-.206-1.846-.508v.052c0 1.996 1.42 3.655 3.3 4.035-.347.094-.714.144-1.092.144-.267 0-.525-.026-.777-.074.524 1.63 2.04 2.82 3.834 2.85-1.418 1.11-3.2 1.77-5.148 1.77-.336 0-.668-.02-1-.059 1.83 1.176 3.993 1.863 6.32 1.863 7.585 0 11.724-6.288 11.724-11.724 0-.178-.004-.356-.01-.532.806-.58 1.498-1.31 2.048-2.144z"/></svg>
                </a>
            </div>
        </div>
    </footer>
);

export default App;
