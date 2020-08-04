import React, { Component } from "react";
import SubmitButton from "./SubmitButton";
import auth from "../action/Auth";
class Home extends Component {


 render() {
     return(
         <SubmitButton 
         type="button"
         text="logout"
         onClick={() => {
             auth.logout(() => {
                 this.props.history.push('/sign-in')
             })
         }}
         />
     )
 }
}


export default Home;