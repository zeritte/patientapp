import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import { questionFourChanged } from '../../actions';
import styles from './Styles';

class QuestionFour extends Component {
    constructor(props) {
        super(props);
    }

    answerChange(answer) {
        const { questionFourChanged, navigation } = this.props;
        questionFourChanged(answer);
        navigation.navigate('Home');
    }

    render() {
        return (
            <ContainerBackground source={require('../../images/figure-5.png')} style={{ flex: 1, backgroundColor: 'white' }}>
                <Card>
                    <CardSection>
                        <Button full rounded primary style={{ marginTop: 10 }} onPress={() => this.props.navigation.goBack(null)}>
                            <Text>Go Back</Text>
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Text style={styles.textTitle}>
                            Kronik Bir Rahatsızlığın Var mı?
                        </Text>
                    </CardSection>
                    <CardSection>
                        <Button full rounded primary style={{ marginTop: 10 }} onPress={() => this.answerChange('Var')}>
                            <Text>Var</Text>
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button full rounded primary style={{ marginTop: 10 }} onPress={() => this.answerChange('Yok')}>
                            <Text>Yok</Text>
                        </Button>
                    </CardSection>
                </Card>
            </ContainerBackground>
        );
    }
}

QuestionFour.navigationOptions = {
    header: null
};

QuestionFour.propTypes = {
    navigation: PropTypes.object,
    questionFourChanged: PropTypes.func
};

const mapStateToProps = ({ RegisterDataResponse }) => {
    const { questionFour } = RegisterDataResponse;
    return { questionFour: questionFour };
};

export default connect(
    mapStateToProps,
    { questionFourChanged }
)(QuestionFour);
