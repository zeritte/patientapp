import {
    Dimensions,
    StyleSheet
} from 'react-native';

// const DEVICE_WIDTH = Dimensions.get('window').width;
// const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 45;

// height: viewportHeight
const { width: viewportWidth } = Dimensions.get('window');
export default StyleSheet.create({
    inputStyle: {
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: 18,
        flex: 1,
        // borderWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#fff',
        color: '#fff',
    },
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FBFAFA'
    },
    containerBtn: {
        flex: 1,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    shadow: {
        flex: 1,
        width: viewportWidth,
        height: 100
    },
    bg: {
        flex: 1
        // marginTop: deviceHeight / 1.75,
        // paddingTop: 20,
        // paddingLeft: 10,
        // paddingRight: 10,
        // paddingBottom: 30,
        // bottom: 0,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d63d62',
        height: MARGIN,
        borderRadius: 20,
        zIndex: 100
    },
    circle: {
        height: MARGIN,
        width: MARGIN,
        marginTop: -MARGIN,
        borderWidth: 1,
        borderColor: '#d63d62',
        borderRadius: 100,
        alignSelf: 'center',
        zIndex: 99,
        backgroundColor: '#d63d62'
    },
    text: {
        color: 'white',
        backgroundColor: 'transparent'
    },
    image: {
        width: 24,
        height: 24
    },
    input: {
        marginBottom: 20
    },
    btn: {
        marginTop: 20,
        alignSelf: 'center'
    },
    logoContainer: {
        height: 200,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    },
    backdrop: {
        width: viewportWidth,
        flex: 1,
        flexDirection: 'column'
    },
    backgroundContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    textTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: 0,
        flex: 1,
        color: '#ffffff',
        alignSelf: 'stretch',
    }
});