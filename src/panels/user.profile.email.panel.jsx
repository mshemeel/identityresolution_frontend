import React, { Component } from "react";
import { Card, ListGroup } from 'react-bootstrap';

class UserProfileEmailPanel extends Component {
    render() {

        const { userDetails } = this.props;
        let emails = userDetails.details.emails;
        return (
            <div>
                <Card.Title>{userDetails.fullName}</Card.Title>
                <ListGroup variant="flush">
                {emails.map((email, idx) =>
								<ListGroup.Item key={idx} > <a href={email} >{idx} . {email}</a></ListGroup.Item>
							)}
                </ListGroup>
            </div>
        );

    }
}

export default UserProfileEmailPanel;