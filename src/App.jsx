import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import SingleInvoice from "./pages/SingleInvoice";

// components
import Header from "./components/Header";
import InvoiceForm from "./components/InvoiceForm";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <InvoiceForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invoice/:id" element={<SingleInvoice />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
