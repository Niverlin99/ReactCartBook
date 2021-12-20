import React from 'react';
import './login.css';
class Login extends React.Component{
    state={
        email:'',
        pwd:''
    }

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
        
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.isLogin(true)
        window.location.href="/home";
    }
    render(){
        return(
            <div className='div-login'>
                <div>
                    <form onSubmit = {this.handleSubmit}>
                        <input className=' my-2' type='email' name='email' placeholder='email...' required onChange={this.handleChange}/>
                        <input className='my-2' type='password' name='pwd' placeholder='password...' required onChange={this.handleChange}/>
                        <button className='btn btn-info mt-2 btnCenterCls' onSubmit={this.handleSubmit}>Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;