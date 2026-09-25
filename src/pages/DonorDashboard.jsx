import {
  Package,
  Clock,
  Truck,
  HeartHandshake
} from "lucide-react";

import StatCard from "../components/StatCard";
import FoodCard from "../components/FoodCard";

import { useDonations } from "../context/DonationContext";

function NGODashboard() {
  const {
    donations,
    removeDonation
  } = useDonations();

  const foods = donations;

  const handleClaim = (food) => {
    removeDonation(food.id);

    alert(
      `You claimed ${food.quantity} ${food.unit} of ${food.foodName}!`
    );
  };

  return (
    <div className="dashboard">

      <div className="dashboard-header">
        <p className="dashboard-label">
          NGO DASHBOARD
        </p>

        <h1>
          Available Food
        </h1>

        <p>
          Find and claim surplus food
          available near you.
        </p>
      </div>


      <div className="stats-grid">

        <StatCard
          title="Available Meals"
          value={foods.reduce(
            (total, food) => total + food.quantity,
            0
          )}
          subtitle="Ready to claim"
          icon={<Package size={26} />}
        />

        <StatCard
          title="Urgent"
          value={
            foods.filter(
              (food) =>
                food.status === "URGENT" ||
                food.status === "CRITICAL"
            ).length
          }
          subtitle="Expires soon"
          icon={<Clock size={26} />}
        />

        <StatCard
          title="Nearby"
          value={
            foods.filter(
              (food) => food.distance <= 5
            ).length
          }
          subtitle="Within 5 km"
          icon={<Truck size={26} />}
        />

        <StatCard
          title="Meals Rescued"
          value="1,240"
          subtitle="This month"
          icon={<HeartHandshake size={26} />}
        />

      </div>


      <div className="food-section">

        <div className="section-header">

          <div>
            <h2>
              Available Donations
            </h2>

            <p>
              Fresh surplus food waiting
              for rescue.
            </p>
          </div>

          <span className="live-badge">
            ● LIVE
          </span>

        </div>


        <div className="food-grid">

          {foods.length > 0 ? (

            foods.map((food) => (

              <FoodCard
                key={food.id}
                food={food}
                onClaim={handleClaim}
              />

            ))

          ) : (

            <div className="empty-state">

              <Package size={50} />

              <h3>
                No food available
              </h3>

              <p>
                Check again later for new donations.
              </p>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default NGODashboard;