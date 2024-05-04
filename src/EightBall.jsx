import { useState } from 'react'
import './EightBall.css'

const EightBall = ({answers}) => {
  const getRandIdx = () => Math.floor(Math.random() * 20);

  const reset = () => {
    setBallColor('black');
    setBallText('Think of a Question');
  }

  const getAnswers = () => {
    let idx = getRandIdx();
    console.log(idx);
    setBallColor(answers[idx].color);
    setBallText(answers[idx].msg);
  }
  const [ballColor, setBallColor] = useState('black');
  const [ballText, setBallText] = useState('Think of a Question');

  return (
    <div className='EightBall'>
      <button onClick={getAnswers} className='EightBall-button' style={{backgroundColor: ballColor}}>
        {ballText}
      </button>
      <button className='EightBall-reset' onClick={reset}>Reset</button>
    </div>
  )
}



export default EightBall;