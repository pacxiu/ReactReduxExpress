import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import ReactSVG from 'react-svg';
import ReactTooltip from 'react-tooltip'

import classnames from 'classnames';
import styles from "./index.module.sass";

import TextEllipse from '../../components/TextEllipsis'

import networkIcon from '../../assets/icons/network.svg';
import logo from '../../assets/logo.png';

class Menu extends Component {
	render() {
		let { address, network } = this.props;
		let accountLink, networkStatus, networkMsg;

		// check user account
		if ( address == null ) {
			address = "No account";
			accountLink = "";
		} else {
			accountLink = address.toString();
		}

		// check user network
		if ( !network.external ) {
	  		networkStatus = (<a className="is-online" data-for="network" data-tip><ReactSVG path={networkIcon}/></a>)
	  		networkMsg = "You are connected to Main Ethereum Network";
	  	} else {
	  		networkStatus = (<a data-for="network" data-tip><ReactSVG path={networkIcon}/></a>)
	  		networkMsg = "We connected you to Main Network with external provider. Please, install Metamask or check network.";
	  	}

		return (
			<nav className={styles.nav}>
				<div className={styles.logo}>
					<Link to="/"><img src={logo} alt=""/></Link>
					<p>Ether Comics</p>
				</div>

				<div>
					<Link to="/test">Marketplace</Link>
				</div>
				
				<div className={classnames(styles.accountContainer, {[styles.isOnline]: !network.external })}>
					{networkStatus}
					<ReactTooltip id="network" place="bottom" type="light" effect="solid">
						{networkMsg}
					</ReactTooltip>
					
					<div className={styles.dropdown}>
						<a className={styles.dropdownToggle}><strong>Account</strong></a>
						<div className={styles.dropdownContent}>
							<TextEllipse text={address}/>
							<Link to={accountLink}>My Heroes</Link>
						</div>
					</div>
				</div>				
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return { 
		address: state.user.address,
		network: state.network
	};
}

export default connect(mapStateToProps)(Menu);