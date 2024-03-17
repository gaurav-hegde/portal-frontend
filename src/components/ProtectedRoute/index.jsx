import { auth } from "../../firebase";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "@firebase/auth";
import { UserContext } from "../../context/UserContext";
import axios from "../../api/axios";

const ProtectedRoute = ({ children }) => {
  let navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser && currentUser.accessToken) {
        const response = await axios.authorizedGet("/user/auth");
        setUser(response.data);
      } else {
        navigate("/");
      }
    });
  }, [navigate, setUser]);
  return children;
};

export default ProtectedRoute;
