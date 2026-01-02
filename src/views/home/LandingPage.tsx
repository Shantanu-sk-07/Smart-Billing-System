// src/views/home/LandingPage.tsx
import { Link } from "react-router-dom";
import { RoutePaths } from "@/constants/RoutePaths";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <section className="hero">
        <h1>Smart Billing Software</h1>
        <p>Fast, Simple & Secure Billing for your Business</p>
        <div className="buttons">
          <Link to={RoutePaths.Login} className="btn btn-primary">Login</Link>
          <Link to={RoutePaths.Register} className="btn btn-secondary">Sign Up</Link>
        </div>
      </section>
      <section className="highlights">
        <h2>Features You'll Love</h2>
        <ul>
          <li>Generate invoices instantly</li>
          <li>UPI Payments integrated</li>
          <li>Track sales & customers</li>
          <li>Customizable for your business</li>
        </ul>
      </section>
    </div>
  );
};

export default LandingPage;
