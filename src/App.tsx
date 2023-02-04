import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import { ProSidebarProvider } from "react-pro-sidebar";

function App() {
  return (
    <HashRouter >
      <ProSidebarProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </ProSidebarProvider>
    </HashRouter>
  );
}

export default App;
