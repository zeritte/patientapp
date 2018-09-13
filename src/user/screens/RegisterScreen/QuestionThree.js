import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-native-date-picker';
import PropTypes from 'prop-types';
import {
    Text, TouchableOpacity, View, Image, DatePickerIOS
} from 'react-native';
import {
    Button,
    Card,
    CardSection,
    ContainerBackground
} from '../../common';
import { questionThreeChanged } from '../../actions';
import styles from './Styles';

class QuestionThree extends Component {

    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);
    }

    answerChange() {
        const { questionThreeChanged, navigation } = this.props;
        questionThreeChanged(this.state.date);
        navigation.navigate('QuestionFour');
    }

    setDate(newDate) {
      this.setState({chosenDate: newDate})
    }

    render() {
      const { navigation } = this.props;
        return (
            <ContainerBackground source={require('../../images/figure-4.png')} style={{ flex: 1, backgroundColor: 'white' }}>
                <Card>
                    <CardSection>
                        <TouchableOpacity style={{ marginTop: 30 }} onPress={() => navigation.goBack(null)} >
                            <Image source={require("../../../../assets/ios-arrow-back.png")} />
                        </TouchableOpacity>
                    </CardSection>
                    <CardSection>
                        <Text style={styles.textTitle}>Doğum Tarihin?</Text>
                    </CardSection>
                    <View style={{ flex: 1, marginTop: 250 }}>
                    <CardSection>
                        <Button full rounded primary style={{ marginTop: 10 }} onPress={() => this.answerChange()}>
                            <Text>DEVAM ET</Text>
                        </Button>
                    </CardSection>
                    <CardSection>
                        <View style={{ flex: 1, backgroundColor:'white' }}>
                        <DatePickerIOS
                          mode="date"
                          date={this.state.chosenDate}
                          onDateChange={this.setDate}
                        />
                        </View>
                    </CardSection>
                    </View>
                </Card>
            </ContainerBackground>
        );
    }
}

QuestionThree.navigationOptions = {
    header: null
};

QuestionThree.propTypes = {
    navigation: PropTypes.object,
    questionThreeChanged: PropTypes.func
};

const mapStateToProps = ({ RegisterDataResponse }) => {
    const { questionThree } = RegisterDataResponse;
    return { questionThree: questionThree };
};

export default connect(
    mapStateToProps,
    { questionThreeChanged }
)(QuestionThree);
