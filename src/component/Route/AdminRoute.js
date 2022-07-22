
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import LoadingToRedirect from "./LoadingToRedirect";

const AdminRoute = ({ children }) => {
  const {isAuthenticated} = useSelector((state) => (
    state.user
  ));
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if(isAuthenticated){
        setOk(true)
    }else{
        setOk(false)
    }
  }, [isAuthenticated]);
  return ok ? children : <LoadingToRedirect />;
};

export default AdminRoute;