import React from 'react';
import Panel from './accordion.panel';
import { Card, ListGroup } from 'react-bootstrap';
import SearchHistoryService from '../../services/search.history.service';

class Accordion extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activeTab: -1,
			history: [],
			user: "",
		};
		this.activateTab = this.activateTab.bind(this);
	}

	activateTab(index) {
		this.setState(prev => ({
			activeTab: prev.activeTab === index ? -1 : index
		}));
		const history = this.props.panels[index];
		if (history.response !== "404") {
			SearchHistoryService.getUserDetailsByHistoryID(history.id).then(
				(response) => {
					this.setState({
						user: response.data
					});
				},
				(error) => {
					alert("Files Error !!!")
				}
			);
		} else {

		}

	}
	render() {
		const { panels } = this.props;
		const { activeTab, user } = this.state;

		return (
			<div>

				<div className="col-30">
					<div className='accordion' role='tablist'>
						{panels.map((hist, index) =>
							<Panel
								key={index}
								activeTab={activeTab}
								index={index}
								{...hist}
								activateTab={this.activateTab.bind(null, index)}
							/>

						)}
					</div></div>

				{this.state.activeTab === -1 || panels[this.state.activeTab].response === "404" ?
					<div className="col-70"></div>
					: <div className="col-70">
						<Card>
							<Card.Body> 
								<Card.Title>Search Result</Card.Title>
								<Card.Img style={styles.cardImage} src={user.avatar} alt="Profile Pic" /> 
								<Card.Title>{user.fullName}</Card.Title>
								<ListGroup variant="flush">
									<ListGroup.Item>Gender : {user.gender}</ListGroup.Item>
									<ListGroup.Item>Occupation : {user.title}, {user.organization}</ListGroup.Item>
									<ListGroup.Item>Location : {user.location}</ListGroup.Item>
								</ListGroup> 
								<Card.Text>
									{user.bio}
								</Card.Text>
							</Card.Body>
							<ListGroup className="list-group-flush">
								{/*files.map((file, idx) =>
								<ListGroupItem key={idx} > <a href={file.url} onClick={()=> this.downloadFile(file.url)}>{file.name}</a></ListGroupItem>
							)*/}
							</ListGroup>
						</Card>
					</div>}

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
export default Accordion;