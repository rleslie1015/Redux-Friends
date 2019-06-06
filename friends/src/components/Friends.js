import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions";
import { withRouter } from 'react-router-dom';

class Friends extends React.Component {
    componentDidMount() {
        this.props.getData();
    }
    render(){
        return(<div><h1>FRIENDS</h1></div>)
    }
}

const mapStateToProps = ({ friends }) => ({
    friends
});

export default withRouter(connect(
    mapStateToProps, {getData})(Friends)
);