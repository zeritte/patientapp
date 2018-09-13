import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Icon, Button, Text, Card, CardItem, Left, Right, Body } from 'native-base';
import { connect } from 'react-redux';
import { programDetailData } from '../../actions';

class ProgramsListItem extends Component {
    programDetailClick() {
        console.log('programDetailClick');
        this.props.programDetailData({ program_id: this.props.program.id , navigator: this.props.navigator});
    }

    render() {
        console.log(this.props.program);
        const {
            name,
            times_daily,
            times_weekly,
            progress,
            ends_at
        } = this.props.program;
        return <TouchableOpacity onPress={this.programDetailClick.bind(this)}>
            <Card>
                <CardItem>
                    <Left>
                        {/* <Thumbnail source={{ uri: 'Image URL' }} /> */}
                        <Icon active name="film" />
                        <Body>
                            <Text>{name}</Text>
                            <Text note>%{progress} tamamlandı</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    {/* <Image source={{ uri: 'Image URL' }} style={{ height: 200, width: null, flex: 1 }} /> */}
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>Günlük Tekrar : {times_daily}</Text>
                        <Text>Haftalık Tekrar : {times_daily}</Text>
                        <Text>Egzersiz Sayısı : {times_daily}</Text>
                    </Body>
                </CardItem>
            </Card>
        </TouchableOpacity>;
    }
}

const mapToStateProps = ({ }) => {
    return {  };
};

export default connect(mapToStateProps, {  programDetailData })(ProgramsListItem);