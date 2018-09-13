import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import ProgramsListItem from './ProgramsListItem';
import ProgramsListItemDetail from "./ProgramsListItemDetail";

class Liste extends Component {
	state = { data: [] };
	componentWillMount() {
		axios.post('http://185.184.208.8/api/patient/programs', {
			token: this.props.token
		}).then(function (response) {
			console.log(response.data);
			this.setState({ data: response.data.programs });
		}.bind(this)).catch(function (error) {
			console.log(error);
		});
	}
	
	componentDidMount() {
		// console.log('componentDidMount');
	}
	
	onClickDetail(data){
		console.log('onClickDetail');
		console.log(data);
		axios.post('http://185.184.208.8/api/patient/program/' + data.id , {
			token: this.props.token
		}).then(function (response) {
			console.log(response.data);
			console.log('onClickDetail - End');
			this.setState({ detail:true, detailData: response.data.program })
		}.bind(this)).catch(function (error) {
			console.log('error');
			console.log(error);
		});
	}
	
	onClickDetailBack() {
		this.setState({ detail:false, detailData: [] })
	}
	
	renderData() {
		if(this.state.detail){
			return (
				<ProgramsListItemDetail onClickDetailBack={this.onClickDetailBack.bind(this)} data={this.state.detailData} />
			);
		} else {
			return this.state.data.map((responseData, Id) =>
				<ProgramsListItem key={Id} onClickDetail={this.onClickDetail.bind(this)} data={responseData} />
			);
		}
	}
	
	render() {
		return (
			<ScrollView style={{ marginTop: 5, marginBottom: 300 }} >
				{this.renderData()}
			</ScrollView>
		);
	}
}

export default Liste;
