import React from 'react';
import { View, ImageBackground, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

const ContainerBackground = ({ children, source }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={source} style={styles.backgroundImage}>
                <ScrollView style={styles.loginForm}>
                    {children}
                </ScrollView>
            </ImageBackground>
        </View>
    );
};

ContainerBackground.propTypes = {
    children: PropTypes.any,
    source: PropTypes.number
};

const styles = {
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
    },
    loginForm: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    containerStyle: {
        borderWidth: 0,
        // borderRadius: 2,
        // borderColor: '#ddd',
        // borderBottomWidth: 0,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.1,
        // shadowRadius: 2,
        elevation: 1,
        // marginLeft: 5,
        // marginRight: 5,
        // marginTop: 10,

    },
};

export { ContainerBackground };
