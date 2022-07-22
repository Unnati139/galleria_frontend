import React from 'react'

const ProtectedRoute = () => {
  return (
    <div></div>
  )
}

export default ProtectedRoute

// import React, { Fragment } from "react";
// import { useSelector } from "react-redux";
// import { Navigate, Redirect, Route } from "react-router-dom";

// const ProtectedRoute = ({ isAdmin, element: Element, ...rest }) => {
//   const { loading, isAuthenticated, user } = useSelector((state) => state.user);

//   return (
//     <Fragment>
//       {loading  && (
//         <Route
//           {...rest}
//           render={(props) => {

//             if (!isAuthenticated ) {
//               return <Navigate to="/login" />;
//             }

//             // if (isAdmin === true && user.role !== "admin") {
//             //   return <Redirect to="/login" />;
//             // }

//             return <Element {...props} />;
//           }}
//         />
//       )}
//     </Fragment>
//   );
// };

// export default ProtectedRoute;
