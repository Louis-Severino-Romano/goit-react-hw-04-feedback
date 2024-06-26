import React from 'react';
import './FeedbackOptions.css'; 


function FeedbackOptions(props, onGoodFeedback) {
 
 
  return (
    <div>
      <button className='colorButton' onClick={() => onGoodFeedback}>Good</button>
     
    </div>
    
  )
}

export default FeedbackOptions
// export const FeedbackOptions = ({options, onLeaveFeedback}) => {
//   return (
//     <div>{options.map(option=>(
//         <button className='colorButton' key={option} onClick={()=>onLeaveFeedback(option)}> {option}</button>
//       ))}
// </div>
//   )
// }
