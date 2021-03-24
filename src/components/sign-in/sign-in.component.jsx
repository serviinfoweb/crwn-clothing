import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

//We use class because we have to store the data user typing in
class SignIn extends React.Component{
    constructor(){
        super();
        
        this.state ={
            email:'',
            password:''
        }
    }
    handleSubmit = event =>{
        //Cancel the event
        event.preventDefault();
        this.setState({email:'',password:''});
    }
    //function to put value the states dynamically
    handleChange = event=>{
        const {value,name}= event.target;

        this.setState({[name]:value});

    }
    

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account </h2>
                <span>Sign in with your email  and password</span>

                <form  onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="email" 
                    name='email' 
                    handleChange={this.handleChange} 
                    label='Email'
                    value={this.state.email} required/>
                    
                    <FormInput 
                    type="password" 
                    name='password' 
                    handleChange={this.handleChange} 
                    label='Password'
                    value={this.state.password} required/>
                    <div className='buttons'>
                    <CustomButton type="submit" >Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle } isGoogleSignIn> SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                    
                </form>
                
            </div>
        )
    }
}

export default SignIn;