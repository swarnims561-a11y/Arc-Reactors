import {
  Package,
  Clock,
  Truck,
  HeartHandshake
} from "lucide-react";

import StatCard from "../components/StatCard";
import FoodCard from "../components/FoodCard";

import { useDonations } from "../context/DonationContext";

import {
  calculateMatchScore
} from "../data/matchingEngine";


function NGODashboard() {

  const {
    donations,
    removeDonation
  } = useDonations();


  /*
    Demo NGO requirement.

    Later this can come from:
    - NGO profile
    - database
    - login account
    - real NGO requirements
  */

  const ngoRequirements = {

    foodType: "Any",

    requiredMeals: 40

  };


  /*
    Calculate AI match score
    for every available donation.
  */

  const foods = [...donations].sort(
    (a, b) => {

      const scoreA =
        calculateMatchScore(
          a,
          ngoRequirements
        );

      const scoreB =
        calculateMatchScore(
          b,
          ngoRequirements
        );

      return scoreB - scoreA;

    }
  );


  const handleClaim = (food) => {

    removeDonation(food.id);

    alert(
      `You claimed ${food.quantity} ${food.unit} of ${food.foodName}!`
    );

  };


  return (
    <div className="dashboard">

      {/* HEADER */}

      <div className="dashboard-header">

        <p className="dashboard-label">
          NGO DASHBOARD
        </p>

        <h1>
          Available Food
        </h1>

        <p>
          AI-powered recommendations help you
          find the most suitable surplus food.
        </p>

      </div>


      {/* AI REQUIREMENT CARD */}

      <div className="ngo-ai-card">

        <div className="ngo-ai-icon">
          ✨
        </div>

        <div>

          <span className="ngo-ai-label">
            AI MATCHING ACTIVE
          </span>

          <h3>
            Finding food for your NGO
          </h3>

          <p>
            Required: approximately{" "}
            <strong>
              {ngoRequirements.requiredMeals} meals
            </strong>
            {" "}• Food type:{" "}
            <strong>
              {ngoRequirements.foodType}
            </strong>
          </p>

        </div>

      </div>


      {/* STATS */}

      <div className="stats-grid">

        <StatCard
          title="Available Meals"
          value={foods.reduce(
            (total, food) =>
              total + food.quantity,
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
              (food) =>
                food.distance <= 5
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


      {/* FOOD SECTION */}

      <div className="food-section">

        <div className="section-header">

          <div>

            <h2>
              AI Recommended Donations
            </h2>

            <p>
              Donations are sorted by how well
              they match your NGO's requirements.
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
                ngoRequirements={ngoRequirements}
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