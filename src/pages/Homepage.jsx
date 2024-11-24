import React from "react";
import "../Styles/Homepage.css";

const Home = () => {
  return (
    <div className="home">
      <section className="welcome">
        <h1>Welcome to Vehicle Expiry Management System</h1>
        <p>
          This platform ensures effective management of vehicle expiry
          regulations. Vehicles over 15 years must undergo mandatory fitness
          testing per the Motor Vehicles Act, and non-compliance may lead to
          penalties.
        </p>
        <h2>Services Provided</h2>
        <ul>
          <li>Monitor vehicle expiry dates</li>
          <li>Pay fines</li>
          <li>Locate certified testing centers</li>
        </ul>
        <h2>Recent Updates</h2>
        <p>New vehicle testing centers have opened in Pune and Nashik.</p>
      </section>

      <section className="notices-updates">
        <h1>Notices & Updates</h1>
        <ul>
          <li>
            New rules for electric vehicle registration effective from January
            2024.
          </li>
          <li>Revised vehicle fitness testing fees.</li>
          <li>Mandatory emission testing for vehicles over 10 years old.</li>
        </ul>
      </section>

      <section className="service-centers">
        <h1>Authorized Service Centers</h1>
        <ul>
          <li>Pune Vehicle Testing Center - 123 Main Road, Pune</li>
          <li>Mumbai RTO - 456 Coastal Road, Mumbai</li>
          <li>Nashik RTO - 789 Highway, Nashik</li>
        </ul>
      </section>

      <section className="important-links">
        <h1>Important Links</h1>
        <ul>
          <li>
            <a href="https://example.com/motor-vehicles-act-1988">
              Motor Vehicles Act 1988
            </a>
          </li>
          <li>
            <a href="https://example.com/road-safety-guidelines">
              Road Safety Guidelines
            </a>
          </li>
          <li>
            <a href="https://example.com/emission-testing-guidelines">
              Emission Testing Guidelines
            </a>
          </li>
        </ul>
      </section>

      <section className="faq">
        <h1>Frequently Asked Questions</h1>
        <ul>
          <li>
            <strong>Q:</strong> What happens if my vehicle is older than 15
            years? <strong>A:</strong> The vehicle must undergo mandatory
            testing and certification to avoid fines.
          </li>
          <li>
            <strong>Q:</strong> How do I pay my fines? <strong>A:</strong> Fines
            can be paid through a secure payment gateway.
          </li>
        </ul>
      </section>

      <section className="statistics">
        <h1>Vehicle Expiry Statistics</h1>
        <ul>
          <li>
            Over 1.2 million vehicles have been tested across Maharashtra as of
            2023.
          </li>
          <li>90% of vehicles have passed fitness tests.</li>
          <li>Over ₹50 crores collected in fines for non-compliance.</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
