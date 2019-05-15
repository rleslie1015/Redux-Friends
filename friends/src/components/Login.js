import React from "react";
import { connect } from "react-redux";
import { logIn } from "../actions";
class Login extends React.Component {
    handleLogIn = () => {
        this.props.logIn();
    }
    render(){
        console.log(logIn, this.props)
        return (<div>
            <form>
                <input 
                placeholder="username"/>
                <input 
                placeholder="password"/>
            </form>
            <button onClick={this.handleLogIn}>Log In</button>
            </div>)
    }
}

const mapStateToProps = state => {
console.log(state);
return {
    ...state,
    loggingIn: state.loggingIn
}
}
export default connect(mapStateToProps, { logIn })(Login);