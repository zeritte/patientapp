import React, { Component } from "react";
import { AppRegistry, Alert, View, TouchableOpacity, Image, Dimensions } from "react-native";
import {
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Button,
  Text
} from "native-base";
import { connect } from "react-redux";
import Carousel from "react-native-snap-carousel";
import { programDetailData } from "../../actions";
import { sliderWidth, itemWidth } from "../../styles/SliderEntry.style";
import SliderEntry from "../../components/SliderEntry";

export class MyCarousel extends Component {
  _renderItem({ item, index }) {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
  }

  render() {
    const win = Dimensions.get("window");
    return (
      <Carousel
        ref={c => {
          this._carousel = c;
        }}
        data={this.props.exercises}
        renderItem={this._renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        layout={"stack"}
        layoutCardOffset={18}
      />
    );
  }
}

class EditScreenOne extends Component {
  constructor() {
    super();
    this.state = { program: {}, activeIndex: 0 };
  }
  componentWillMount() {
    // this.props.programDetailData({
    //   program_id: this.state.program.id
    // });
  }
  openVideoClick(exercise) {
    // Actions.programDetail({ exercise: exercise });
    this.props.navigation.navigate("VideoDetails", { exercise });
  }
  clickNextExercise(activeIndex) {
    const newIndex = activeIndex >= this.state.program.exercises.length - 1 ? this.state.program.exercises.length - 1 : activeIndex + 1;
    this.setState({ activeIndex: newIndex });
  }

  clickBackExercise(activeIndex) {
    const newIndex = activeIndex === 0 ? 0 : activeIndex - 1;
    this.setState({ activeIndex: newIndex });
  }
  componentDidMount() {
    const { program } = this.props.navigation.state.params;
    console.log("kjhlkj");
    this.setState({ program: program });
    console.log(this.state.program);
  }
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      header: (
        <Header>
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{params.program && params.program.name}</Title>
          </Body>
          <Right />
        </Header>
      )
    };
  };
  renderExercies() {
    const {
      containerStyle,
      subContainerStyle,
      subItemStyle,
      ImageStyle,
      titleStyle
    } = styles;
    if (this.state.program.exercises) {
      const { activeIndex } = this.state;
      const { name, teaching_points, reps, sets, image } = this.state.program.exercises[activeIndex];
      const win = Dimensions.get("window");
      console.log("win", win);
      return <Content>
          <View style={subContainerStyle}>
            <Button onPress={this.clickBackExercise.bind(this, activeIndex)} block>
              <Text>Geri</Text>
            </Button>
            <Button onPress={this.clickNextExercise.bind(this, activeIndex)} block>
              <Text>Devam</Text>
            </Button>
          </View>
          <MyCarousel exercises={this.state.program.exercises} />
          <TouchableOpacity onPress={this.openVideoClick.bind(this, this.state.program.exercises[activeIndex])}>
            <Card style={{ flex: 0 }}>
              <CardItem>
                <Body>
                  <Text>
                    {activeIndex + 1} - {name}
                  </Text>
                  <Text note>
                    {reps} - {sets}
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{ uri: image }} style={{ flex: 1, alignSelf: "stretch", width: win.width, height: 200 }} />
                  <Text>{teaching_points}</Text>
                </Body>
              </CardItem>
            </Card>
          </TouchableOpacity>
        </Content>;
    } else {
      return <Text>program null</Text>;
    }
  }
  render() {
    const {
      containerStyle,
      subContainerStyle,
      subItemStyle,
      ImageStyle,
      titleStyle
    } = styles;
    return <Container>{this.renderExercies()}</Container>;
  }
  // render() {
  //   return (
  //     <Container>
  //       <Content padder>
  //         <Card>
  //           <CardItem>
  //             <Icon active name="paper-plane" />
  //             <Text>
  //               {this.state.program && this.state.program.name} EditScreenOne
  //             </Text>
  //             <Right>
  //               <Icon name="close" />
  //             </Right>
  //           </CardItem>
  //         </Card>
  //         <Button
  //           full
  //           rounded
  //           primary
  //           style={{ marginTop: 10 }}
  //           onPress={() => this.props.navigation.navigate("EditScreenTwo")}
  //         >
  //           <Text>Goto EditScreenTwo</Text>
  //         </Button>
  //       </Content>
  //     </Container>
  //   );
  // }
}
const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    shadowColor: "#000",
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
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "#ddd",
    position: "relative"
  },
  subItemStyle: {
    borderBottomWidth: 1,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    position: "relative"
  },
  ImageStyle: {
    height: 300,
    flex: 1
  },
  titleStyle: {
    fontSize: 18
  }
};

const mapToStateProps = ({ programsDataResponse }) => {
  const { program } = programsDataResponse;

  return { program };
};

export default EditScreenOne;