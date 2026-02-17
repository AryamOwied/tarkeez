import tarkeez from "../assets/images/tarkeez.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Login({setIsLoggedIn}) {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const[error,setErorr]=useState("")
    const navigate = useNavigate();
const handleSubmit = (e) => {
  e.preventDefault();

  if (!email.trim() || !password.trim()) {
    setErorr("كملي البيانات");
    return;
  }

  setIsLoggedIn(true);

  localStorage.setItem(
    "currentUser",
    JSON.stringify({ email })
  );

  navigate("/dashboard");
};



    return (
      <div className="login-page">
  <div className="login-layout">

   
    <div className="login-side-text">
       <img src={tarkeez} alt="logo" className="brand-title" />
      
     
    </div>

    
    <form className="login-card" onSubmit={handleSubmit}>

      <h2 className="login-title">تسجيل الدخول</h2>
     

      {error && <p className="login-error">{error}</p>}

      <div className="login-field">
        <label className="login-label">البريد الإلكتروني</label>
        <input
          className="login-input"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="login-field">
        <label className="login-label">كلمة المرور</label>
        <input
          className="login-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit"className="login-btn">دخول</button>
    </form>

  </div>
</div>

    );
}
export default Login;
