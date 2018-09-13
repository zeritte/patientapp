import {
    // Platform,
    StyleSheet,
    Dimensions
} from 'react-native';
const DEVICE_WIDTH = Dimensions.get('window').width;
// const DEVICE_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
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
    logoContainer: {
        height: 200,
        // height: DEVICE_HEIGHT,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    backdrop: {
        width: DEVICE_WIDTH - 100,
        justifyContent: 'center',
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    buttons: {
        marginTop: 300
    }
});