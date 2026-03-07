import React from "react";

const Sidebar = () => {
  return (
    <div style={{
      position: "fixed",
      top: "100px",
      right: "0",
      width: "220px",
      backgroundColor: "#f8f8f8",
      padding: "20px",
      borderLeft: "1px solid #ccc"
    }}>
      <h3>Options</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>Profile</li>
        <li>Orders</li>
        <li>Cart</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;