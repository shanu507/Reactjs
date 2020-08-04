import React from "react";
import { Route, Redirect } from 'react-router-dom';
import  auth from './Auth';

 const PrivateRoute = ({component :Component, ...rest }) =>{
   
  return (
    <Route 
      {...rest}
      render={props =>{
        if(auth.isAuthenticated()) {
          return <Component {...props} />;
        }
        else {
          return( 
          <Redirect to={{
            pathname: '/sign-in', state: {from: props.location}
          }} />
          );
        }
        
      }}
    />
  );
};

export default PrivateRoute;


// function PrivateRoute ({component: Component, ...rest}) {
//     return (
//       <Route
//         {...rest}
//         render={(props) => authed === true
//           ? <Component {...props} />
//           : <Redirect to={{pathname: '/sign-in', state: {from: props.location}}} />}
//       />
//     )
//   }

//   export default PrivateRoute;