import { StackNavigator } from 'react-navigation';
import QuestionOne from './QuestionOne.js';
import QuestionTwo from './QuestionTwo.js';
import QuestionThree from './QuestionThree.js';
import QuestionFour from './QuestionFour.js';

export default (StackNavigator({
    QuestionOne: { screen: QuestionOne },
    QuestionTwo: { screen: QuestionTwo },
    QuestionThree: { screen: QuestionThree },
    QuestionFour: { screen: QuestionFour }
}));
