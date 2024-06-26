import './Statistics.css';
export const Statistics = (props) => {
  return (
    <div>
      <p className="review-stats">
        Good: <span>{props.good}</span>
      </p>
      <p className="review-stats">
        Neautral: <span>{props.neutral}</span>
      </p>
      <p className="review-stats">
        Bad: <span>{props.bad}</span>
      </p>
      
    </div>
  );
};
