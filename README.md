# Inready Workgroup - Public Website

A modern Next.js application for the Inready Workgroup study club at UIN Alauddin Makassar, built with TypeScript, Tailwind CSS, and Bun.

## 🚀 Project Overview

This is the official public website for **Inready Workgroup**, a study club focused on IT development and organizational skills for students at UIN Alauddin Makassar. The website showcases the organization's activities, profile information, and serves as a platform for community engagement.

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: Bun
- **Data Fetching**: SWR

## 📁 Project Structure

```
├── .env                    # Environment variables
├── .github/workflows/      # CI/CD workflows
├── public/                 # Static assets
├── src/
│   ├── app/
│   │   ├── (home)/        # Home page with parallel routes
│   │   │   ├── @hero/     # Hero section slot
│   │   │   └── @kegiatan/ # Activities section slot
│   │   ├── (pages)/       # Other pages
│   │   │   └── profil/    # Profile pages
│   │   └── _components/   # Shared components
│   ├── assets/            # Static assets (icons, images)
│   └── utils/             # Utility functions
├── package.json
├── next.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Environment variables configured

### Installation

1. **Clone the repository**

    ```bash
    git clone <repository-url>
    cd fe-inr-public-next
    ```

2. **Install dependencies**

    ```bash
    bun install
    ```

3. **Set up environment variables**

    ```bash
    cp .env.example .env
    # Configure your API_URL and other variables
    ```

4. **Run development server**

    ```bash
    bun run dev
    ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📦 Available Scripts

```json
{
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
}
```

## 🌐 Deployment

The project uses automated deployment via GitHub Actions:

### Deployment Pipeline:

1. **Trigger**: Push to `main` branch
2. **Process**:
    - SSH into VPS server
    - Pull latest code from Git
    - Install dependencies with Bun
    - Build the application
    - Restart PM2 process

## 🎨 Styling

### Tailwind CSS Configuration

- Custom color scheme with primary/secondary colors
- Responsive breakpoints
- Custom utilities for specific layouts

### Key Design Elements:

- **Colors**: Primary blue, secondary yellow, grey variations
- **Typography**: Responsive text sizing
- **Layout**: Grid-based with custom positioning
- **Animations**: Hover effects and transitions

## 📞 Contact

**Inready Workgroup**  
UIN Alauddin Makassar  
IT Study Club & Community

---

Built with ❤️ by Inready Workgroup Development Team
