import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const styles = {
    header: {
      backgroundColor: "#2563eb",
      color: "white",
      padding: "1rem",
    },
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    logo: {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    navLinks: {
      display: "flex",
      listStyleType: "none",
      gap: "1rem",
    },
    navItem: {
      display: "flex",
      alignItems: "center",
    },
    link: {
      color: "white",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      padding: "0.5rem",
      borderRadius: "4px",
      transition: "background-color 0.3s ease",
    },
    linkHover: {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    icon: {
      marginRight: "0.5rem",
      width: "1rem",
      height: "1rem",
    },
    mobileNavbar: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
    mobileNavLinks: {
      marginTop: "1rem",
      flexDirection: "column",
      width: "100%",
    },
    mobileLink: {
      width: "100%",
      padding: "0.75rem",
    },
  };

  return (
    <header style={styles.header}>
      <nav style={styles.navbar}>
        <div style={styles.logo}>VahanCheck</div>
        <ul style={styles.navLinks}>
          <li style={styles.navItem}>
            <Link to="/" style={styles.link}>
              <svg
                style={styles.icon}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              Home
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/login" style={styles.link}>
              <svg
                style={styles.icon}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Login
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/dashboard" style={styles.link}>
              Dashboard
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/vehicle-search" style={styles.link}>
              <svg
                style={styles.icon}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              Vehicle Search
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/payment" style={styles.link}>
              <svg
                style={styles.icon}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                <line x1="2" x2="22" y1="10" y2="10"></line>
              </svg>
              Payment
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
