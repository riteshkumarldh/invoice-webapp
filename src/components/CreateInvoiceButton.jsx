export default function CreateInvoiceButton({ setForm }) {
  return (
    <button className="home__addbutton" onClick={() => setForm(true)}>
      <span>
        <ion-icon name="add-outline"></ion-icon>
      </span>
      <h4>New Invoice</h4>
    </button>
  );
}
