/* eslint-disable no-unused-expressions */
import React, { Component } from "react";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Card, Nav } from 'react-bootstrap';
import UserProfileEmailPanel from './user.profile.email.panel';
import UserProfileDetailPanel from "./user.profile.detail.panel";
import UserProfileContactPanel from "./user.profile.contact.panel";

class ProfilePanel extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangelinkedInUrl = this.onChangelinkedInUrl.bind(this);
        this.onChangetwitter = this.onChangetwitter.bind(this);
        this.handleNavigation = this.handleNavigation.bind(this);

        this.state = {
            email: "",
            phone: "",
            linkedin: "",
            twitter: "",
            // loading: false,
            cardTitle: "",
            cardText: "",
            cardImage: "",
            cardImageDisabled: true,
            activeNav: "#profile",
            warningMessage: ""

        };
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value,
        });
    }

    onChangePhone(e) {
        this.setState({
            phone: e.target.value,
        });
    }

    onChangelinkedInUrl(e) {
        this.setState({
            linkedin: e.target.value,
        });
    }

    onChangetwitter(e) {
        this.setState({
            twitter: e.target.value,
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        /* this.setState({
             loading: true,
         });
         */

        this.form.validateAll();
        if (this.state.email === ""
            && this.state.phone === ""
            && this.state.linkedin === "" 
            && this.state.twitter ==="") {
            //alert("Mandatory")
            this.setState({
                warningMessage: "Please enter any of the filter"
            });

        } else
            if (this.checkBtn.context._errors.length === 0) {
                this.setState({
                    warningMessage: ""
                });

                this.props.fetchUserData(this.state.email, this.state.phone, this.state.linkedin, this.state.twitter)
            } /*else {
            this.setState({
                loading: false,
            });
        }*/
    }


    handleNavigation(selectedTab) {
        //alert(selectedTab);
        this.setState({
            activeNav: selectedTab,
        });

    }




    render() {

        const { activeNav } = this.state;
        const { userDetails, listUserSuccess } = this.props;


        let componentToRender;
        switch (activeNav) {
            case "#profile": componentToRender = <UserProfileDetailPanel userDetails={userDetails} />
                break;
            case "#email": componentToRender = <UserProfileEmailPanel userDetails={userDetails} />
                break;
            case "#contact": componentToRender = <UserProfileContactPanel userDetails={userDetails} />
                break;
            default: <div>default</div>
        }

        return (
            <div>
                <div className="col-30">
                    <div className="card card-container">
                        <Form
                            onSubmit={this.handleSubmit}
                            ref={(c) => {
                                this.form = c;
                            }}
                        >
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.onChangeEmail}
                                //validations={[this.props.required]}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">contactNumber</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="phone"
                                    value={this.state.phone}
                                    onChange={this.onChangePhone}
                                // validations={[this.props.required]}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="linkedin">LinkedIn</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="linkedin"
                                    value={this.state.linkedin}
                                    onChange={this.onChangelinkedInUrl}
                                // validations={[this.props.required]}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="twitter">twitter</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="socialUrl"
                                    value={this.state.twitter}
                                    onChange={this.onChangetwitter}
                                // validations={[this.props.required]}
                                />
                            </div>





                            <div className="form-group">
                                &nbsp;
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary btn-block"
                                // disabled={this.state.loading}
                                >
                                    {/* {this.state.loading && (
                                        <span className="spinner-border spinner-border-sm"></span>
                                    )} */}
                                    <span>Get Details</span>
                                </button>
                            </div>

                            {this.state.warningMessage === "" && this.props.message && !this.props.listUserSuccess && (
                                <div>
                                    <div className="form-group">
                                        &nbsp;
                                    </div>
                                    <div className="form-group">
                                        <div className="alert alert-danger" role="alert">
                                            {this.props.message}
                                        </div>
                                    </div>
                                </div>
                            )}
                            {this.state.warningMessage !== "" && !this.props.listUserSuccess && (<div>
                                <div className="form-group">
                                    &nbsp;
                                </div>
                                <div className="form-group">
                                    <div className="alert alert-danger" role="alert">
                                        {this.state.warningMessage}
                                    </div>
                                </div>
                            </div>)}
                            <CheckButton
                                style={{ display: "none" }}
                                ref={(c) => {
                                    this.checkBtn = c;
                                }}
                            />


                        </Form>
                    </div>
                </div>
                {listUserSuccess === true ?

                    <div className="col-70">
                        <Card>
                            <Card.Header>
                                <Nav variant="pills" defaultActiveKey="#profile"
                                    onSelect={this.handleNavigation}>
                                    <Nav.Item>
                                        <Nav.Link href="#profile">Profile</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#email">Emails</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#contact">
                                            Contact
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Card.Header>
                            <Card.Body>
                                {componentToRender}
                            </Card.Body>
                        </Card>
                    </div>
                    : <div className="col-70" />}

            </div>
        );

    }
}



export default ProfilePanel;