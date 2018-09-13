import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import {
    Container,
    Header,
    Content,
    Title,
    Icon,
    Button,
    Left,
    List,
    Right,
    Body
} from 'native-base';
import { connect } from 'react-redux';
import { programsListData } from '../../actions';
import ProgramsListItem from './ProgramsListItem';
import User from '../../components/User';

class ProgramList extends Component {
    componentDidMount() {
    // Alert.alert('No Users Found', 'Oops, Looks like you are not signed in');
    }

    componentWillMount() {
        this.props.programsListData();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ programsArray }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(programsArray);
    }

    render() {
        console.log(this.dataSource);
        return (
            <Container>
                <Content>
                    <User />
                    <List
                        dataSource={this.dataSource}
                        renderRow={program => (
                            <ProgramsListItem
                                {...program}
                                program={program}
                                navigator={this.props.navigation}
                            />
                        )}
                        renderLeftHiddenRow={data => (
                            <Button full onPress={() => alert(data)}>
                                <Icon active name="information-circle" />
                            </Button>
                        )}
                        renderRightHiddenRow={(data, secId, rowId, rowMap) => (
                            <Button
                                full
                                danger
                                onPress={_ => this.deleteRow(secId, rowId, rowMap)}
                            >
                                <Icon active name="trash" />
                            </Button>
                        )}
                        leftOpenValue={75}
                        rightOpenValue={-75}
                    />
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = ({ programsDataResponse }) => {
    const programsArray = _.map(programsDataResponse, (val, uid) => {
        return { ...val, uid };
    });
    return { programsArray };
};

ProgramList.navigationOptions = ({ navigation }) => ({
    header: (
        <Header>
            <Left>
                <Button transparent onPress={() => navigation.navigate('DrawerOpen')}>
                    <Icon name="menu" />
                </Button>
            </Left>
            <Body>
                <Title>Program List</Title>
            </Body>
            <Right />
        </Header>
    )
});

export default connect(
    mapStateToProps,
    { programsListData }
)(ProgramList);
