import React, { useEffect, useState } from "react";
import { fetchReview, Reviews } from "../Services/review";
import Heading from "./Heading";
import "./review.css";

const Review: React.FC = () => {
  const [review, setReview] = useState<Reviews[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const reviewData = await fetchReview();
        setReview(reviewData);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
      }
    };

    getReviews();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  const renderStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => (
      <span key={i} className="star">
        ★
      </span>
    ));
  };

  return (
    <>
      <Heading heading="Reviews" />
      <div className="main-container">
        <div className="container-review">
          {review.map((review, index) => (
            <div key={index} className="review-post">
              {review.imgUrl && (
                <img
                  src={review.imgUrl}
                  alt={review.name}
                  className="review-image"
                />
              )}
              <div className="stars">{renderStars(review.reviews)}</div>
              <p className="comment">{review.comment}</p>
              <p className="review-footer">
                {review.name} {new Date(review.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Review;
