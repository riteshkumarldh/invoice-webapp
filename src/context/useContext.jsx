import { useContext } from "react";
import { InvoiceContext } from "./invoiceContext";

export const useInvoice = () => {
  return useContext(InvoiceContext);
};
