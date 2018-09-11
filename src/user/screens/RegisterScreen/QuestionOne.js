import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { 
    Button, 
    Card, 
    CardSection,
    ContainerBackground 
} from '../../common';
import { questionOneChanged } from '../../actions';
import styles from './Styles';

class QuestionOne extends Component {
    constructor(props) {
        super(props);
    }

    answerChange(gender) {
        const { questionOneChanged, navigation } = this.props;
        questionOneChanged(gender);
        navigation.navigate('QuestionTwo');
    }

    render() {
        const { navigation } = this.props;
        return (
            <ContainerBackground source={require('../../images/figure-2.png')} style={{ flex: 1, backgroundColor: 'white' }}>
                <Card>
                    <CardSection>
                        <Button full rounded primary style={{ marginTop: 10 }} onPress={() => navigation.goBack(null)}>
                            <Text>Go Back</Text>
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Text style={styles.textTitle}>Cinsiyetini Seç</Text>
                    </CardSection>
                    <CardSection>
                        <Button full rounded primary style={{ marginTop: 10 }} onPress={() => this.answerChange('Erkek')}>
                            <Text>Erkek</Text>
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button full rounded primary style={{ marginTop: 10 }} onPress={() => this.answerChange('Kadin')}>
                            <Text>Kadın</Text>
                        </Button>
                    </CardSection>
                </Card>
            </ContainerBackground>
        );
    }
}

QuestionOne.navigationOptions = {
    header: null
};

QuestionOne.propTypes = {
    navigation: PropTypes.object,
    questionOneChanged: PropTypes.func
};

const mapStateToProps = ({ RegisterDataResponse }) => {
    const { questionOne } = RegisterDataResponse;
    return { questionOne: questionOne };
};

export default connect(mapStateToProps, { questionOneChanged })(QuestionOne);
