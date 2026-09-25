import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Landing from "./pages/Landing";
import NGODashboard from "./pages/NGODashboard";
import FoodDetails from "./pages/FoodDetails";
import DonorDashboard from "./pages/DonorDashboard";
import VolunteerDashboard from "./pages/VolunteerDashboard";
import Impact from "./pages/Impact";

import { DonationProvider } from "./context/DonationContext";


function App() {

  return (
    <BrowserRouter>

      <DonationProvider>

        <Navbar />

        <Routes>

          <Route
            path="/"
            element={<Landing />}
          />

          <Route
            path="/ngo"
            element={<NGODashboard />}
          />

          <Route
            path="/food/:id"
            element={<FoodDetails />}
          />

          <Route
            path="/donor"
            element={<DonorDashboard />}
          />

          <Route
            path="/volunteer"
            element={<VolunteerDashboard />}
          />

          <Route
            path="/impact"
            element={<Impact />}
          />

        </Routes>

      </DonationProvider>

    </BrowserRouter>
  );
}

export default App;