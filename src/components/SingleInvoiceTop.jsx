import { useState } from "react";
import { useInvoice } from "../context/useContext";

export default function SingleInvoiceTop({ invoices }) {
  const { updatePaymentStatus } = useInvoice();
  const [modal, setModal] = useState(false);

  return (
    <div className="singleInvoice__top">
      <div className="singleInvoice__top--status">
        <span>Status</span>
        <div
          className={`singleInvoice__top--status-btn ${
            invoices[0].status === "paid"
              ? "paid"
              : invoices[0].status === "pending"
              ? "pending"
              : "draft"
          }`}
        >
          <span></span>
          <h4>{invoices[0].status}</h4>
        </div>
      </div>
      <div className="singleInvoice__top--actions">
        <button className="edit">Edit</button>
        <button className="delete" onClick={() => setModal((prev) => !prev)}>
          Delete
        </button>
        {invoices[0].status === "pending" || invoices[0].status === "draft" ? (
          <button
            onClick={() => updatePaymentStatus(invoices[0].id)}
            className="marked"
          >
            Mark Paid
          </button>
        ) : null}
      </div>

      <div className={`overlay ${modal ? "active" : ""}`}>
        <div className="modal">
          <button
            className="modal__close"
            onClick={() => setModal((prev) => !prev)}
          >
            <ion-icon name="close-outline"></ion-icon>
          </button>
          <h2>Confirm Deletion</h2>
          <p>
            Are you sure you want to delete invoice CO0173? This action cannot
            be undone.
          </p>
          <div className="modal__actions">
            <button
              onClick={() => setModal((prev) => !prev)}
              className="cancel"
            >
              Cancel
            </button>
            <button className="delete">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
