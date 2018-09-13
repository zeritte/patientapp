import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    Text, TouchableOpacity, View, Image
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
        if(answer==="Var") {
            navigation.navigate('Warning');
        }else{
          navigation.navigate('QuestionFive');
        }
    }

    render() {
      const { navigation } = this.props;
        return (
            <ContainerBackground source={require('../../images/figure-5.png')} style={{ flex: 1, backgroundColor: 'white' }}>
                <Card>
                    <CardSection>
                        <TouchableOpacity style={{ marginTop: 30 }} onPress={() => navigation.goBack(null)} >
                            <Image source={require("../../../../assets/ios-arrow-back.png")} />
                        </TouchableOpacity>
                    </CardSection>
                    <CardSection>
                        <Text style={styles.textTitle}>
                            Kronik Bir Rahatsızlığın Var mı?
                        </Text>
                    </CardSection>
                    <View style={{ flex: 1, marginTop: 350 }}>
                    <CardSection>
                        <Button full rounded primary style={{ marginTop: 10 }} onPress={() => this.answerChange('Var')}>
                            <Text>VAR</Text>
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button full rounded primary style={{ marginTop: 10 }} onPress={() => this.answerChange('Yok')}>
                            <Text>YOK</Text>
                        </Button>
                    </CardSection>
                    </View>
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
