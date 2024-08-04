import { useState } from "react";
import jeremy from '../images/image-jeremy.png';
import work from '../images/icon-work.svg';
import play from '../images/icon-play.svg';
import study from '../images/icon-study.svg';
import exercise from '../images/icon-exercise.svg';
import social from '../images/icon-social.svg';
import selfCare from '../images/icon-self-care.svg';
import Card from "./component/Card";

const imageMap = {
  work: work,
  play: play,
  study: study,
  exercise: exercise,
  social: social,
  selfCare: selfCare,
};

function App() {
  const [time, setTime] = useState('monthly');

  const timeTracking = [
    {
      subject: "Work",
      tag: 'work',
      daily: { current: "5hrs", previous: "7hrs", text: 'Last Day' },
      weekly: { current: "32hrs", previous: "36hrs", text: 'Last Week' },
      monthly: { current: "103hrs", previous: "128hrs", text: 'Last Month' }
    },
    {
      subject: "Play",
      tag: 'play',
      daily: { current: "1hr", previous: "2hrs", text: 'Last Day' },
      weekly: { current: "10hrs", previous: "8hrs", text: 'Last Week' },
      monthly: { current: "23hrs", previous: "29hrs", text: 'Last Month' }
    },
    {
      subject: "Study",
      tag: 'study',
      daily: { current: "0hrs", previous: "1hr", text: 'Last Day' },
      weekly: { current: "4hrs", previous: "7hrs", text: 'Last Week' },
      monthly: { current: "13hrs", previous: "19hrs", text: 'Last Month' }
    },
    {
      subject: "Exercise",
      tag: 'exercise',
      daily: { current: "1hr", previous: "1hr", text: 'Last Day' },
      weekly: { current: "4hrs", previous: "5hrs", text: 'Last Week' },
      monthly: { current: "11hrs", previous: "18hrs", text: 'Last Month' }
    },
    {
      subject: "Social",
      tag: 'social',
      daily: { current: "1hr", previous: "3hrs", text: 'Last Day' },
      weekly: { current: "5hrs", previous: "10hrs", text: 'Last Week' },
      monthly: { current: "21hrs", previous: "23hrs", text: 'Last Month' }
    },
    {
      subject: "Self Care",
      tag: 'selfCare',
      daily: { current: "0hrs", previous: "1hr", text: 'Last Day' },
      weekly: { current: "2hrs", previous: "2hrs", text: 'Last Week' },
      monthly: { current: "7hrs", previous: "11hrs", text: 'Last Month' }
    }
  ];

  return (
    <div className="container">
      <div className="user">
        <div className="report-info">
          <img src={jeremy} alt="Image of Jeremy Robson" height={64} width={64} />
          <div className="info">
            <p className="for">Report for</p>
            <h1 className="name">Jeremy Robson</h1>
          </div>
        </div>
        <div className="time">
          <p onClick={() => setTime('daily')}>Daily</p>
          <p onClick={() => setTime('weekly')}>Weekly</p>
          <p onClick={() => setTime('monthly')}>Monthly</p>
        </div>
      </div>
      {timeTracking.map((item, index) => (
        <Card
          key={index}
          img={imageMap[item.tag]}
          subject={item.subject}
          currentTime={item[time].current}
          prevText={item[time].text}
          prevTime={item[time].previous}
          tag={item.tag}
        />
      ))}
    </div>
  );
}

export default App;
