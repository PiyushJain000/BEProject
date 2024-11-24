import React from "react";
import VehicleSummaryCard from "../components/VehicleSummaryCard";
import ExpiryAlerts from "../components/ExpiryAlerts";
import PendingFines from "../components/PendingFines";
import TestingAppointments from "../components/TestingAppointments";
import ComplianceRecords from "../components/ComplianceRecords";
import '../Styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="dashboard-section">
        <h3>Vehicle Summary</h3>
        <div className="vehicle-cards">
          <VehicleSummaryCard
            name="Toyota Corolla"
            model="2020"
            regDate="2020-01-15"
            expDate="2025-01-15"
            status="Active"
          />
          <VehicleSummaryCard
            name="Honda Accord"
            model="2018"
            regDate="2018-06-20"
            expDate="2023-06-20"
            status="Expiring Soon"
          />
        </div>
      </div>

      <ExpiryAlerts />
      <PendingFines />
      <TestingAppointments />
      <ComplianceRecords />
    </div>
  );
};

export default Dashboard;
