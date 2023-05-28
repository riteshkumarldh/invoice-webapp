import { createContext, useEffect, useState } from "react";

export const InvoiceContext = createContext(null);

export const InvoiceContextProvider = ({ children }) => {
  const [allInvoices, setInvoices] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [form, setForm] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    const fetchInvoices = async () => {
      const response = await fetch("../data/data.json");
      const data = await response.json();
      setInvoices(data.invoices);
      // setFiltered(data.invoices);
    };
    fetchInvoices();
  }, []);

  useEffect(() => {
    setFiltered(allInvoices);
  }, [allInvoices]);

  const updatePaymentStatus = (id) => {
    const index = allInvoices.findIndex((item) => {
      return item.id === id;
    });
    if (index >= 0) {
      const newArr = [...allInvoices];
      newArr[index].status = "paid";
      setInvoices(newArr);
    }
  };

  const value = {
    allInvoices,
    filtered,
    setFiltered,
    updatePaymentStatus,
    form,
    setForm,
    theme,
    setTheme,
  };

  return (
    <InvoiceContext.Provider value={value}>{children}</InvoiceContext.Provider>
  );
};
