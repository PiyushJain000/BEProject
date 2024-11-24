import React from "react";

const ComplianceRecords = () => {
  return (
    <div className="compliance-records">
      <h3>Document Uploads & Compliance Records</h3>
      <div className="document">
        <p><strong>Document:</strong> Fitness Certificate</p>
        <p><strong>Status:</strong> Uploaded</p>
      </div>
      <div className="document">
        <p><strong>Document:</strong> Emission Test Report</p>
        <p><strong>Status:</strong> Pending</p>
      </div>
    </div>
  );
};

export default ComplianceRecords;
