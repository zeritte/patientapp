import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}> {children} </Text>
        </TouchableOpacity>
    );
};

Button.propTypes = {
    onPress: PropTypes.func,
    children: PropTypes.any
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#2F3C66',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 15,
        paddingBottom: 15
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff',
        marginLeft: 5,
        marginRight: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    }
};

export { Button };
