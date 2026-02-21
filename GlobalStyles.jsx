import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState, useEffect, useRef } from 'react'
import { FiMenu, FiX, FiArrowDown, FiGithub, FiLinkedin, FiMail, FiSend, FiCheck, FiLoader, FiBriefcase, FiCode, FiServer, FiLayout, FiTool, FiShield, FiUsers, FiZap, FiExternalLink, FiHeart } from 'react-icons/fi'

// Global Styles Component
const GlobalStyles = () => (
  <style>{`
    :root {
      --primary-color: #3b82f6;
      --primary-dark: #2563eb;
      --primary-light: #60a5fa;
      --accent-color: #8b5cf6;
      --secondary-color: #64748b;
      --text-dark: #0f172a;
      --text-light: #475569;
      --text-muted: #94a3b8;
      --bg-white: #ffffff;
      --bg-light: #f8fafc;
      --bg-dark: #0f172a;
      --border-color: #e2e8f0;
      --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      --radius: 12px;
      --radius-lg: 16px;
    }

    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html { scroll-behavior: smooth; }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: var(--text-dark);
      background-color: var(--bg-white);
      overflow-x: hidden;
    }

    section {
      padding: 5rem 1rem;
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
    }

    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--text-dark);
      margin-bottom: 1rem;
      position: relative;
      display: inline-block;
    }

    .section-title::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 4px;
      background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
      border-radius: 2px;
    }

    .section-subtitle {
      font-size: 1.1rem;
      color: var(--text-light);
      max-width: 600px;
      margin: 1.5rem auto 0;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.875rem 2rem;
      font-size: 1rem;
      font-weight: 600;
      text-decoration: none;
      border: none;
      border-radius: 50px;
      cursor: pointer;
      transition: var(--transition);
      position: relative;
      overflow: hidden;
    }

    .btn-primary {
      background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
      color: white;
      box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
    }

    .scroll-animate {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }

    .scroll-animate.visible {
      opacity: 1;
      transform: translateY(0);
    }

    @keyframes fadeInLeft {
      from { opacity: 0; transform: translateX(-50px); }
      to { opacity: 1; transform: translateX(0); }
    }

    @keyframes fadeInRight {
      from { opacity: 0; transform: translateX(50px); }
      to { opacity: 1; transform: translateX(0); }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    @media (max-width: 768px) {
      section { padding: 3rem 1rem; }
      .section-title { font-size: 2rem; }
    }
  `}</style>
)

export default GlobalStyles
