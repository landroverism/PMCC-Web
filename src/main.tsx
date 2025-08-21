import { createRoot } from "react-dom/client";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import App from "./App";
import { initAnalytics } from "./lib/analytics";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

initAnalytics();

const rootElement = document.getElementById("root")!;

createRoot(rootElement).render(
  <ConvexAuthProvider client={convex}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </ConvexAuthProvider>,
);

// Fade out and remove the splash screen after React mounts
const hideSplashScreen = () => {
  const splash = document.getElementById("splash");
  if (!splash) return;
  // Trigger fade-out
  splash.classList.add("splash--hide");
  // Remove from DOM after transition
  window.setTimeout(() => {
    splash.remove();
  }, 450);
};

// Wait ~4 seconds after first paint, then hide the splash
requestAnimationFrame(() => {
  window.setTimeout(() => {
    hideSplashScreen();
  }, 6000);
});
