import React, { Component } from 'react';

import styles from "./index.module.sass"

export default class TextEllipse extends Component {
	render() {
    const { text } = this.props

		return (
			<div className={styles.text}>{text}</div>
		);
	}
}
