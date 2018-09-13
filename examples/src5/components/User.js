import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Icon, Button, Text, Card, CardItem, Left, Right, Body } from 'native-base';
import { connect } from 'react-redux';
import { userData } from '../actions';

class UserCard extends Component {
    componentWillMount() {
        console.log('componentWillMount UserCard', this.props);
    }
	
	componentDidMount() {
		console.log('componentDidMount UserCard', this.props);
	}
	
    render() {
        const { fullname, last_login, phone, email } = this.props.user;
        return (
                <Card>
                    <CardItem>
                        <Left>
                            {/* <Thumbnail source={{ uri: 'Image URL' }} /> */}
                            <Icon active name="person" />
                            <Body>
                                <Text>{fullname}</Text>
                                <Text note>{email}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    {/* <CardItem cardBody>
                    <Image source={{ uri: 'Image URL' }} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem> */}
                    <CardItem>
                        {/* <Left>
                        <Button transparent>
                            <Icon active name="thumbs-up" />
                            <Text>12 Likes</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Button transparent>
                            <Icon active name="chatbubbles" />
                            <Text>4 Comments</Text>
                        </Button>
                    </Body> */}
                        <Body>
                            <Text>Son Görüntülenme : {last_login}</Text>
                        </Body>
                    </CardItem>
                </Card>
            // <Item>
            //     <ItemHeader>{fullname}</ItemHeader>
            //     <ItemSection>Son Görüntülenme : {last_login}</ItemSection>
            //     <ItemSection>{email}</ItemSection>
            // </Item>
        );
    }
}

class User extends Component {
    componentWillMount() {
        this.props.userData();
    }

    render() {
        const { user } = this.props;
        return (
            <View>
                {user && <UserCard user={user} />}
            </View>
        );
    }
}

const mapStateToProps = ({ user }) => {
    return { user };
};

export default connect(mapStateToProps, { userData })(User);
