import { StackNavigator } from 'react-navigation';
import QuestionOne from './QuestionOne.js';
import QuestionTwo from './QuestionTwo.js';
import QuestionThree from './QuestionThree.js';
import QuestionFour from './QuestionFour.js';
import Warning from './Warning.js';

export default (StackNavigator({
    QuestionOne: { screen: QuestionOne },
    QuestionTwo: { screen: QuestionTwo },
    QuestionThree: { screen: QuestionThree },
    QuestionFour: { screen: QuestionFour },
    Warning: { screen: Warning }
}));
