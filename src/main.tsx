import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import './index.css';
import RootLayout from "./Components/Layouts/RootLayout";
import Home from "./Components/Pages/Home";

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
} else {
  throw new Error("Root element not found");
}
