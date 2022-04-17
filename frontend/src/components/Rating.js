import React from "react";

const Rating = (props) => {
  const { rating, numReviews } = props;

  return (
    <div className="rating">
      <span>
        <i
          className={
            rating >= 1
              ? "fa fa-star"
              : rating >= 0.5
              ? "fa fa-star-half-stroke"
              : "fa-thin fa-star"
          }
        ></i>
      </span>
      <span>
      <i
          className={
            rating >= 2
            ? "fa fa-star"
            : rating >= 0.5
            ? "fa fa-star-half-stroke"
            : "fa-light fa-star"
          }
        ></i>
      </span>
      <span>
      <i
          className={
            rating >= 3
            ? "fa fa-star"
            : rating >= 0.5
            ? "fa fa-star-half-stroke"
            : "fa-light fa-star"
          }
        ></i>
      </span>
      <span>
      
      <i
          className={
            rating >= 4
            ? "fa fa-star"
            : rating >= 0.5
            ? "fa fa-star-half-stroke"
            : "fa-light fa-star"
          }
        ></i>
      </span>
      <span>
      <i
          className={
            rating >= 5
            ? "fa fa-star"
            : rating >= 0.5
            ? "fa fa-star-half-stroke"
            : "fa-light fa-star"
          }
        ></i>
      </span>
      <span>
          {numReviews+"reviews"}
      </span>
    </div>
  );
};

export default Rating;
