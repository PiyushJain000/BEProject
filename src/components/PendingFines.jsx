import React from "react";

const PendingFines = () => {
  return (
    <div className="pending-fines">
      <h3>Pending Fines</h3>
      <div className="fine">
        <p><strong>Amount:</strong> ₹500</p>
        <p><strong>Reason:</strong> Expired Registration</p>
        <p><strong>Due Date:</strong> 2023-07-01</p>
        <button>Pay Now</button>
      </div>
    </div>
  );
};

export default PendingFines;
