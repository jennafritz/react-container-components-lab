import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    constructor(){
        super()
        this.state ={
            reviews: [],
            searchTerm: '',
            // searched: false
        }
    }

    handleSubmit = (searchTerm) => {
        console.log(searchTerm)
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=9Nf6GLs6WuGSLiG95TcEiPNPRiCu0UTZ&query=${searchTerm}`)
            .then(res => res.json())
            .then(searchData => {
                this.setState({
                    reviews: searchData.results,
                    // searched: !this.state.searched
                })
            })
    }
    
    render() {
        console.log(this.state)
        return (
            <div>
                <form onSubmit={(event) => {
                    event.preventDefault()
                    this.handleSubmit(this.state.searchTerm)
                }}>
                    <input onChange={event => this.setState({searchTerm: event.target.value})} name="searchTerm" type="text" value={this.state.searchTerm}/>
                    <input type="submit" value="Search For Movies" />
                </form>
                {/* {this.state.searched===true ? <h1>Search Results</h1> : null} */}
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
