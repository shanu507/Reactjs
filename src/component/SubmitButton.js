import React, { Component } from "react";

class SubmitButton extends Component {
    
    render() {
        return(
            <div className="submitButton">

                <button
                type="button"
                className= 'btn' 
                onClick={ () => this.props.onClick() } >
                 {this.props.text}
                </button>
            </div>
        ); 
    }
}


export default SubmitButton;