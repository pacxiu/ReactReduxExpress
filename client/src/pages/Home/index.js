import React, { Component } from 'react';

import './index.css';

import Button from '../../components/Button';

export default class Home extends Component {
	render() {
		return (
			<div className="main-container">
				<div>
					<h1>Ether Comics</h1>
					<Button link="test" text="Text"></Button>
				</div>
			</div>
		);
	}
}
