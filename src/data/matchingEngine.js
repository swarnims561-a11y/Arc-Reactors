export function calculateMatchScore(food, ngoRequirements) {

  let score = 0;


  // -----------------------------
  // FOOD TYPE — 30 POINTS
  // -----------------------------

  if (
    ngoRequirements.foodType === "Any" ||
    food.foodType === ngoRequirements.foodType
  ) {
    score += 30;
  }


  // -----------------------------
  // DISTANCE — 25 POINTS
  // -----------------------------

  if (food.distance <= 2) {
    score += 25;
  }
  else if (food.distance <= 5) {
    score += 20;
  }
  else if (food.distance <= 10) {
    score += 12;
  }
  else {
    score += 5;
  }


  // -----------------------------
  // EXPIRY — 25 POINTS
  // -----------------------------

  if (food.expiryMinutes >= 120) {
    score += 25;
  }
  else if (food.expiryMinutes >= 60) {
    score += 20;
  }
  else if (food.expiryMinutes >= 30) {
    score += 12;
  }
  else {
    score += 5;
  }


  // -----------------------------
  // QUANTITY — 20 POINTS
  // -----------------------------

  if (
    food.quantity >=
    ngoRequirements.requiredMeals
  ) {
    score += 20;
  }
  else if (
    food.quantity >=
    ngoRequirements.requiredMeals * 0.5
  ) {
    score += 12;
  }
  else {
    score += 6;
  }


  return Math.min(score, 100);
}


export function getMatchLabel(score) {

  if (score >= 85) {
    return "Excellent Match";
  }

  if (score >= 70) {
    return "Good Match";
  }

  if (score >= 50) {
    return "Possible Match";
  }

  return "Low Match";
}


export function getMatchReasons(food, ngoRequirements) {

  const reasons = [];


  // FOOD TYPE

  if (
    ngoRequirements.foodType === "Any" ||
    food.foodType === ngoRequirements.foodType
  ) {
    reasons.push("Food type matches");
  }


  // DISTANCE

  if (food.distance <= 5) {
    reasons.push("Nearby pickup");
  }


  // EXPIRY

  if (food.expiryMinutes >= 60) {
    reasons.push("Enough time for pickup");
  }
  else if (food.expiryMinutes >= 30) {
    reasons.push("Pickup should be arranged soon");
  }
  else {
    reasons.push("Urgent pickup required");
  }


  // QUANTITY

  if (
    food.quantity >=
    ngoRequirements.requiredMeals
  ) {
    reasons.push("Quantity matches requirement");
  }
  else {
    reasons.push("Partial quantity available");
  }


  return reasons;
}