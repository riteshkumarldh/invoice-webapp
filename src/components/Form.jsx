import { useEffect, useState } from "react";

export default function Form() {
  const [senderAddress, setSenderAddress] = useState({
    city: "",
    country: "",
    postCode: "",
    street: "",
  });

  const [clientAddress, setClientAddress] = useState({
    city: "",
    country: "",
    postCode: "",
    street: "",
  });

  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [paymentTerm, setPaymentTerm] = useState("1");
  const [description, setDescription] = useState("");
  const [items, setItems] = useState([]);

  const handleInvoiceDate = () => {
    const d = new Date();
    let date = d.getDate();
    let month = d.getMonth() + 1;
    const year = d.getFullYear();

    month = month < 10 ? `0${month}` : month;
    date = date < 10 ? `0${0}` : date;

    setInvoiceDate(`${year}-${month}-${date}`);
  };

  const settingDate = (e) => {
    const d = new Date(invoiceDate);
    let month = d.getMonth() + 1;
    let date = d.getDate();
    let year = d.getFullYear();
    let dueDt = date + +e.target.value;
    // console.log(dueDt);
    if ((dueDt >= 30) & (dueDt < 60)) {
      month += 1;
      dueDt = dueDt - 30 + 1;
      dueDt = dueDt < 10 ? `0${dueDt}` : dueDt;
      month = month < 10 ? `0${month}` : month;
      setDueDate(`${year}-${month}-${dueDt}`);
      //   console.log(month, dueDt);
    } else if (dueDt >= 60) {
      month += 2;
      dueDt = dueDt - 60 + 1;
      dueDt = dueDt < 10 ? `0${dueDt}` : dueDt;
      month = month < 10 ? `0${month}` : month;
      setDueDate(`${year}-${month}-${dueDt}`);
      //   console.log(month, dueDt);
    } else {
      console.log("Some Error in setting Dates");
    }
  };

  const handlePaymentTerm = (e) => {
    setPaymentTerm(e.target.value);
    settingDate(e);
  };

  const settingDateLoad = () => {
    const d = new Date(invoiceDate);
    let month = d.getMonth() + 1;
    let date = d.getDate();
    let year = d.getFullYear();
    let dueDt = date + 1;
    // console.log(dueDt);
    if ((dueDt >= 30) & (dueDt < 60)) {
      month += 1;
      dueDt = dueDt - 30 + 1;
      dueDt = dueDt < 10 ? `0${dueDt}` : dueDt;
      month = month < 10 ? `0${month}` : month;
      setDueDate(`${year}-${month}-${dueDt}`);
      //   console.log(month, dueDt);
    } else if (dueDt >= 60) {
      month += 2;
      dueDt = dueDt - 60 + 1;
      dueDt = dueDt < 10 ? `0${dueDt}` : dueDt;
      month = month < 10 ? `0${month}` : month;
      setDueDate(`${year}-${month}-${dueDt}`);
      //   console.log(month, dueDt);
    } else {
      console.log("Some Error in setting Dates");
    }
  };

  const handleList = () => {
    setItems((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: "",
        quantity: "",
        price: "",
        total: "",
      },
    ]);
  };

  const handleDeleteItem = (id) => {
    setItems((prev) =>
      prev.filter((item) => {
        return item.id !== id;
      })
    );
  };

  useEffect(() => {
    handleInvoiceDate();
    settingDateLoad();
  }, [invoiceDate]);

  //   console.log(senderAddress);
  //   console.log(clientName, clientEmail);
  //   console.log(clientAddress);

  const senderAddressForm = [
    {
      id: 1,
      name: "street",
      unique: "senderStreet",
      type: "text",
      label: "Street Address",
    },
    {
      id: 2,
      name: "city",
      unique: "senderCity",
      type: "text",
      label: "City",
    },
    {
      id: 3,
      name: "postCode",
      unique: "senderPostCode",
      type: "text",
      label: "Post Code",
    },
    {
      id: 4,
      name: "country",
      unique: "senderCountry",
      type: "text",
      label: "Country",
    },
  ];

  const clientAddressForm = [
    {
      id: 1,
      name: "street",
      unique: "clientStreet",
      type: "text",
      label: "Client Address",
    },
    {
      id: 2,
      name: "city",
      unique: "clientCity",
      type: "text",
      label: "City",
    },
    {
      id: 3,
      name: "postCode",
      unique: "clientPostCode",
      type: "text",
      label: "Post Code",
    },
    {
      id: 4,
      name: "country",
      unique: "clientCountry",
      type: "text",
      label: "Country",
    },
  ];

  return (
    <div className="form">
      <h3>Bill From</h3>
      <div className="form__senderAddress grid">
        {senderAddressForm.map((sender) => {
          return (
            <div key={sender.id}>
              <label htmlFor={sender.unique}>{sender.label}</label>
              <input
                value={senderAddress[sender.name]}
                onChange={(e) =>
                  setSenderAddress({
                    ...senderAddress,
                    [e.target.name]: e.target.value,
                  })
                }
                type={sender.type}
                name={sender.name}
                id={sender.unique}
              />
            </div>
          );
        })}
      </div>
      <div className="form__client">
        <h3>Bill To</h3>
        <div>
          <label htmlFor="clientName">Clients Name</label>
          <input
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            type="text"
            name="clientName"
            id="clientName"
          />
        </div>
        <div>
          <label htmlFor="clientEmail">Clients Email</label>
          <input
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
            type="email"
            name="clientEmail"
            id="clientEmail"
            placeholder="abc@gmail.com"
          />
        </div>

        <div className="form__clientAddress grid">
          {clientAddressForm.map((sender) => {
            return (
              <div key={sender.id}>
                <label htmlFor={sender.unique}>{sender.label}</label>
                <input
                  value={clientAddress[sender.name]}
                  onChange={(e) =>
                    setClientAddress({
                      ...clientAddress,
                      [e.target.name]: e.target.value,
                    })
                  }
                  type={sender.type}
                  name={sender.name}
                  id={sender.unique}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="form__payment">
        <div>
          <label htmlFor="invoiceDate">Invoice Date</label>
          <input
            value={invoiceDate}
            type="text"
            name="invoiceDate"
            id="invoiceDate"
            readOnly
          />
        </div>
        <div>
          <label htmlFor="terms">Payment Terms</label>
          <select
            name="terms"
            id="terms"
            value={paymentTerm}
            onChange={handlePaymentTerm}
          >
            <option value="1">Net 1 Day</option>
            <option value="5">Net 5 Days</option>
            <option value="15">Net 15 Days</option>
            <option value="30">Net 30 Days</option>
            <option value="50">Net 50 Days</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          name="description"
          id="description"
          placeholder="e.g: Surveillance Parts"
        />
      </div>

      <h2>ItemList</h2>

      <div className="">
        {items.length > 0 &&
          items.map((item) => {
            return (
              <div key={item.id} className="form__items">
                <div>
                  <label htmlFor="itemName">Item Name</label>
                  <input type="text" name="itemName" id="itemName" />
                </div>
                <div>
                  <label htmlFor="qty">Qty.</label>
                  <input type="text" name="qty" id="qty" />
                </div>
                <div>
                  <label htmlFor="price">Price</label>
                  <input type="text" name="price" id="price" />
                </div>
                <div>
                  <label htmlFor="total">Total</label>
                  <input
                    type="text"
                    value={+item.quantity * +item.price}
                    id="total"
                    readOnly
                  />
                </div>
                <div>
                  <ion-icon
                    onClick={() => handleDeleteItem(item.id)}
                    name="trash-outline"
                  ></ion-icon>
                </div>
              </div>
            );
          })}
      </div>
      <button onClick={handleList} className="form__addItem">
        + Add New Item
      </button>
    </div>
  );
}
