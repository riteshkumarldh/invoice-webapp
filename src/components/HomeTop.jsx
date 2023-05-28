// component
import { useState } from "react";
import CreateInvoiceButton from "./CreateInvoiceButton";
import { useInvoice } from "../context/useContext";

const filterOptions = [
  {
    id: 1,
    value: "Paid",
  },
  {
    id: 2,
    value: "Pending",
  },
  {
    id: 3,
    value: "Draft",
  },
];

export default function HomeTop() {
  const [filter, setFilter] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const { allInvoices, setFiltered, setForm } = useInvoice();

  const handleFilter = (selected) => {
    setShowFilter(false);

    if (filter === selected) {
      setFilter("");
      setFiltered(allInvoices);
      return;
    }

    setFiltered(
      allInvoices.filter((item) => {
        return item.status === selected.toLowerCase();
      })
    );

    setFilter(selected);
  };

  return (
    <div className="home__toppart">
      <div className="home__toppart--content">
        <h1>Invoices</h1>
        <p>There are 7 total invoices.</p>
      </div>
      <div className="home__toppart--filter">
        <div
          className="home__toppart--filter-text"
          onClick={() => setShowFilter((prev) => !prev)}
        >
          <h4>Filter</h4>
          <ion-icon name="chevron-down"></ion-icon>
        </div>
        <div className={`home__toppart--dropdown ${showFilter ? "open" : ""}`}>
          {filterOptions.map((option) => {
            return (
              <label
                key={option.id}
                htmlFor=""
                onClick={() => handleFilter(option.value)}
              >
                <span
                  className={`box ${filter === option.value ? "fill" : ""}`}
                >
                  <ion-icon name="checkmark-done-outline"></ion-icon>
                </span>
                <span>{option.value}</span>
              </label>
            );
          })}
        </div>
      </div>
      <CreateInvoiceButton setForm={setForm} />
    </div>
  );
}
