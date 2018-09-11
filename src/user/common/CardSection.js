import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const CardSection = (props) => {
    return (
        <View style={styles.subContainerStyle}>
            {props.children}
        </View>
    );
};

CardSection.propTypes = {
    children: PropTypes.any
};

const styles = {
    subContainerStyle: {
        // borderBottomWidth: 1,
        paddingLeft: 30,
        paddingRight: 30,
        marginBottom: 15,
        // backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        // borderColor: '#ddd',
        position: 'relative'
    },
};

export { CardSection };
