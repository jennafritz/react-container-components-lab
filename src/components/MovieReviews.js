import React from 'react';
// Code MovieReviews Here
// const MovieReviews = (props) => {
//     <div className = 'review-list'>
//         <div className = 'review'>
//             <h2>{props.reviews.byline}</h2>
//             <h4>{props.reviews.headline}</h4>
//             <img src = {props.reviews.multimedia.src} height = {props.reviews.multimedia.height} width = {props.reviews.multimedia.width}></img>
//         </div>

//     </div>
// }

const MovieReviews = (props) => {
    console.log(props)
    return (
    <div className = 'review-list'>
        {props.reviews.map(review => {
            return(
            <div className = 'review'>
                <h3>{review['display_title']}</h3>
                {/* <img src = {review.multimedia.src} height = {review.multimedia.height} width = {review.multimedia.width}></img> */}
                <p>{review['summary_short']}</p>
            </div>
            )
            })
        }
    </div>
    )
}

export default MovieReviews