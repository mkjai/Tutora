import { Navigate } from "react-router-dom";
import '../components/Authenication/signupForm.css'
import {profileCreated} from '../pages/ProfileCreation'

const ProfileRouter = ({ children }) => {
    const check = profileCreated;

  if (check) {
    return children;
  }
  
  return <Navigate to = "/profile-create"/>;
};

export default ProfileRouter;