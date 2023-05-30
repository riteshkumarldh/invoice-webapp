import { useInvoice } from "../context/useContext";
// component
import Form from "./Form";

export default function InvoiceForm() {
  const { form, setForm } = useInvoice();
  return (
    <section className={`invoiceForm ${form ? "open" : ""}`}>
      <div className="invoiceForm__top">
        <h2>Create Invoice</h2>
      </div>

      <Form />

      <div className="invoiceForm__bottom">
        <button onClick={() => setForm(false)} className="cancel">
          Discard
        </button>

        <div>
          <button className="draft">Save as Draft</button>
          <button className="save">Save & Send</button>
        </div>

        <div
          onClick={() => setForm(false)}
          className={`invoiceForm__overlay ${form ? "open" : ""}`}
        ></div>
      </div>
    </section>
  );
}
