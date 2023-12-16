import React, {Component} from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';

export class App extends Component {
 state = {
   good: 0,
   neutral: 0,
   bad: 0,
  
  }
  
  handleLeaveFeedback = (e) => { 
    const { name } = e.target;
     this.setState((prevState) => ({ [name]: prevState[name] + 1 }));
  }
 
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
   
    return total;
  }
  
  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();

     const percentage = ((good / total) *100).toFixed();
   
    return percentage;
  }
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    
    return (
      <>
      

      <Section title="Please leave feedback">  
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleLeaveFeedback} />
      </Section>

      <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage.toString()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
     
    </>
  );
  }
}
export default App;