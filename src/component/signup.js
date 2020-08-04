import React, { Component } from "react";
import InputField from "./InputFeild";
import SubmitButton from "./SubmitButton";
import { Link } from "react-router-dom";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state= {
        firstname:'',
        lastname:'',
        email:'',
        password:''
    };
    this.SignupSubmit = this.SignupSubmit.bind(this);
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


    SignupSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { firstname, lastname, email, password } = this.state;
        if(this.state.firstname && this.state.lastname && this.state.email && this.state.password !== 'null' )
        this.props.history.push('/sign-in');
    }
    Register() {
        if(this.state.firstname && this.state.lastname && this.state.email && this.state.password !== 'null' )
        return  <Link className="nav-link" to={"/sign-in"}/>;
    }
    render() {
        const { firstname, lastname, email, password, submitted } = this.state;
        return (
            <form name="form" onSubmit={this.SignupSubmit}>
                <h3>Sign Up</h3>

                <div  className={'form-group' + (submitted && !this.state.firstname ? ' has-error' : '')}>
                <label>First name</label>
                  <InputField 
                    type="text" 
                    className="form-control" 
                    placeholder="First name"
                    value={this.state.firstname ? this.state.firstname : ''}
                    onChange={ (val) => this.setInputValue('firstname',val)}
                    />
                    {submitted && !firstname &&
                            <div className="help-block">firstname is required</div>
                        }
                </div>

                <div  className={'form-group' + (submitted && !this.state.lastname ? ' has-error' : '')}>
                <label>Last name</label>
                  <InputField 
                        type="text" 
                        className="form-control" 
                        placeholder="Last name"
                        value={this.state.lastname ? this.state.lastname : ''}
                        onChange={ (val) => this.setInputValue('lastname',val)}
                    />
                    {submitted && !lastname &&
                            <div className="help-block">lastname is required</div>
                        }
                </div>

                <div  className={'form-group' + (submitted && !this.state.email ? ' has-error' : '')}>
                    <label>Email address</label>
                    <InputField 
                        type="email" 
                        className="form-control" 
                        placeholder="enter email address"
                        value={this.state.email ? this.state.email : ''}
                        onChange={ (val) => this.setInputValue('email',val)}
                    />
                     {submitted && !email &&
                            <div className="help-block">email is required</div>
                        }
                    </div>
                    <div  className={'form-group' + (submitted && !this.state.password ? ' has-error' : '')}>
                    <label>Password</label>
                    <InputField 
                        type="password" 
                        className="form-control" 
                        placeholder="password"
                        value={this.state.password ? this.state.password : ''}
                        onChange={ (val) => this.setInputValue('password',val)}
                    />
                     {submitted && !password &&
                            <div className="help-block">password is required</div>
                        }
                 </div>
                <SubmitButton 
                  text="Sign up" 
                  className="btn btn-primary btn-block"
                  onClick={ () => this.Register()}
                />
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>
        );
    }
}