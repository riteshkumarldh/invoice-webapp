import { Link } from "react-router-dom";
import { useInvoice } from "../context/useContext";

export default function Invoices() {
  const { filtered } = useInvoice();

  return (
    <section className="invoice">
      <div className="invoice__wrapper">
        {filtered.length < 1 ? (
          <div className="empty">
            <h1>Not Found Any Invoices</h1>
          </div>
        ) : (
          filtered.map((invoice) => {
            const { createdAt } = invoice;
            const date = new Date(createdAt);
            const createdDate = date.toDateString();

            return (
              <Link
                key={invoice.id}
                to={`/invoice/${invoice.id}`}
                className="invoice__row"
              >
                <h3>#{invoice.id}</h3>
                <p className="name">{invoice.clientName}</p>
                <p>Due {createdDate}</p>
                <h2>₹{invoice.total.toFixed(2)}</h2>
                <div
                  className={`${
                    invoice.status === "paid"
                      ? "paid"
                      : invoice.status === "draft"
                      ? "draft"
                      : "pending"
                  }`}
                >
                  <span></span>
                  <h4>{invoice.status}</h4>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </section>
  );
}
