import React, { Component } from "react";
import { Card, ListGroup } from 'react-bootstrap';

class UserProfileContactPanel extends Component {
    render() {

        const { userDetails } = this.props;
        return (
            <div>
                <Card.Title>{userDetails.fullName}</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item action href={userDetails.twitter}>Twitter : {userDetails.twitter}</ListGroup.Item>
                    <ListGroup.Item action href={userDetails.linkedin}>LinkedIn : {userDetails.linkedin} </ListGroup.Item>
                </ListGroup>
            </div>
        );
    }
}

export default UserProfileContactPanel;