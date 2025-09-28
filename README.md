# Zenith: Minimalist Task Manager

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/siagung/generated-app-20250928-024752)

Zenith is a visually stunning, minimalist task management web application designed for clarity, focus, and simplicity. It's a mobile-first Progressive Web App (PWA) built with React and served by Cloudflare Workers, delivering a native-like feel and experience on mobile devices. The application prioritizes performance, clean aesthetics, and intuitive interaction. The core functionality allows users to effortlessly add, complete, and delete tasks within a serene, uncluttered interface.

The design philosophy is rooted in minimalism, utilizing generous white space, a refined color palette, and elegant typography to create a calm and productive environment.

## Key Features

- **Minimalist & Focused UI**: A clean, distraction-free interface to help you focus on your tasks.
- **Core Task Management**: Effortlessly add, complete, and delete tasks.
- **Smooth Animations**: Built with Framer Motion for delightful micro-interactions and a fluid user experience.
- **Responsive & Mobile-First**: Flawless performance and layout across all device sizes, from mobile phones to desktops.
- **Client-Side State**: Fast, responsive state management powered by Zustand, with no backend database required.
- **Light & Dark Modes**: Beautifully crafted themes that adapt to your system preference.
- **Built for Performance**: Served globally on the edge via Cloudflare Workers for an instant-loading experience.

## Technology Stack

- **Framework**: React
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Cloudflare Workers

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Bun](https://bun.sh/) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/zenith_task_manager.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd zenith_task_manager
    ```

3.  **Install dependencies:**
    ```bash
    bun install
    ```

## Development

To start the local development server, run the following command:

```bash
bun dev
```

The application will be available at `http://localhost:3000` (or the next available port). The server will automatically reload when you make changes to the code.

## Building for Production

To create a production-ready build of the application, run:

```bash
bun build
```

This command bundles the React application into static files in the `dist` directory and prepares the Cloudflare Worker for deployment.

## Deployment

This project is configured for seamless deployment to Cloudflare's global network.

1.  **Log in to Wrangler:**
    If you haven't already, you'll need to authenticate the Wrangler CLI with your Cloudflare account.
    ```bash
    bunx wrangler login
    ```

2.  **Deploy the application:**
    Run the deploy script from the root of the project:
    ```bash
    bun deploy
    ```

This command will build the application and deploy it to your Cloudflare account. Wrangler will provide you with the URL where your application is live.

Alternatively, you can deploy your own version of this project with a single click.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/siagung/generated-app-20250928-024752)

## Contributing

Contributions are welcome! If you have suggestions for improving the application, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.