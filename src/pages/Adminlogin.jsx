import React, { useEffect, useState } from 'react'
import './adminlogin.scss'
import { useNavigate } from 'react-router-dom';

const Adminlogin = () => {
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const token = "BookingAdminLogin";

  useEffect(() => {
    document.title = "Password | Booking.com";
  }, []);
  return (
    <>
      <div className="adminp">
        <div className="adminb">
          <input
            value={pass}
            type="password"
            placeholder="Password"
            onChange={(e) => setPass(e.target.value)}
          />
          {pass === "bookingcom" ? (
            <h3 id="correct">Booking админ пароль</h3>
          ) : (
            <h3 id="incorrect">Пароль не правильный</h3>
          )}
          {pass === "bookingcom" ? (
            <button
              onClick={() => {
                navigate("/admin");
                localStorage.setItem("token", token);
              }}
              disabled={!pass}
            >
              Submit
            </button>
          ) : (
            <button onClick={() => navigate("/admin")} disabled={!pass}>
              Submit
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default Adminlogin