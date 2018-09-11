import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';
import PropTypes from 'prop-types';
import {
    Text,
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
        this.state = { date: '2016-05-15' };
    }

    answerChange() {
        const { questionThreeChanged, navigation } = this.props;
        questionThreeChanged(this.state.date);
        navigation.navigate('QuestionFour');
    }

    render() {
        return (
            <ContainerBackground source={require('../../images/figure-4.png')} style={{ flex: 1, backgroundColor: 'white' }}>
                <Card>
                    <CardSection>
                        <Button full rounded primary style={{ marginTop: 10 }} onPress={() => this.props.navigation.goBack(null)}>
                            <Text>Go Back</Text>
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Text style={styles.textTitle}>Doğum Tarihin?</Text>
                    </CardSection>
                    <CardSection>
                        <Button full rounded primary style={{ marginTop: 10 }} onPress={() => this.answerChange()}>
                            <Text>Devam</Text>
                        </Button>
                    </CardSection>
                    <CardSection>
                        <DatePicker
                            style={{ width: 200 }}
                            date={this.state.date}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate="1950-05-01"
                            maxDate="2020-06-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => {
                                this.setState({ date: date });
                            }}
                        />
                    </CardSection>
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
