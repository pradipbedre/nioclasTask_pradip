import React from "react";
import Question from "./Question";
const DisplayQuestions = () => {
  return (
    <div className="display_questions">
      <div className="display_questions__question">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa minima
          exercitationem nam dolorem labore nulla quis amet molestiae a illo
          veniam consequuntur reprehenderit architecto doloribus, dolor
          perferendis. Saepe, perferendis iste!
        </p>
      </div>
      <div className="display_questions__buttons">
        <button className="display_questions__buttons__previous">
          Previous
        </button>
        <button className="display_questions__buttons__next">Next</button>
      </div>
    </div>
  );
};

export default DisplayQuestions;
