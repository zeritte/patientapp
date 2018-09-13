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
import { questionFiveChanged } from '../../actions';
import styles from './Styles';

class QuestionFive extends Component {

    constructor(props) {
        super(props);
        this.state = { chosenOne: '170cm' };
    }

    answerChange() {
        const { questionFiveChanged, navigation } = this.props;
        questionFiveChanged(this.state.chosenOne);
        navigation.navigate('QuestionSix');
    }

    render() {
      const { navigation } = this.props;
        return (
            <ContainerBackground source={require('../../images/figure-6.png')} style={{ flex: 1, backgroundColor: 'white' }}>
                <Card>
                    <CardSection>
                        <TouchableOpacity style={{ marginTop: 30 }} onPress={() => navigation.goBack(null)} >
                            <Image source={require("../../../../assets/ios-arrow-back.png")} />
                        </TouchableOpacity>
                    </CardSection>
                    <CardSection>
                        <Text style={styles.textTitle}>Boyun?</Text>
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
                            <Picker.Item label="140 cm" value="140cm" />
                            <Picker.Item label="141 cm" value="141cm" />
                            <Picker.Item label="142 cm" value="142cm" />
                            <Picker.Item label="143 cm" value="143cm" />
                            <Picker.Item label="144 cm" value="144cm" />
                            <Picker.Item label="145 cm" value="145cm" />
                            <Picker.Item label="146 cm" value="146cm" />
                            <Picker.Item label="147 cm" value="147cm" />
                            <Picker.Item label="148 cm" value="148cm" />
                            <Picker.Item label="149 cm" value="149cm" />
                            <Picker.Item label="150 cm" value="150cm" />
                            <Picker.Item label="151 cm" value="151cm" />
                            <Picker.Item label="152 cm" value="152cm" />
                            <Picker.Item label="153 cm" value="153cm" />
                            <Picker.Item label="154 cm" value="154cm" />
                            <Picker.Item label="155 cm" value="155cm" />
                            <Picker.Item label="156 cm" value="156cm" />
                            <Picker.Item label="157 cm" value="157cm" />
                            <Picker.Item label="158 cm" value="158cm" />
                            <Picker.Item label="159 cm" value="159cm" />
                            <Picker.Item label="160 cm" value="160cm" />
                            <Picker.Item label="161 cm" value="161cm" />
                            <Picker.Item label="162 cm" value="162cm" />
                            <Picker.Item label="163 cm" value="163cm" />
                            <Picker.Item label="164 cm" value="164cm" />
                            <Picker.Item label="165 cm" value="165cm" />
                            <Picker.Item label="166 cm" value="166cm" />
                            <Picker.Item label="167 cm" value="167cm" />
                            <Picker.Item label="168 cm" value="168cm" />
                            <Picker.Item label="169 cm" value="169cm" />
                            <Picker.Item label="170 cm" value="170cm" />
                            <Picker.Item label="171 cm" value="171cm" />
                            <Picker.Item label="172 cm" value="172cm" />
                            <Picker.Item label="173 cm" value="173cm" />
                            <Picker.Item label="174 cm" value="174cm" />
                            <Picker.Item label="175 cm" value="175cm" />
                            <Picker.Item label="176 cm" value="176cm" />
                            <Picker.Item label="177 cm" value="177cm" />
                            <Picker.Item label="178 cm" value="178cm" />
                            <Picker.Item label="179 cm" value="179cm" />
                            <Picker.Item label="180 cm" value="180cm" />
                            <Picker.Item label="181 cm" value="181cm" />
                            <Picker.Item label="182 cm" value="182cm" />
                            <Picker.Item label="183 cm" value="183cm" />
                            <Picker.Item label="184 cm" value="184cm" />
                            <Picker.Item label="185 cm" value="185cm" />
                            <Picker.Item label="186 cm" value="186cm" />
                            <Picker.Item label="187 cm" value="187cm" />
                            <Picker.Item label="188 cm" value="188cm" />
                            <Picker.Item label="189 cm" value="189cm" />
                            <Picker.Item label="190 cm" value="190cm" />
                            <Picker.Item label="191 cm" value="191cm" />
                            <Picker.Item label="192 cm" value="192cm" />
                            <Picker.Item label="193 cm" value="193cm" />
                            <Picker.Item label="194 cm" value="194cm" />
                            <Picker.Item label="195 cm" value="195cm" />
                            <Picker.Item label="196 cm" value="196cm" />
                            <Picker.Item label="197 cm" value="197cm" />
                            <Picker.Item label="198 cm" value="198cm" />
                            <Picker.Item label="199 cm" value="199cm" />
                            <Picker.Item label="200 cm" value="200cm" />
                            <Picker.Item label="201 cm" value="201cm" />
                            <Picker.Item label="202 cm" value="202cm" />
                            <Picker.Item label="203 cm" value="203cm" />
                            <Picker.Item label="204 cm" value="204cm" />
                            <Picker.Item label="205 cm" value="205cm" />
                            <Picker.Item label="206 cm" value="206cm" />
                            <Picker.Item label="207 cm" value="207cm" />
                            <Picker.Item label="208 cm" value="208cm" />
                            <Picker.Item label="209 cm" value="209cm" />
                            <Picker.Item label="210 cm" value="210cm" />
                            <Picker.Item label="211 cm" value="211cm" />
                            <Picker.Item label="212 cm" value="212cm" />
                            <Picker.Item label="213 cm" value="213cm" />
                            <Picker.Item label="214 cm" value="214cm" />
                            <Picker.Item label="215 cm" value="215cm" />
                            <Picker.Item label="216 cm" value="216cm" />
                            <Picker.Item label="217 cm" value="217cm" />
                            <Picker.Item label="218 cm" value="218cm" />
                            <Picker.Item label="219 cm" value="219cm" />
                            <Picker.Item label="220 cm" value="220cm" />
                        </Picker>
                        </View>
                    </CardSection>
                    </View>
                </Card>
            </ContainerBackground>
        );
    }
}

QuestionFive.navigationOptions = {
    header: null
};

QuestionFive.propTypes = {
    navigation: PropTypes.object,
    questionFiveChanged: PropTypes.func
};

const mapStateToProps = ({ RegisterDataResponse }) => {
    const { questionFive } = RegisterDataResponse;
    return { questionFive: questionFive };
};

export default connect(
    mapStateToProps,
    { questionFiveChanged }
)(QuestionFive);
