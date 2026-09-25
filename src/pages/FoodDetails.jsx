import {
  ArrowLeft,
  MapPin,
  Clock,
  Utensils,
  User,
  Package,
  CheckCircle
} from "lucide-react";

import {
  useNavigate,
  useParams
} from "react-router-dom";

import { useDonations } from "../context/DonationContext";

function FoodDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    donations,
    removeDonation
  } = useDonations();

  const food = donations.find(
    (item) => item.id === Number(id)
  );

  if (!food) {
    return (
      <div className="not-found">
        <h2>
          Food donation not found
        </h2>

        <button
          onClick={() => navigate("/ngo")}
        >
          Back to NGO Dashboard
        </button>
      </div>
    );
  }

  const handleClaim = () => {
    removeDonation(food.id);

    alert(
      `Successfully claimed ${food.quantity} ${food.unit} of ${food.foodName}!`
    );

    navigate("/ngo");
  };

  return (
    <div className="food-details-page">

      <button
        className="back-btn"
        onClick={() => navigate("/ngo")}
      >
        <ArrowLeft size={18} />
        Back to Donations
      </button>


      <div className="details-container">

        <div className="details-main">

          <span
            className={`status ${food.status.toLowerCase()}`}
          >
            {food.status}
          </span>

          <h1>
            {food.foodName}
          </h1>

          <p className="details-type">
            <Utensils size={18} />
            {food.foodType}
          </p>


          <div className="details-grid">

            <div className="detail-box">
              <Package size={22} />

              <div>
                <span>
                  Quantity
                </span>

                <strong>
                  {food.quantity} {food.unit}
                </strong>
              </div>
            </div>


            <div className="detail-box">
              <Clock size={22} />

              <div>
                <span>
                  Time Remaining
                </span>

                <strong>
                  {food.expiryMinutes} minutes
                </strong>
              </div>
            </div>


            <div className="detail-box">
              <MapPin size={22} />

              <div>
                <span>
                  Distance
                </span>

                <strong>
                  {food.distance} km
                </strong>
              </div>
            </div>


            <div className="detail-box">
              <User size={22} />

              <div>
                <span>
                  Donor
                </span>

                <strong>
                  {food.donor}
                </strong>
              </div>
            </div>

          </div>


          <div className="description-box">

            <h2>
              About this donation
            </h2>

            <p>
              This surplus food has been listed by
              the donor for nearby NGOs to rescue
              and distribute to people in need.
            </p>

          </div>


          <div className="location-box">

            <MapPin size={25} />

            <div>

              <h3>
                Pickup Location
              </h3>

              <p>
                {food.pickupLocation ||
                  "Donor location will be shown here"}
              </p>

            </div>

          </div>

        </div>


        <div className="claim-panel">

          <h2>
            Rescue this food
          </h2>

          <p>
            Claim this donation and arrange
            pickup from the donor.
          </p>


          <div className="claim-summary">

            <div>
              <span>
                Food
              </span>

              <strong>
                {food.foodName}
              </strong>
            </div>


            <div>
              <span>
                Quantity
              </span>

              <strong>
                {food.quantity} {food.unit}
              </strong>
            </div>


            <div>
              <span>
                Expires in
              </span>

              <strong>
                {food.expiryMinutes} minutes
              </strong>
            </div>

          </div>


          <button
            className="claim-food-btn"
            onClick={handleClaim}
          >
            <CheckCircle size={19} />
            Claim Food
          </button>


          <p className="claim-note">
            By claiming this donation, your NGO
            agrees to arrange pickup and distribution.
          </p>

        </div>

      </div>

    </div>
  );
}

export default FoodDetails;