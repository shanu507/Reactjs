import React, { Component } from "react";
import InputField from "./InputFeild";
import SubmitButton from "./SubmitButton";
import auth from "../action/Auth";
// import { BrowserRouter as Redirect } from "react-router-dom";

export default class Login extends Component {
    constructor(props) {
        super(props);

        // reset login status
   
    this.state = {
        email: '',
        password: '',
        submitted:false
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
 
    }
    setInputValue(property,val) {
        
        val=val.trim();
        if(val.length > 20) {
            return;
        }
        this.setState({
            [property]: val
        })
    }
   
 

    handleSubmit(e) {
 
        e.preventDefault();
        debugger
        this.setState({ submitted: true });
        const { email, password } = this.state;
        if (email && password !==null) {
            this.props.login(email, password);
        }
    }
    login() {
        console.warn(this.state)
        fetch("http://localhost:3000/sign-in" + this.state.email).then((resp) => {
                console.log("resp",resp)
                if (resp.length > 0) {
                    localStorage.setItem('login',JSON.stringify(resp))
                    console.warn(this.props.history.push('list'))
                }
                else {
                    alert("please check username and password")
                }
            })
        }
    

    render() {
        const { email, password, submitted } = this.state;
        return (
            <form name="form" onSubmit={this.handleSubmit}>
                <h3>Sign In</h3>

                <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                    
                    <label>Email address</label>
                    <InputField 
                            type='email'
                            placeholder='email address'
                            className="form-control"
                            value={this.state.email ? this.state.email : ''}
                            onChange={ (val) => this.setInputValue('email',val)}
                    />
                    {submitted && !email &&
                            <div className="help-block">email is required</div>
                        }
                   </div> 
                   
                   <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                    <label>Password</label>
                    <InputField 
                           type='password'
                           placeholder='Password'
                           className="form-control"
                           value={this.state.password ? this.state.password : ''}
                           onChange={ (val) => this.setInputValue('password',val)}
                    />
                     {submitted && !password &&
                            <div className="help-block">Password is required</div>
                     }
                    </div>
                    
                <SubmitButton 
                  type="button"
                  text="login" 
                  
                  onClick={ () => {
                   this.login()
                } }/>
            
                
            </form>
        );
    }
}
