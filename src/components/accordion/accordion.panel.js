import React from 'react';
import ReactDOM from "react-dom";


class Panel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			height: 0
		};
	}

	componentDidMount() {
		window.setTimeout(() => {
			const el = ReactDOM.findDOMNode(this);
			const height = el.querySelector('.panel__inner').scrollHeight;
			this.setState({
				height
			});
		}, 333);
	}

	render() {
		const { id, email, fullName, phone, linkedin, twitter, response, activeTab, index, activateTab } = this.props;
		const { height } = this.state;
		const isActive = activeTab === index;
		const innerStyle = {
			height: `${isActive ? height : 0}px`
		}

		return (
			<div className='panel'
				role='menuitem'
				aria-expanded={isActive}>
				<button className='panel__label'
					role='tab'
					onClick={activateTab}>
					{id}-{email!==null && email!==""?email:fullName}
				</button>
				<div className='panel__inner'
					style={innerStyle}
					aria-hidden={!isActive}>
					<p className='panel__content'>FullName : {fullName}</p>
					<p className='panel__content'>Phone : {phone}</p>
					<p className='panel__content'>linkedIn : {linkedin}</p>
					<p className='panel__content'>Twitter : {twitter}</p>
					<p className='panel__content'>Search Status : {response==="200"?"Result Found":"No Result Found"}</p>

				</div>
			</div>
		);
	}
}

export default Panel;