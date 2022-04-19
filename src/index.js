import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { GalleryProvider } from "./store/GalleryProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GalleryProvider>
    <App />
  </GalleryProvider>
);
