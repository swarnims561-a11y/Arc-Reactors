import {
  Utensils,
  Package,
  Truck,
  Leaf,
  Users,
  TrendingUp
} from "lucide-react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

import { impactData } from "../data/mockData";


function Impact() {

  const weeklyData = [
    {
      day: "Mon",
      meals: 120,
      donations: 8
    },
    {
      day: "Tue",
      meals: 180,
      donations: 12
    },
    {
      day: "Wed",
      meals: 150,
      donations: 10
    },
    {
      day: "Thu",
      meals: 230,
      donations: 16
    },
    {
      day: "Fri",
      meals: 200,
      donations: 14
    },
    {
      day: "Sat",
      meals: 190,
      donations: 13
    },
    {
      day: "Sun",
      meals: 170,
      donations: 11
    }
  ];


  return (
    <div className="impact-page">

      {/* HEADER */}

      <div className="impact-header">

        <div>

          <p className="dashboard-label">
            OUR IMPACT
          </p>

          <h1>
            Turning Surplus Into Impact
          </h1>

          <p>
            Every rescued meal helps reduce food
            waste and supports communities in need.
          </p>

        </div>


        <div className="impact-live">

          <span className="impact-live-dot">
            ●
          </span>

          LIVE IMPACT

        </div>

      </div>


      {/* MAIN STATS */}

      <div className="impact-stats">

        <div className="impact-stat-card">

          <div className="impact-stat-icon">
            <Utensils size={28} />
          </div>

          <div>

            <span>
              Meals Rescued
            </span>

            <h2>
              {impactData.meals.toLocaleString()}
            </h2>

            <p>
              🍽️ Meals delivered to communities
            </p>

          </div>

        </div>


        <div className="impact-stat-card">

          <div className="impact-stat-icon">
            <Package size={28} />
          </div>

          <div>

            <span>
              Food Saved
            </span>

            <h2>
              {impactData.foodSaved} kg
            </h2>

            <p>
              📦 Food diverted from waste
            </p>

          </div>

        </div>


        <div className="impact-stat-card">

          <div className="impact-stat-icon">
            <Truck size={28} />
          </div>

          <div>

            <span>
              Deliveries
            </span>

            <h2>
              {impactData.deliveries}
            </h2>

            <p>
              🚚 Successful food rescues
            </p>

          </div>

        </div>


        <div className="impact-stat-card">

          <div className="impact-stat-icon">
            <Leaf size={28} />
          </div>

          <div>

            <span>
              CO₂ Saved
            </span>

            <h2>
              {impactData.co2} kg
            </h2>

            <p>
              🌱 Estimated emissions avoided
            </p>

          </div>

        </div>

      </div>


      {/* IMPACT HIGHLIGHT */}

      <div className="impact-highlight">

        <div className="impact-highlight-icon">
          <Users size={32} />
        </div>

        <div>

          <h2>
            Food Rescue in Action
          </h2>

          <p>
            Surplus food from restaurants, events and
            institutions is connected with NGOs and
            volunteers before it goes to waste.
          </p>

        </div>

        <div className="impact-highlight-number">

          <strong>
            1,240+
          </strong>

          <span>
            meals served
          </span>

        </div>

      </div>


      {/* CHARTS */}

      <div className="impact-charts">


        {/* MEALS CHART */}

        <div className="impact-chart-card">

          <div className="chart-header">

            <div>

              <h2>
                Meals Rescued
              </h2>

              <p>
                Food rescued throughout the week
              </p>

            </div>

            <TrendingUp size={24} />

          </div>


          <div className="chart-container">

            <ResponsiveContainer
              width="100%"
              height={320}
            >

              <BarChart data={weeklyData}>

                <CartesianGrid
                  strokeDasharray="3 3"
                />

                <XAxis
                  dataKey="day"
                />

                <YAxis />

                <Tooltip />

                <Legend />

                <Bar
                  dataKey="meals"
                  name="Meals Rescued"
                  radius={[6, 6, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>


        {/* DONATION CHART */}

        <div className="impact-chart-card">

          <div className="chart-header">

            <div>

              <h2>
                Donation Activity
              </h2>

              <p>
                Number of surplus donations per day
              </p>

            </div>

            <Package size={24} />

          </div>


          <div className="chart-container">

            <ResponsiveContainer
              width="100%"
              height={320}
            >

              <LineChart data={weeklyData}>

                <CartesianGrid
                  strokeDasharray="3 3"
                />

                <XAxis
                  dataKey="day"
                />

                <YAxis />

                <Tooltip />

                <Legend />

                <Line
                  type="monotone"
                  dataKey="donations"
                  name="Donations"
                  strokeWidth={3}
                  dot={{ r: 5 }}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>


      {/* BOTTOM MESSAGE */}

      <div className="impact-footer">

        <Leaf size={30} />

        <div>

          <h2>
            Small actions. Big impact.
          </h2>

          <p>
            Together, donors, NGOs and volunteers are
            building a system where good food reaches
            people instead of landfills.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Impact;