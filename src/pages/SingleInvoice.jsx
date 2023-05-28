import { Link, useParams } from "react-router-dom";
import { useInvoice } from "../context/useContext";

// components
import SingleInvoiceTop from "../components/SingleInvoiceTop";
import SingleInvoiceMain from "../components/SingleInvoiceMain";
import { useEffect, useState } from "react";

export default function SingleInvoice() {
  const { id } = useParams();
  const { allInvoices } = useInvoice();
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    setInvoices(
      allInvoices.filter((inv) => {
        return inv.id === id;
      })
    );
  }, [allInvoices, id]);

  return (
    <section className="main singleInvoice">
      <div className="singleInvoice__container">
        <Link to={"/"} className="singleInvoice__page">
          <ion-icon name="chevron-back-outline"></ion-icon>
          <span>Go back</span>
        </Link>

        {invoices.length < 1 ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <SingleInvoiceTop invoices={invoices} />

            <SingleInvoiceMain id={id} invoices={invoices} />
          </>
        )}
      </div>
    </section>
  );
}
