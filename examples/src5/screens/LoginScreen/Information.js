import React from "react";
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Button, Text } from "native-base";
export default class Information extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		header: (
			<Header>
				<Left>
					<Button transparent onPress={() => navigation.goBack()}>
						<Icon name="arrow-back" />
					</Button>
				</Left>
				<Body>
				<Title>Vexrob Nedir?</Title>
				</Body>
				<Right />
			</Header>
		)
	});
	render() {
		return (
			<Container>
				<Content padder>
					<Card>
						<CardItem>
							<Icon active name="paper-plane" />
							<Text>Information 1</Text>
						</CardItem>
						<CardItem>
							<Text>
								Ben Vexrob! Bir egzersiz asistani uygulamasiyim.
							</Text>
						</CardItem>
					</Card>
				</Content>
			</Container>
		);
	}
}
