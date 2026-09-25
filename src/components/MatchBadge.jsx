import {
  Sparkles,
  Check
} from "lucide-react";

import {
  calculateMatchScore,
  getMatchLabel,
  getMatchReasons
} from "../data/matchingEngine";


function MatchBadge({
  food,
  ngoRequirements
}) {

  const score = calculateMatchScore(
    food,
    ngoRequirements
  );

  const label = getMatchLabel(score);

  const reasons = getMatchReasons(
    food,
    ngoRequirements
  );


  return (
    <div className="ai-match-box">

      <div className="ai-match-header">

        <div className="ai-match-title">

          <Sparkles size={17} />

          <span>
            AI MATCH
          </span>

        </div>


        <strong>
          {score}%
        </strong>

      </div>


      <div className="ai-match-label">
        {label}
      </div>


      <div className="ai-match-reasons">

        {reasons.slice(0, 3).map(
          (reason, index) => (

            <div
              key={index}
              className="ai-match-reason"
            >

              <Check size={13} />

              <span>
                {reason}
              </span>

            </div>

          )
        )}

      </div>

    </div>
  );
}

export default MatchBadge;