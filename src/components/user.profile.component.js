import React from "react";

import { connect } from "react-redux";
import { fetchUserData } from "../actions/user.profile.actions";
import ProfilePanel from "../panels/user.profile.panel";

const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
};

const mapStateToProps = (state) => {
    return {
      userDetails : state.userReducer.userDetails,
      listUserSuccess : state.userReducer.listUserSuccess,
      message : state.userReducer.message,
      required

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserData : (email,phone,linkedin,twitter) => {
            dispatch(fetchUserData(email,phone,linkedin,twitter))
        }
    } 
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfilePanel);