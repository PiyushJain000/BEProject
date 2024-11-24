"use client";
import React, { useState } from "react";
import { CreditCard, Smartphone, Globe, Wallet } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Textarea } from "../components/ui/textarea";
import { Switch } from "../components/ui/switch";
import "../Styles/paymentGateway.css";

export default function PaymentGateway() {
  const [paymentType, setPaymentType] = useState("credit");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handlePayment = (event) => {
    event.preventDefault();
    alert("Payment submitted successfully!");
  };

  const paymentMethods = [
    { value: "credit", label: "Credit Card", icon: CreditCard },
    { value: "debit", label: "Debit Card", icon: CreditCard },
    { value: "netbanking", label: "Net Banking", icon: Globe },
    { value: "upi", label: "UPI", icon: Smartphone },
  ];

  return (
    <div className="payment-container">
      <h2 className="payment-title">Complete Your Payment</h2>
      <form onSubmit={handlePayment} className="payment-form">
        <div className="payment-method-section">
          <h3 className="payment-method-title">Select Payment Method</h3>
          <RadioGroup
            value={paymentType}
            onValueChange={setPaymentType}
            className="payment-method-group"
          >
            {paymentMethods.map((method) => (
              <div key={method.value} className="payment-method-item">
                <RadioGroupItem
                  value={method.value}
                  id={method.value}
                  className="peer sr-only"
                />
                <Label
                  htmlFor={method.value}
                  className="payment-method-label"
                >
                  <method.icon className="payment-method-icon" />
                  {method.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="payment-details-section"
        >
          {(paymentType === "credit" || paymentType === "debit") && (
            <>
              <div className="input-grid">
                <div className="input-full">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="1234 5678 9123 4567"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="expiryDate">Expiry Date</Label>
                  <Input
                    id="expiryDate"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    placeholder="123"
                    required
                  />
                </div>
                <div className="input-full">
                  <Label htmlFor="cardholderName">Cardholder Name</Label>
                  <Input
                    id="cardholderName"
                    value={cardholderName}
                    onChange={(e) => setCardholderName(e.target.value)}
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>
            </>
          )}

          <div className="input-grid">
            <div className="input-full">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="youremail@example.com"
                required
              />
            </div>
            <div className="input-full">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="9876543210"
                required
              />
            </div>
            <div className="input-full">
              <Label htmlFor="billingAddress">Billing Address</Label>
              <Textarea
                id="billingAddress"
                value={billingAddress}
                onChange={(e) => setBillingAddress(e.target.value)}
                placeholder="123 Main St, City, State, Zip"
                required
              />
            </div>
          </div>
        </motion.div>

        <div className="payment-summary">
          <div className="payment-summary-details">
            <span className="total-amount-label">Total Amount:</span>
            <span className="total-amount">₹XXXX</span>
          </div>
          <div className="terms-and-submit">
            <Label
              htmlFor="terms"
              className="terms-checkbox"
            >
              <Switch
                id="terms"
                checked={termsAccepted}
                onCheckedChange={setTermsAccepted}
              />
              <span>I agree to the Terms and Conditions</span>
            </Label>
            <Button
              type="submit"
              disabled={!termsAccepted}
              className="pay-button"
            >
              <Wallet className="pay-icon" />
              Pay Now
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
