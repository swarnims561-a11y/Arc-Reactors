import { useState } from "react";

import {
  Truck,
  MapPin,
  Clock,
  Package,
  Navigation,
  CheckCircle,
  Circle
} from "lucide-react";

import DeliveryMap from "../components/DeliveryMap";

function VolunteerDashboard() {

  const [status, setStatus] = useState("AVAILABLE");

  const pickup = {
    foodName: "Paneer Rice",
    quantity: 100,
    unit: "meals",
    donor: "My College Canteen",
    pickupLocation: "My College Canteen, Jaipur",
    dropLocation: "Hope Shelter, Jaipur",
    distance: 2.5,
    eta: 12
  };

  const handleAccept = () => {
    setStatus("ACCEPTED");
  };

  const handleStartPickup = () => {
    setStatus("PICKUP_STARTED");
  };

  const handlePickedUp = () => {
    setStatus("PICKED_UP");
  };

  const handleDelivered = () => {
    setStatus("DELIVERED");
  };

  return (
    <div className="volunteer-page">

      {/* HEADER */}

      <div className="volunteer-header">

        <div>

          <p className="dashboard-label">
            VOLUNTEER DASHBOARD
          </p>

          <h1>
            Rescue & Deliver
          </h1>

          <p>
            Help transport surplus food to people
            who need it.
          </p>

        </div>

        <div className="volunteer-status">

          <Circle
            size={12}
            fill="currentColor"
          />

          {status.replace("_", " ")}

        </div>

      </div>


      {/* MAIN DELIVERY CARD */}

      <div className="pickup-card">

        <div className="pickup-card-header">

          <div className="pickup-icon">
            <Truck size={28} />
          </div>

          <div>

            <p>
              ACTIVE DELIVERY
            </p>

            <h2>
              Food Pickup
            </h2>

          </div>

        </div>


        {/* FOOD */}

        <div className="volunteer-food">

          <div className="food-icon">
            <Package size={24} />
          </div>

          <div>

            <h3>
              {pickup.foodName}
            </h3>

            <p>
              {pickup.quantity} {pickup.unit}
            </p>

          </div>

        </div>


        {/* ROUTE */}

        <div className="route-section">

          <div className="route-point">

            <div className="route-dot pickup-dot">
              <MapPin size={16} />
            </div>

            <div>

              <span>
                PICKUP FROM
              </span>

              <h3>
                {pickup.donor}
              </h3>

              <p>
                {pickup.pickupLocation}
              </p>

            </div>

          </div>


          <div className="route-line"></div>


          <div className="route-point">

            <div className="route-dot drop-dot">
              <Navigation size={16} />
            </div>

            <div>

              <span>
                DELIVER TO
              </span>

              <h3>
                Hope Shelter
              </h3>

              <p>
                {pickup.dropLocation}
              </p>

            </div>

          </div>

        </div>


        {/* DELIVERY STATS */}

        <div className="delivery-stats">

          <div>

            <MapPin size={20} />

            <span>
              Distance
            </span>

            <strong>
              {pickup.distance} km
            </strong>

          </div>


          <div>

            <Clock size={20} />

            <span>
              ETA
            </span>

            <strong>
              {pickup.eta} min
            </strong>

          </div>


          <div>

            <Package size={20} />

            <span>
              Food
            </span>

            <strong>
              {pickup.quantity} meals
            </strong>

          </div>

        </div>


        {/* ACTION BUTTONS */}

        <div className="volunteer-actions">

          {status === "AVAILABLE" && (

            <button
              className="accept-pickup-btn"
              onClick={handleAccept}
            >
              <Truck size={19} />
              Accept Pickup
            </button>

          )}


          {status === "ACCEPTED" && (

            <button
              className="accept-pickup-btn"
              onClick={handleStartPickup}
            >
              <Navigation size={19} />
              Start Pickup
            </button>

          )}


          {status === "PICKUP_STARTED" && (

            <button
              className="accept-pickup-btn"
              onClick={handlePickedUp}
            >
              <Package size={19} />
              Mark as Picked Up
            </button>

          )}


          {status === "PICKED_UP" && (

            <button
              className="accept-pickup-btn"
              onClick={handleDelivered}
            >
              <CheckCircle size={19} />
              Mark as Delivered
            </button>

          )}


          {status === "DELIVERED" && (

            <div className="delivery-complete">

              <CheckCircle size={24} />

              <div>

                <strong>
                  Delivery Completed!
                </strong>

                <p>
                  Food has been successfully delivered.
                </p>

              </div>

            </div>

          )}

        </div>

      </div>


      {/* MAP */}

      <div className="map-card">

        <div className="map-card-header">

          <div>

            <h2>
              Delivery Route
            </h2>

            <p>
              Pickup to NGO delivery route
            </p>

          </div>

          <span className="map-live">
            ● LIVE ROUTE
          </span>

        </div>

        <DeliveryMap />

      </div>


      {/* DELIVERY STATUS */}

      <div className="delivery-status-card">

        <h2>
          Delivery Progress
        </h2>

        <p>
          Track your current delivery status.
        </p>


        <div className="progress-list">

          {/* STEP 1 */}

          <div
            className={`progress-item ${
              status !== "AVAILABLE"
                ? "completed"
                : ""
            }`}
          >

            <div className="progress-icon">

              {status !== "AVAILABLE"
                ? <CheckCircle size={20} />
                : <Circle size={20} />
              }

            </div>

            <div>

              <strong>
                Pickup Accepted
              </strong>

              <span>
                Volunteer assigned
              </span>

            </div>

          </div>


          {/* STEP 2 */}

          <div
            className={`progress-item ${
              [
                "PICKUP_STARTED",
                "PICKED_UP",
                "DELIVERED"
              ].includes(status)
                ? "completed"
                : ""
            }`}
          >

            <div className="progress-icon">

              {[
                "PICKUP_STARTED",
                "PICKED_UP",
                "DELIVERED"
              ].includes(status)
                ? <CheckCircle size={20} />
                : <Circle size={20} />
              }

            </div>

            <div>

              <strong>
                Pickup Started
              </strong>

              <span>
                Travelling to donor
              </span>

            </div>

          </div>


          {/* STEP 3 */}

          <div
            className={`progress-item ${
              [
                "PICKED_UP",
                "DELIVERED"
              ].includes(status)
                ? "completed"
                : ""
            }`}
          >

            <div className="progress-icon">

              {[
                "PICKED_UP",
                "DELIVERED"
              ].includes(status)
                ? <CheckCircle size={20} />
                : <Circle size={20} />
              }

            </div>

            <div>

              <strong>
                Food Picked Up
              </strong>

              <span>
                Food collected from donor
              </span>

            </div>

          </div>


          {/* STEP 4 */}

          <div
            className={`progress-item ${
              status === "DELIVERED"
                ? "completed"
                : ""
            }`}
          >

            <div className="progress-icon">

              {status === "DELIVERED"
                ? <CheckCircle size={20} />
                : <Circle size={20} />
              }

            </div>

            <div>

              <strong>
                Delivered
              </strong>

              <span>
                Food delivered to NGO
              </span>

            </div>

          </div>

        </div>


        {/* TIP */}

        <div className="volunteer-tip">

          <strong>
            💡 Volunteer Tip
          </strong>

          <p>
            Keep the food container secure during
            transportation and deliver it as quickly
            as possible.
          </p>

        </div>

      </div>

    </div>
  );
}

export default VolunteerDashboard;