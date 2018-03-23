import React from 'react';
import MovieItem from './movieItem';

class Results extends React.Component {
    constructor(props) {
        super(props);
    }

    renderMovies() {
        var items;
        if(this.props.movies) {
            items = this.props.movies.map(function(item, index) {
                return <MovieItem key={index} title={item.Title} imdbId={item.imdbID}/>
            });
            return (
                <ul className="list-group">
                    {items}
                </ul>
            )
        }
    }

    render() {
        return(
            <div>
                <h2>Results</h2>
                {this.renderMovies()}
            </div>
        )
    }
}

export default Results;