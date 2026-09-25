import { Link } from "react-router-dom";
import {
  Utensils,
  Truck,
  HeartHandshake
} from "lucide-react";

function Landing() {
  return (
    <>
      <section className="hero">

        <div className="hero-content">

          <div className="badge">
            🌱 Fighting Food Waste
          </div>

          <h1>
            Turn Surplus Food
            <br />
            Into Someone's
            <br />
            <span>Next Meal.</span>
          </h1>

          <p>
            Connect restaurants, NGOs and volunteers
            to rescue surplus food before it goes to waste.
          </p>

          <div className="hero-buttons">

            <Link
              to="/donor"
              className="primary-btn"
            >
              Donate Food
            </Link>

            <Link
              to="/ngo"
              className="secondary-btn"
            >
              Find Food
            </Link>

          </div>

        </div>

        <div className="hero-icon">
          <HeartHandshake size={180} />
        </div>

      </section>

      <section className="container">

        <div className="grid grid-3">

          <div className="card feature-card">
            <Utensils size={40} />

            <h3>Donate</h3>

            <p>
              Restaurants and events can list
              their surplus food.
            </p>
          </div>

          <div className="card feature-card">
            <HeartHandshake size={40} />

            <h3>Match</h3>

            <p>
              Find suitable NGOs nearby using
              smart matching.
            </p>
          </div>

          <div className="card feature-card">
            <Truck size={40} />

            <h3>Deliver</h3>

            <p>
              Volunteers transport food
              to shelters.
            </p>
          </div>

        </div>

      </section>
    </>
  );
}

export default Landing;