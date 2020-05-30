import React, {useEffect} from "react";
import {connect} from "react-redux";
import setAuthorizationHeader from "./utils/setAuthorizationHeader";
import { currentUser } from "./redux/actions";

  const App = ({children, currentUser}:any) => {
    useEffect(() => {
      if (!!localStorage.getItem("token")) {
        // Set Authorization Header Globally on page reload
        setAuthorizationHeader(localStorage.getItem("token"));
        // Fetch Current user on page reload
        currentUser();
      }
    }, []);
    
    return (
      <>
        {children}
      </>
    );
  };


  const mapDispatchToProps = {
    currentUser
  };
  
  export default connect(null, mapDispatchToProps)(App);
