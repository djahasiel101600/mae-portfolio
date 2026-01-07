import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./components/theme-provider";
import { HelmetProvider } from "react-helmet-async"

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <StrictMode>
      <ThemeProvider defaultTheme="light" storageKey="mae-portfolio-theme">
        <App />
      </ThemeProvider>
    </StrictMode>
  </HelmetProvider>
);
