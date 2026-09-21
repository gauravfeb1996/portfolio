import './Phones.css';

export function Phones() {
  return (
    <div className="phones">
      <div className="phone">
        <b>◆ Spinny</b>
        <h4>Welcome back!</h4>
        <small>Enter your phone number to get started</small>
        <input value="+91 98765 43210" readOnly />
        <button>Send OTP</button>
      </div>
      <div className="phone second">
        <h4>Enter OTP</h4>
        <small>We’ve sent a 6-digit code</small>
        <div className="otp">1 2 3 4 5 6</div>
        <small>Resend OTP in 00:34</small>
      </div>
    </div>
  );
}
