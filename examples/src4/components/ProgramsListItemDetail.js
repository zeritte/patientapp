import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Button from '../ortak/Button';
import VideoPlayer from 'react-native-video-controls';

class ProgramsListItemDetail extends Component {
	state = {exercise:{}};
	
	onClickVideoDetail(data) {
		console.log(data);
		this.setState({exercise:{video:data.video}});
	}
	
	onClickDetailBack() {
		this.setState({exercise:{}});
	}
	
	renderData() {
		const { containerStyle, subContainerStyle, subItemStyle, ImageStyle, titleStyle } = styles;
		if(this.state.exercise.video) {
			return (
				<View style={containerStyle}>
					<View style={subContainerStyle}>
						<Button onPress={() => this.onClickDetailBack()}> Back </Button>
					</View>
					<View>
						<VideoPlayer
							source={{ uri: this.state.exercise.video }}
						/>
					</View>
				</View>
			);
		} else {
			return (
				<View style={containerStyle}>
					<View style={subContainerStyle}>
						<Button onPress={() => this.props.onClickDetailBack(this.props.data)}> Back </Button>
					</View>
					<View style={subContainerStyle}>
						<Text style={titleStyle}>{this.props.data.name} </Text>
					</View>
					{this.props.data.exercises.map((exercise, Id) =>
						<View key={Id} style={subItemStyle}>
							<View>
								<Text style={titleStyle}> {Id+1} - {exercise.name}</Text>
							</View>
							<View style={subContainerStyle}>
								<Button onPress={() => this.onClickVideoDetail(exercise)}> Detail </Button>
							</View>
						</View>
					)}
				</View>
			);
		}
	}
	
	render() {
		const { containerStyle, subContainerStyle, subItemStyle, ImageStyle, titleStyle } = styles;
		return (
			<View style={containerStyle}>
				{this.renderData()}
			</View>
		);
	}
};

const styles = {
	
	containerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10,
		
	},
	subContainerStyle: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative'
	},
	subItemStyle: {
		borderBottomWidth: 1,
		backgroundColor: '#fff',
		borderColor: '#ddd',
		position: 'relative'
	},
	ImageStyle: {
		height: 300,
		flex: 1
		
	},
	titleStyle: {
		fontSize: 18
	}
	
};

export default ProgramsListItemDetail;
