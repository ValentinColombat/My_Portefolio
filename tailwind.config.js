/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs modernes premium
        'modern': {
          'bg-primary': '#0a0a0b',
          'bg-secondary': '#1a1a1d',
          'bg-tertiary': '#2a2a2f',
          'text-primary': '#ffffff',
          'text-secondary': '#e5e5e7',
          'text-muted': '#86868b',
          'accent-blue': '#007aff',
          'accent-purple': '#af52de',
          'accent-pink': '#ff2d92',
          'accent-orange': '#ff9500',
          'accent-green': '#30d158',
          'accent-cyan': '#64d2ff',
        },
        // Configuration DaisyUI moderne
        'base-100': '#0a0a0b',
        'base-200': '#1a1a1d', 
        'base-300': '#2a2a2f',
        'base-content': '#ffffff',
        'primary': '#667eea',
        'primary-content': '#ffffff',
        'secondary': '#764ba2',
        'secondary-content': '#ffffff', 
        'accent': '#4facfe',
        'accent-content': '#ffffff',
        'neutral': '#86868b',
        'neutral-content': '#ffffff',
        'info': '#64d2ff',
        'info-content': '#0a0a0b',
        'success': '#30d158',
        'success-content': '#0a0a0b',
        'warning': '#ff9500',
        'warning-content': '#0a0a0b',
        'error': '#ff2d92',
        'error-content': '#ffffff',
      },
      fontFamily: {
        'mono': ['Fira Code', 'JetBrains Mono', 'Consolas', 'monospace'],
      },
      backgroundImage: {
        'gradient-modern': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-accent': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'gradient-hero': 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #4facfe 100%)',
        'gradient-orange': 'linear-gradient(135deg, #ff9500 0%, #ff6b35 50%, #ff4757 100%)',
        'gradient-tesla': 'linear-gradient(135deg, #000000 0%, #434343 100%)',
        'gradient-apple': 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      },
      boxShadow: {
        'modern': '0 20px 40px rgba(0, 0, 0, 0.4), 0 8px 16px rgba(0, 0, 0, 0.2)',
        'modern-lg': '0 32px 64px rgba(0, 0, 0, 0.3), 0 16px 32px rgba(103, 126, 234, 0.15)',
        'modern-glow': '0 8px 32px rgba(103, 126, 234, 0.15), 0 4px 16px rgba(118, 75, 162, 0.1)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        modern: {
          "primary": "#667eea",
          "primary-content": "#ffffff",
          "secondary": "#764ba2", 
          "secondary-content": "#ffffff",
          "accent": "#4facfe",
          "accent-content": "#ffffff",
          "neutral": "#86868b",
          "neutral-content": "#ffffff",
          "base-100": "#0a0a0b",
          "base-200": "#1a1a1d",
          "base-300": "#2a2a2f",
          "base-content": "#ffffff",
          "info": "#64d2ff",
          "info-content": "#0a0a0b",
          "success": "#30d158", 
          "success-content": "#0a0a0b",
          "warning": "#ff9500",
          "warning-content": "#0a0a0b",
          "error": "#ff2d92",
          "error-content": "#ffffff",
        },
      },
    ],
    base: true,
    styled: true,
    utils: true,
  },
}
