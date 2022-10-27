import { useNavigate } from "react-router-dom"

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome">
      <h1>Welcome</h1>
      <button onClick={() => navigate('/signup')}>Signup</button>
    </div>
  )
}