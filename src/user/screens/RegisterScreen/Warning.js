import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, Image, TouchableOpacity, View  } from 'react-native';
import {
    Button,
    Card,
    CardSection,
    ContainerBackground
} from '../../common';

class Warning extends Component {
    constructor(props) {
        super(props);
    }

    clickYes() {
        const { navigation } = this.props;
        navigation.navigate('QuestionFive');
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, backgroundColor: '#2F3C66' }}>
                <Card>
                    <CardSection>
                        <TouchableOpacity style={{ marginTop: 30 }} onPress={() => navigation.goBack(null)} >
                            <Image source={require("../../../../assets/ios-arrow-back.png")} />
                        </TouchableOpacity>
                    </CardSection>
                      <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 130 }}>
                       <Text style={{ margin: 30, fontSize: 32, color: 'white', textAlign: 'center' }}>
                         Doktorunun onayı var mı?
                       </Text>
                       <Image style={{ marginTop: 10, alignSelf: 'center' }} source={require("../../../../assets/ios-alert.png")} />
                       <Text style={{ margin: 30, fontSize: 16, color: 'white', textAlign: 'center' }}>
                         Kronik bir rahatsızlığın olduğunu
                         belirttiğin için egzersiz aktivitelerini doktoruna danışıp yapmalısın. Yine de devam etmek istiyor musun?
                       </Text>
                       </View>
                       <CardSection>
                           <Button full rounded primary style={{ marginTop: 10 }} onPress={() => this.clickYes()}>
                               <Text>DEVAM ET</Text>
                           </Button>
                       </CardSection>
                  </Card>
            </View>
        );
    }
}

Warning.navigationOptions = {
    header: null
};

Warning.propTypes = {
    navigation: PropTypes.object,
    clickYes: PropTypes.func
};

export default Warning;
