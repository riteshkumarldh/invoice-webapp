// components
import HomeTop from "../components/HomeTop";
import Invoices from "../components/Invoices";

export default function Home() {
  return (
    <section className="home main">
      <div className="container home__container">
        <HomeTop />
        <Invoices />
      </div>
    </section>
  );
}
