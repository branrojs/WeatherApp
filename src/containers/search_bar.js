import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = { term: ''};

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event){
		this.setState({ term: event.target.value });	
	}

	onFormSubmit(event) {
		event.preventDefault();
		//we need to go and fetch data 
		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
	}

	render() {


		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
				 placeholder="Get a five-day forecast in your favorite cities"
				 className="form-control"
				 value={this.state.term}
				 onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

/*null as fisrt argument -> wenever we are passing in a function that is supposed to map our 
dispatch to the props of our container it always goes in as the second argument.
By passing null here all we are saying is hey you know I undestand that redux is maintaining some 
state but this container does not care about, it doesnt need any state here.*/