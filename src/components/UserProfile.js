import React, { useState, useEffect } from "react";

function UserProfile({ onProfileSaved }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("userProfile"));
    if (savedProfile) {
      setName(savedProfile.name);
      setAddress(savedProfile.address);
      setPhone(savedProfile.phone);
    }
  }, []);

  const handleSave = () => {
    const profileData = { name, address, phone };
    localStorage.setItem("userProfile", JSON.stringify(profileData));
    alert("Profile Saved Successfully ✅");
    if (onProfileSaved) onProfileSaved();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create Your Profile</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <input
        type="text"
        placeholder="Full Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <br /><br />

      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br /><br />

      <button onClick={handleSave}>Save Profile</button>
    </div>
  );
}

export default UserProfile;