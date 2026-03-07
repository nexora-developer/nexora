import { useState } from "react";

function Login({ setIsLoggedIn }) {

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [step, setStep] = useState(1);

  const sendOtp = () => {
    if (phone.length !== 10) {
      alert("Enter valid 10 digit phone number");
      return;
    }

    const randomOtp = Math.floor(1000 + Math.random() * 9000);
    setGeneratedOtp(randomOtp);
    console.log("OTP:", randomOtp); // testing ke liye console me dikhega

    alert("OTP Sent (Check Console for now)");
    setStep(2);
  };

  const verifyOtp = () => {
    if (parseInt(otp) === generatedOtp) {
      alert("Login Successful");
      setIsLoggedIn(true);
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div style={{
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "10px",
      maxWidth: "300px",
      margin: "40px auto",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
    }}>

      <h2>Login</h2>

      {step === 1 && (
        <>
          <input
            placeholder="Enter Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={inputStyle}
          />

          <button onClick={sendOtp} style={buttonStyle}>
            Send OTP
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <input
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            style={inputStyle}
          />

          <button onClick={verifyOtp} style={buttonStyle}>
            Verify OTP
          </button>
        </>
      )}

    </div>
  );
}

const inputStyle = {
  display: "block",
  marginBottom: "10px",
  padding: "8px",
  width: "100%",
  borderRadius: "6px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  padding: "10px",
  backgroundColor: "#ff9900",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  width: "100%"
};

export default Login;