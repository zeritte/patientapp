import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import {
    Button,
    Card,
    CardSection,
    ContainerBackground
} from '../../common';
import { questionTwoChanged } from '../../actions';
import styles from './Styles';

class QuestionTwo extends Component {
    constructor(props) {
        super(props);
    }

    answerChange(answer) {
        const { questionTwoChanged, navigation } = this.props;
        questionTwoChanged(answer);
        navigation.navigate('QuestionThree');
    }

    render() {
        return (
            <ContainerBackground source={require('../../images/figure-3.png')} style={{ flex: 1, backgroundColor: 'white' }}>
                <Card>
                    <CardSection>
                        <Button full rounded primary style={{ marginTop: 10 }} onPress={() => this.props.navigation.goBack(null)}>
                            <Text>Go Back</Text>
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Text style={styles.textTitle}>Ne Yapmak İstiyorsun?</Text>
                    </CardSection>
                    <CardSection>
                        <Button full rounded primary style={{ marginTop: 10 }} onPress={() => this.answerChange('ANSWER 1')}>
                            <Text>AĞRILARI AZALT</Text>
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button full rounded primary style={{ marginTop: 10 }} onPress={() => this.answerChange('ANSWER 2')}>
                            <Text>SAĞLIKLI OL</Text>
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button full rounded primary style={{ marginTop: 10 }} onPress={() => this.answerChange('ANSWER 3')}>
                            <Text>GÜÇLENDİRME</Text>
                        </Button>
                    </CardSection>
                </Card>
            </ContainerBackground>
        );
    }
}

QuestionTwo.navigationOptions = {
    header: null
};

QuestionTwo.propTypes = {
    navigation: PropTypes.object,
    questionTwoChanged: PropTypes.func
};


const mapStateToProps = ({ RegisterDataResponse }) => {
    const { questionTwo } = RegisterDataResponse;
    return { questionTwo: questionTwo };
};

export default connect(
    mapStateToProps,
    { questionTwoChanged }
)(QuestionTwo);
