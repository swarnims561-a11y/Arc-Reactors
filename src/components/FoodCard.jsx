import {
  MapPin,
  Utensils,
  User
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import ExpiryTimer from "./ExpiryTimer";
import MatchBadge from "./MatchBadge";


function FoodCard({
  food,
  ngoRequirements
}) {

  const navigate = useNavigate();


  const handleDetails = () => {

    navigate(`/food/${food.id}`);

  };


  return (
    <div className="food-card">

      <div className="food-card-top">

        <div>

          <span
            className={`status ${food.status.toLowerCase()}`}
          >
            {food.status}
          </span>

          <h3>
            {food.foodName}
          </h3>

        </div>


        <div className="food-quantity">

          {food.quantity}

          <span>
            {food.unit}
          </span>

        </div>

      </div>


      <p className="food-type">

        <Utensils size={16} />

        {food.foodType}

      </p>


      {/* AI MATCH */}

      {ngoRequirements && (

        <MatchBadge
          food={food}
          ngoRequirements={ngoRequirements}
        />

      )}


      {/* EXPIRY TIMER */}

      <ExpiryTimer
        initialMinutes={food.expiryMinutes}
      />


      <div className="food-info">

        <div>

          <User size={16} />

          {food.donor}

        </div>


        <div>

          <MapPin size={16} />

          {food.distance} km away

        </div>

      </div>


      <button
        className="details-btn"
        onClick={handleDetails}
      >
        View Details
      </button>

    </div>
  );
}

export default FoodCard;