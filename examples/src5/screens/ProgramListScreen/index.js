import React, { Component } from 'react';
import ProgramList from './ProgramList.js';
import ProgramDetails from "./ProgramDetails.js";
import VideoDetails from "./VideoDetails.js";
import { StackNavigator } from 'react-navigation';
export default (DrawNav = StackNavigator({
  ProgramList: { screen: ProgramList },
  ProgramDetails: { screen: ProgramDetails },
  VideoDetails: { screen: VideoDetails }
}));
