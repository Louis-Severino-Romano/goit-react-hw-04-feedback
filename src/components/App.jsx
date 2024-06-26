import React, {useState} from 'react'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notifications } from './Notifications/Notifications';

function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

 const handleGoodClick=()=>{
    setGood(good+1);
  }

 const handleBadClick=()=>{
    setBad(bad+1);
  }

 const handleNeutralClick=()=>{
    setNeutral(neutral+1);
  }
  

  const countTotalFeedback=()=>{
    return good + bad + neutral;

  } 
  const totalCountFeedback=countTotalFeedback();

  const countPositiveFeedbackPercentage = (good, totalCountFeedback) => {
    if (totalCountFeedback === 0) {
      return 0; 
    }
    return Math.round((good/totalCountFeedback) * 100);
  };

  const Percentage= countPositiveFeedbackPercentage(good, totalCountFeedback);
  const options=['good','bad',neutral];
  console.log(good);

  return (
    <div>
      <FeedbackOptions  options={options}
           onGoodFeedback={handleGoodClick}
      
      />

<Section title="Statistics">
        {totalCountFeedback >0 ?(
          <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          
        />
        ):(<Notifications message="There is no feedback" />)}
          
        
        </Section>
        
    </div>
  )
}

export default App
// import { Component } from 'react';
// import { Statistics } from './Statistics/Statistics';
// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
// import { Section } from './Section/Section';
// import { Notifications } from './Notifications/Notifications';

// export class App extends Component {
//   state = {
//     Good: 0,
//     Bad: 0,
//     Neutral: 0,
//   };

//   countTotalFeedback = () => {
//     const { Good, Neutral, Bad } = this.state;
//     return Good + Neutral + Bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const Total = this.countTotalFeedback();
//     return Math.round((this.state.Good / Total) * 100);
//   };

//   handleClick = type => {
//     this.setState(prevState => ({
//       ...prevState,
//       [type]: prevState[type] + 1,
//     }));
//   };

//   render() {
//     const { Good, Neutral, Bad } = this.state;
//     const totalFeedback = this.countTotalFeedback();
//     const Percentage = this.countPositiveFeedbackPercentage();
//     const options = ['Good', 'Neutral', 'Bad'];

 
    
//     return (
//       <div>
//         <Section title="Please Leave a Feedback">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.handleClick}
//           />
          
        // </Section>
        // <Section title="Statistics">
        // {totalFeedback >0 ?(
        //   <Statistics
        //   Good={Good}
        //   Neutral={Neutral}
        //   Bad={Bad}
        //   Total={totalFeedback}
        //   Percentage={Percentage}
        // />
        // ):(<Notifications message="There is no feedback" />)}
          
        
        // </Section>
//       </div>
//     );
//   }
// }
