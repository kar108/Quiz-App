import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AppContext } from "../App";


const AuthLayout = () => {
  const[appData]=useContext(AppContext);
  console.log(appData==={ answers: {} });
  const  areQuestionsNotAnswered=false;
  return areQuestionsNotAnswered ? (
    <Navigate to="/" replace />
  ) : (
    <Outlet />
  );
};

export default AuthLayout;