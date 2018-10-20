import React, { Component } from 'react';
import { Link } from "react-router-dom";

import styles from './index.module.sass'

export default class Button extends Component {
	render() {
		const { link, text } = this.props

		return (
			<Link className={styles.button} to={`/${link}`} >{text}</Link>
		);
	}
}
