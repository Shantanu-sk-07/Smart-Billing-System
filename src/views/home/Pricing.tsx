// src/views/home/PricingPage.tsx
const PricingPage = () => {
  return (
    <div className="pricing-page">
      <h1>Pricing Plans</h1>
      <div className="plans">
        <div className="plan">
          <h2>Basic</h2>
          <p>₹499 / month</p>
          <ul>
            <li>Up to 50 invoices</li>
            <li>UPI Payment Integration</li>
          </ul>
        </div>
        <div className="plan">
          <h2>Pro</h2>
          <p>₹999 / month</p>
          <ul>
            <li>Unlimited invoices</li>
            <li>UPI & Custom Templates</li>
            <li>Analytics & Reports</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
