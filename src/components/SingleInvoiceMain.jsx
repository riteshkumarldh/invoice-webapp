export default function SingleInvoiceMain({ id, invoices }) {
  console.log(invoices);
  return (
    <div className="singleInvoice__details">
      <div className="singleInvoice__details--top">
        <div>
          <h3>
            <span>#</span>
            {id}
          </h3>
          <p>Re-branding</p>
        </div>
        <div>
          <p>{invoices[0].senderAddress.street}</p>
          <p>{invoices[0].senderAddress.city}</p>
          <p>{invoices[0].senderAddress.postCode}</p>
          <p>{invoices[0].senderAddress.country}</p>
        </div>
      </div>

      <div className="singleInvoice__details--mid">
        <div className="date">
          <div>
            <p>Invoice Date</p>
            <h3>{invoices[0].createdAt}</h3>
          </div>

          <div>
            <p>Payment Due</p>
            <h3>{invoices[0].paymentDue}</h3>
          </div>
        </div>
        <div className="bill">
          <p>Bill To</p>
          <div>
            <h3>{invoices[0].clientName}</h3>
            <p>{invoices[0].clientAddress.street}</p>
            <p>{invoices[0].clientAddress.city}</p>
            <p>{invoices[0].clientAddress.postCode}</p>
            <p>{invoices[0].clientAddress.country}</p>
          </div>
        </div>
        <div className="mail">
          <p>Sent to</p>
          <a href={`mailto:${invoices[0].clientEmail}`}>
            {invoices[0].clientEmail}
          </a>
        </div>
      </div>

      <div className="singleInvoice__details--bottom">
        <table>
          <tbody>
            <tr>
              <td>Item Name</td>
              <td className="none"> QTY. </td>
              <td className="none">Price </td>
              <td className="none">Total</td>
            </tr>
            {invoices[0].items.map((item, i) => {
              return (
                <tr key={i} className="data">
                  <td>{item.name}</td>
                  <td className="none">{item.quantity}</td>
                  <td className="none">₹{item.price.toFixed(2)} </td>
                  <td className="none">₹{item.total.toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="singleInvoice__details--amount">
        <h4>Amount Due</h4>
        <h2>₹{invoices[0].total.toFixed(2)}</h2>
      </div>
    </div>
  );
}
