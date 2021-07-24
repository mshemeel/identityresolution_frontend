import React, { Component } from "react";
import { Card,ListGroup } from 'react-bootstrap';

class UserProfileDetailPanel extends Component {
    render() {
        const { userDetails } = this.props;
        return (
            <div>
                <Card.Img style={styles.cardImage} src={userDetails.avatar} alt="Card image" />

                <Card.Title>{userDetails.fullName}</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item>Gender : {userDetails.gender}</ListGroup.Item>
                    <ListGroup.Item>Occupation : {userDetails.title}, {userDetails.organization}</ListGroup.Item>
                    <ListGroup.Item>Location : {userDetails.location}</ListGroup.Item>
                </ListGroup>

                <Card.Text>
                   {userDetails.bio}
                </Card.Text>
            </div>
        );
    }
}

const styles = {
    cardImage: {
        objectFit: 'cover',
        borderRadius: 100,
        height: '20%',
        width: '20%',
    }
}
export default UserProfileDetailPanel;