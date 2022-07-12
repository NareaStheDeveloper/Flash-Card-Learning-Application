import React from "react";

// Component to be used in both the Add Card and Edit Card Screens

function CardForm({ cardFront, handleCardFrontChange, cardBack, handleCardBackChange }) {
  return (
    <div>
      <div className="form-group">
      <div className="edit-text"> <label htmlFor="cardFront">Front</label></div>
        <textarea
          id="cardFront"
          name="cardFront"
          className="form-control"
          placeholder="Front side of card"
          rows="3"
          onChange={handleCardFrontChange}
          value={cardFront}
        />
      </div>
      <div className="form-group">
      <div className="edit-text"> <label htmlFor="cardBack">Back</label> </div>
        <textarea
          id="cardBack"
          name="cardBack"
          className="form-control"
          placeholder="Back side of card"
          rows="3"
          onChange={handleCardBackChange}
          value={cardBack}
        />
      </div>
    </div>
  );
}

export default CardForm;