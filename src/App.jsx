import React, {Component} from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';



class App extends Component  {
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
    return good + neutral + bad;
  }
  
  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();

     const percentage = ((good / total) *100).toFixed();
   
    return percentage;
  }
  render() {
    const total = this.countTotalFeedback();
    
    return (
      <>
      

      <Section title="Please leave feedback">  
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleLeaveFeedback} />
      </Section>

      <Section title={'Statistics'}>
            {total > 0 ? (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={total}
                positiveFeedback={this.countPositiveFeedbackPercentage()}
              />
            ) : (
              <Notification message={'There is no feedback'} />
            )}
          </Section>
     
    </>
  );
  }
};
export default App;