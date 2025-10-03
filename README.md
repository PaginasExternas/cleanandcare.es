# Cleaning Company Website

Welcome to the Cleaning Company Website project! This project is built using Astro and Tailwind CSS to create a modern, responsive, and professional website for a cleaning services company.

## Project Structure

The project is organized as follows:

```
cleaning-company-website
├── src
│   ├── components          # Reusable components for the website
│   │   ├── Header.astro    # Header component with navigation
│   │   ├── Footer.astro    # Footer component with contact info
│   │   ├── ServiceCard.astro # Component for displaying cleaning services
│   │   └── ContactForm.astro # Contact form component
│   ├── layouts             # Layouts for the pages
│   │   └── Layout.astro    # Main layout wrapping header and footer
│   ├── pages               # Pages of the website
│   │   ├── index.astro     # Homepage
│   │   ├── services.astro   # Services listing page
│   │   ├── about.astro      # About the company page
│   │   └── contact.astro    # Contact page with form
│   └── styles              # Styles for the website
│       └── global.css      # Global styles including Tailwind CSS
├── public                  # Public assets
│   └── favicon.svg         # Favicon for the website
├── package.json            # NPM configuration file
├── astro.config.mjs        # Astro configuration file
├── tailwind.config.cjs     # Tailwind CSS configuration file
└── README.md               # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd cleaning-company-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:4321` to view the website.

## Features

- **Responsive Design:** The website is fully responsive and looks great on all devices.
- **Reusable Components:** Components like `ServiceCard` and `ContactForm` can be reused across different pages.
- **Modern Styling:** Utilizes Tailwind CSS for modern and customizable styling.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.