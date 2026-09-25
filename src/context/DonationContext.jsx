import { createContext, useContext, useState } from "react";

import { donations as initialDonations } from "../data/mockData";

const DonationContext = createContext();

export function DonationProvider({ children }) {

  const [donations, setDonations] = useState(
    initialDonations
  );

  const addDonation = (newDonation) => {

    const donation = {
      id: Date.now(),

      foodName: newDonation.foodName,

      quantity: Number(newDonation.quantity),

      unit: "meals",

      foodType: newDonation.foodType,

      donor: newDonation.donorName,

      distance: 2.5,

      expiryMinutes: Number(newDonation.expiryMinutes),

      status:
        Number(newDonation.expiryMinutes) <= 60
          ? "CRITICAL"
          : Number(newDonation.expiryMinutes) <= 120
          ? "URGENT"
          : "SAFE",

      pickupLocation: newDonation.pickupLocation
    };

    setDonations((currentDonations) => [
      donation,
      ...currentDonations
    ]);
  };


  const removeDonation = (id) => {

    setDonations((currentDonations) =>
      currentDonations.filter(
        (donation) => donation.id !== id
      )
    );

  };


  return (
    <DonationContext.Provider
      value={{
        donations,
        addDonation,
        removeDonation
      }}
    >
      {children}
    </DonationContext.Provider>
  );
}


export function useDonations() {

  return useContext(DonationContext);

}