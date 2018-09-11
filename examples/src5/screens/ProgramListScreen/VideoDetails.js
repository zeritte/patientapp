import React, { Component } from 'react';
import { ScrollView, View, Dimensions,StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Button, Text } from "native-base";
// import VideoPlayer from 'react-native-video-controls';
import Video from 'react-native-af-video-player';
const DEVICE_WIDTH = Dimensions.get('window').width;

class ProgramDetail extends Component {
    constructor() {
        super();
        this.state = {
            rate: 1,
            volume: 1,
            muted: false,
            resizeMode: 'contain',
            duration: 0.0,
            currentTime: 0.0,
            exercise: {}
        };
    }
	
	static navigationOptions = ({ navigation }) => {
		const { state } = navigation;
		// Setup the header and tabBarVisible status
		const header = state.params && (state.params.fullscreen ? (
            <Header>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                <Title>Vexrob Nedir?</Title>
                </Body>
                <Right />
            </Header>
		) : null);
		const tabBarVisible = state.params ? state.params.fullscreen : true;
		return {
			// For stack navigators, you can hide the header bar like so
			header,
			// For the tab navigators, you can hide the tab bar like so
			tabBarVisible,
		}
	}
	
	onMorePress() {
		console.log('onMorePress');
	}
	
	onFullScreen(status) {
		// Set the params to pass in fullscreen status to navigationOptions
        console.log('onFullScreen', status);
		this.props.navigation.setParams({
			fullscreen: !status
		});
	}
	
    componentDidMount() {
		const { exercise } = this.props.navigation.state.params;
		this.setState({ exercise });
	}
	
	componentWillMount() {
		this.props.navigation.setParams({
		   fullscreen: true
		})
	}
    
    onLoad() {
        console.log('onLoad');
    }
	
    onProgress() {
        console.log('onProgress');
    }
 
    onEnd() {
        console.log('onEnd');
    }
	
    render() {
        const { container } = styles;
	    const url = this.state.exercise.video;
        const placeholder = this.state.exercise.image;
	    const logo = 'https://vexrob.com/assets/img/favicon/apple-icon-57x57.png';
	    const title = 'My video title';
	    console.log(this.state.exercise);
	    return (
            <View>
                <ScrollView>
                    <View style={container}>
                        {this.state.exercise.video && (
                            <Video
                                // autoPlay
                                url={url}
                                title={title}
                                logo={logo}
                                placeholder={placeholder}
                                onMorePress={() => this.onMorePress()}
                                onFullScreen={status => this.onFullScreen(status)}
                                fullScreenOnly
                                rotateToFullScreen
                            />
                        )}
                    </View>
                    <Text>
                        Neden Kullanırız?
                        Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır. Şu anda birçok masaüstü yayıncılık paketi ve web sayfa düzenleyicisi, varsayılan mıgır metinler olarak Lorem Ipsum kullanmaktadır. Ayrıca arama motorlarında 'lorem ipsum' anahtar sözcükleri ile arama yapıldığında henüz tasarım aşamasında olan çok sayıda site listelenir. Yıllar içinde, bazen kazara, bazen bilinçli olarak (örneğin mizah katılarak), çeşitli sürümleri geliştirilmiştir.
                    </Text>
                </ScrollView>
            </View>
        );
    }
}
//
// ProgramDetail.navigationOptions = {
//     header: null
// };

const styles = {
    container: {
	    flex: 1,
	    // justifyContent: 'center'
    },
    fullScreen: {
	    ...StyleSheet.absoluteFillObject,
        width: DEVICE_WIDTH,
        height: 600,
    },
    controls: {
        backgroundColor: 'transparent',
        borderRadius: 5,
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20
    },
    progress: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 3,
        overflow: 'hidden'
    },
    innerProgressCompleted: {
        height: 20,
        backgroundColor: '#cccccc'
    },
    innerProgressRemaining: {
        height: 20,
        backgroundColor: '#2C2C2C'
    },
    generalControls: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 4,
        overflow: 'hidden',
        paddingBottom: 10
    },
    rateControl: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    volumeControl: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    resizeModeControl: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    controlOption: {
        alignSelf: 'center',
        fontSize: 11,
        color: 'white',
        paddingLeft: 2,
        paddingRight: 2,
        lineHeight: 12
    },
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    },
    subContainerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    },
    subItemStyle: {
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        position: 'relative'
    },
    ImageStyle: {
        height: 300,
        flex: 1
    },
    titleStyle: {
        fontSize: 18
    }
};

const mapToStateProps = () => {
    return {};
};

export default connect(mapToStateProps, {})(ProgramDetail);
