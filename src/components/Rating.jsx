import { useState } from 'react';
import '../App.css';

const Rating = () => {
    const [activeStars, setActiveStars] = useState(0);
    const [hoverStars, setHoverStars] = useState(0);

    const handleHoverStars = (rating) => {
        setHoverStars(rating);
    };

    const selectStars = (rating) => {
        setActiveStars(rating);
    };

    return (
        <div className="container">
            <p>Give your rating</p>
            <div className="star-container">
                {[1, 2, 3, 4, 5].map((star) => (
                    <i
                        key={star}
                        className={`fa-star ${
                            star <= hoverStars ? 'fa-solid mouseover' : 'fa-regular'
                        }
                            ${star <= activeStars ? 'fa-solid active' : 'fa-regular'}
                        `}
                        onMouseOver={() => handleHoverStars(star)}
                        onMouseLeave={() => handleHoverStars(0)}
                        onClick={() => selectStars(star)}
                    ></i>
                ))}
            </div>
        </div>
    );
};

export default Rating;
