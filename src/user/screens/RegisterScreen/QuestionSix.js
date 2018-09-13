import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    Text, TouchableOpacity, View, Image, Picker
} from 'react-native';
import {
    Button,
    Card,
    CardSection,
    ContainerBackground
} from '../../common';
import { questionSixChanged } from '../../actions';
import styles from './Styles';

class QuestionSix extends Component {

    constructor(props) {
        super(props);
        this.state = { chosenOne: '70kg' };
    }

    answerChange() {
        const { questionSixChanged, navigation } = this.props;
        questionSixChanged(this.state.chosenOne);
        navigation.navigate('SignUp');
    }

    render() {
      const { navigation } = this.props;
        return (
            <ContainerBackground source={require('../../images/figure-7.png')} style={{ flex: 1, backgroundColor: 'white' }}>
                <Card>
                    <CardSection>
                        <TouchableOpacity style={{ marginTop: 30 }} onPress={() => navigation.goBack(null)} >
                            <Image source={require("../../../../assets/ios-arrow-back.png")} />
                        </TouchableOpacity>
                    </CardSection>
                    <CardSection>
                        <Text style={styles.textTitle}>Kilon?</Text>
                    </CardSection>
                    <View style={{ flex: 1, marginTop: 250 }}>
                    <CardSection>
                        <Button full rounded primary style={{ marginTop: 10 }} onPress={() => this.answerChange()}>
                            <Text>DEVAM ET</Text>
                        </Button>
                    </CardSection>
                    <CardSection>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                        <Picker
                            style={{ width: 330, height: 210, backgroundColor:'white' }}
                            selectedValue={this.state.chosenOne}
                            onValueChange={(itemValue, itemIndex) => this.setState({chosenOne: itemValue})}
                            itemStyle={{ textAlign: 'center' }}
                        >
                            <Picker.Item label="40 kg" value="40kg" />
                            <Picker.Item label="41 kg" value="41kg" />
                            <Picker.Item label="42 kg" value="42kg" />
                            <Picker.Item label="43 kg" value="43kg" />
                            <Picker.Item label="44 kg" value="44kg" />
                            <Picker.Item label="45 kg" value="45kg" />
                            <Picker.Item label="46 kg" value="46kg" />
                            <Picker.Item label="47 kg" value="47kg" />
                            <Picker.Item label="48 kg" value="48kg" />
                            <Picker.Item label="49 kg" value="49kg" />

                            <Picker.Item label="50 kg" value="50kg" />
                            <Picker.Item label="51 kg" value="51kg" />
                            <Picker.Item label="52 kg" value="52kg" />
                            <Picker.Item label="53 kg" value="53kg" />
                            <Picker.Item label="54 kg" value="54kg" />
                            <Picker.Item label="55 kg" value="55kg" />
                            <Picker.Item label="56 kg" value="56kg" />
                            <Picker.Item label="57 kg" value="57kg" />
                            <Picker.Item label="58 kg" value="58kg" />
                            <Picker.Item label="59 kg" value="59kg" />

                            <Picker.Item label="60 kg" value="60kg" />
                            <Picker.Item label="61 kg" value="61kg" />
                            <Picker.Item label="62 kg" value="62kg" />
                            <Picker.Item label="63 kg" value="63kg" />
                            <Picker.Item label="64 kg" value="64kg" />
                            <Picker.Item label="65 kg" value="65kg" />
                            <Picker.Item label="66 kg" value="66kg" />
                            <Picker.Item label="67 kg" value="67kg" />
                            <Picker.Item label="68 kg" value="68kg" />
                            <Picker.Item label="69 kg" value="69kg" />

                            <Picker.Item label="70 kg" value="70kg" />
                            <Picker.Item label="71 kg" value="71kg" />
                            <Picker.Item label="72 kg" value="72kg" />
                            <Picker.Item label="73 kg" value="73kg" />
                            <Picker.Item label="74 kg" value="74kg" />
                            <Picker.Item label="75 kg" value="75kg" />
                            <Picker.Item label="76 kg" value="76kg" />
                            <Picker.Item label="77 kg" value="77kg" />
                            <Picker.Item label="78 kg" value="78kg" />
                            <Picker.Item label="79 kg" value="79kg" />

                            <Picker.Item label="80 kg" value="80kg" />
                            <Picker.Item label="81 kg" value="81kg" />
                            <Picker.Item label="82 kg" value="82kg" />
                            <Picker.Item label="83 kg" value="83kg" />
                            <Picker.Item label="84 kg" value="84kg" />
                            <Picker.Item label="85 kg" value="85kg" />
                            <Picker.Item label="86 kg" value="86kg" />
                            <Picker.Item label="87 kg" value="87kg" />
                            <Picker.Item label="88 kg" value="88kg" />
                            <Picker.Item label="89 kg" value="89kg" />

                            <Picker.Item label="90 kg" value="90kg" />
                            <Picker.Item label="91 kg" value="91kg" />
                            <Picker.Item label="92 kg" value="92kg" />
                            <Picker.Item label="93 kg" value="93kg" />
                            <Picker.Item label="94 kg" value="94kg" />
                            <Picker.Item label="95 kg" value="95kg" />
                            <Picker.Item label="96 kg" value="96kg" />
                            <Picker.Item label="97 kg" value="97kg" />
                            <Picker.Item label="98 kg" value="98kg" />
                            <Picker.Item label="99 kg" value="99kg" />

                            <Picker.Item label="100 kg" value="100kg" />
                            <Picker.Item label="101 kg" value="101kg" />
                            <Picker.Item label="102 kg" value="102kg" />
                            <Picker.Item label="103 kg" value="103kg" />
                            <Picker.Item label="104 kg" value="104kg" />
                            <Picker.Item label="105 kg" value="105kg" />
                            <Picker.Item label="106 kg" value="106kg" />
                            <Picker.Item label="107 kg" value="107kg" />
                            <Picker.Item label="108 kg" value="108kg" />
                            <Picker.Item label="109 kg" value="109kg" />

                            <Picker.Item label="110 kg" value="110kg" />
                            <Picker.Item label="111 kg" value="111kg" />
                            <Picker.Item label="112 kg" value="112kg" />
                            <Picker.Item label="113 kg" value="113kg" />
                            <Picker.Item label="114 kg" value="114kg" />
                            <Picker.Item label="115 kg" value="115kg" />
                            <Picker.Item label="116 kg" value="116kg" />
                            <Picker.Item label="117 kg" value="117kg" />
                            <Picker.Item label="118 kg" value="118kg" />
                            <Picker.Item label="119 kg" value="119kg" />
                            <Picker.Item label="120 kg" value="120kg" />

                        </Picker>
                        </View>
                    </CardSection>
                    </View>
                </Card>
            </ContainerBackground>
        );
    }
}

QuestionSix.navigationOptions = {
    header: null
};

QuestionSix.propTypes = {
    navigation: PropTypes.object,
    questionSixChanged: PropTypes.func
};

const mapStateToProps = ({ RegisterDataResponse }) => {
    const { questionSix } = RegisterDataResponse;
    return { questionSix: questionSix };
};

export default connect(
    mapStateToProps,
    { questionSixChanged }
)(QuestionSix);
