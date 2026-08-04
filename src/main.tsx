import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "@/app/App";
import { invariant } from "@/lib/assertions/invariant";
import "@/styles/global.css";

const rootElement = document.getElementById("root");

invariant(rootElement, "The application root element was not found.");

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
