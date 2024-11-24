import React from "react";

const VehicleSummaryCard = ({ name, model, regDate, expDate, status }) => {
  return (
    <div className="vehicle-card">
      <h4>{name} - {model}</h4>
      <p><strong>Registration Date:</strong> {regDate}</p>
      <p><strong>Expiry Date:</strong> {expDate}</p>
      <p><strong>Status:</strong> {status}</p>
    </div>
  );
};

export default VehicleSummaryCard;

