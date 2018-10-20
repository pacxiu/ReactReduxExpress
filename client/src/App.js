import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// libraries for SmartContract
import Web3 from 'web3';

// import components and containers
import Menu from './containers/Menu';

import Home from './pages/Home';
import Marketplace from './pages/Marketplace';

import Footer from './components/Footer';

// import actions
import { setAddress } from './duck/user';
import { setNetwork } from './duck/network';
import { setWeb3, setContract } from './duck/web3';

class App extends Component {
	constructor() {
		super();

		this.initWeb3 = this.initWeb3.bind(this);
		this.initNetworkData = this.initNetworkData.bind(this);
		this.initAccountAddres = this.initAccountAddres.bind(this);
	}

	componentDidMount() {
		this.initWeb3();
	}

	initWeb3() {
		let web3 = window.web3;

		if (typeof web3 !== 'undefined') {
		  	web3 = new Web3(web3.currentProvider);
		  	this.props.setNetwork({ ...this.props.network, external: false });
		} else {
			web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/Fi6gFcfwLWXX6YUOnke8"));		
		}

		// chaining promises
		Promise.resolve(this.props.setWeb3(web3))
		.then((response) => {
			this.initNetworkData(response.payload.web3);
		});
	}

  initNetworkData(web3) {
    const eth = web3.eth;
    const { setNetwork, setContract, setWeb3 } = this.props

    this.initAccountAddres()

    // get current network
    eth.net.getId().then( (id) => {
      let network = { ...this.props.network, current: id };
      // network.current = currentNetwork;

      if ( (id !== network.expected) && (network.external === false) ) {
        // const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/Fi6gFcfwLWXX6YUOnke8"));

        Promise.resolve(setWeb3(web3))
        .then((response) => {
          setNetwork({ ...network, external: true})
          return response;
        })
        .then((response) => {
          this.initNetworkData(response.payload.web3)
        })
        
        return null;
      }

      setNetwork({ ...network });
      return null;
    });

    // const contract = new web3.eth.Contract(ABI, CONTRACT)
    // const contract = new web3.eth.Contract(Contract.abi, Contract.networks["5777"].address);
    setContract('Contract here');
  }

	initAccountAddres() {
		const eth = this.props.web3.eth;

		// setting user account if it is different than current account
		eth.getAccounts().then( (account) => {
			if ( account[0] !== this.props.account ) {
				this.props.setAddress(account[0]);
			}		
			return null;
		});

		// checking if user switched accounts in interval
		setTimeout(() => {
			this.initAccountAddres();
		}, 5000);
	}

	render() {
    return (
    	<Router>
    		<div id="app">
  				<Menu />

  				<Switch>
  					<Route exact path="/" render={(props) => ( <Home {...props} />)}/>
  					<Route exact path="/test" render={(props) => ( <Marketplace {...props} />)}/>
  				</Switch>

  				<Footer />
  			</div>
    	</Router>		
    );
  }
}

function mapStateToProps(state) {
	return { 
		web3: state.web3.web3,
		account: state.account,
		contract: state.contract,
		network: state.network
	};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setWeb3, setAddress, setContract, setNetwork }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
