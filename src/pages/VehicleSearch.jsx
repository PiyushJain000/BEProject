import React, { useState } from "react";
import vehicleData from "../components/Vehicle.json";
import { Search, Info, FileText, Calendar, Settings, AlertTriangle } from "lucide-react";
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet"></link>
import "../Styles/VehicleSearch.css";

const VehicleSearch = () => {
  const [searchPlate, setSearchPlate] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    const selectedVehicle = vehicleData.find(
      (vehicle) => vehicle.numberPlate === searchPlate
    );
    setSearchResults(selectedVehicle ? [selectedVehicle] : []);
  };

  return (
    <div className="vehicle-search-container">
      <h1 className="page-title">Vehicle Information Search</h1>
      <form onSubmit={handleSearch} className="search-form">
        <div className="select-wrapper">
          <Search className="search-icon" />
          <select
            value={searchPlate}
            onChange={(e) => setSearchPlate(e.target.value)}
            className="search-select"
          >
            <option value="">Select Number Plate</option>
            {vehicleData.map((vehicle, index) => (
              <option key={index} value={vehicle.numberPlate}>
                {vehicle.numberPlate}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="search-button">Search</button>
      </form>

      {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((vehicle) => (
            <div key={vehicle.numberPlate} className="vehicle-info">
              <h2 className="vehicle-title">Vehicle Details: {vehicle.numberPlate}</h2>
              
              <div className="info-grid">
                <div className="info-card">
                  <h3><Info className="card-icon" /> Insurance Details</h3>
                  <p><strong>Policy Number:</strong> {vehicle.insuranceDetails.policyNumber}</p>
                  <p><strong>Expiry Date:</strong> {vehicle.insuranceDetails.expiryDate}</p>
                  <p><strong>Coverage:</strong> {vehicle.insuranceDetails.coverage}</p>
                </div>

                <div className="info-card">
                  <h3><FileText className="card-icon" /> RC Details</h3>
                  <p><strong>Owner Name:</strong> {vehicle.rcDetails.ownerName}</p>
                  <p><strong>Ownership:</strong> {vehicle.rcDetails.ownership}</p>
                  <p><strong>Registration Date:</strong> {vehicle.rcDetails.registrationDate}</p>
                  <p><strong>Financer Name:</strong> {vehicle.rcDetails.financerName}</p>
                  <p><strong>Registered RTO:</strong> {vehicle.rcDetails.registeredRTO}</p>
                </div>

                <div className="info-card">
                  <h3><Settings className="card-icon" /> Vehicle Details</h3>
                  <p><strong>Market Model:</strong> {vehicle.vehicleDetails.marketModel}</p>
                  <p><strong>Vehicle Class:</strong> {vehicle.vehicleDetails.vehicleClass}</p>
                  <p><strong>Fuel Norms:</strong> {vehicle.vehicleDetails.fuelNorms}</p>
                  <p><strong>Engine No:</strong> {vehicle.vehicleDetails.engineNo}</p>
                  <p><strong>Chassis No:</strong> {vehicle.vehicleDetails.chassisNo}</p>
                </div>

                <div className="info-card">
                  <h3><Calendar className="card-icon" /> Important Dates</h3>
                  <p><strong>Insurance Expiry:</strong> {vehicle.importantDates.insuranceExpiry}</p>
                  <p><strong>Vehicle Age:</strong> {vehicle.importantDates.vehicleAge}</p>
                  <p><strong>Fitness Up To:</strong> {vehicle.importantDates.fitnessUpto}</p>
                  <p><strong>Registration Date:</strong> {vehicle.importantDates.registrationDate}</p>
                </div>

                <div className="info-card">
                  <h3><AlertTriangle className="card-icon" /> Other Information</h3>
                  <p><strong>Registration No:</strong> {vehicle.otherInformation.registrationNo}</p>
                  <p><strong>Color:</strong> {vehicle.otherInformation.color}</p>
                  <p><strong>RC Status:</strong> {vehicle.otherInformation.rcStatus}</p>
                </div>

                <div className="info-card">
                  <h3><Settings className="card-icon" /> Specifications</h3>
                  <p><strong>Fuel Type:</strong> {vehicle.specifications.fuelType}</p>
                  <p><strong>Mileage:</strong> {vehicle.specifications.mileage}</p>
                  <p><strong>Seating Capacity:</strong> {vehicle.specifications.seatingCapacity}</p>
                  <p><strong>Transmission:</strong> {vehicle.specifications.transmission}</p>
                  <p><strong>Top Speed:</strong> {vehicle.specifications.topSpeed}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VehicleSearch;