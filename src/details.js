import React from 'react';

class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {movie: {}};
        this.fetchMovieByImdbId = this.fetchMovieByImdbId.bind(this);
    }
    componentDidMount()  {
        this.fetchMovieByImdbId(this.props.match.params.imdbId);
    }
    componentWillReceiveProps(nextProps)  {
        this.fetchMovieByImdbId(nextProps.match.params.imdbId);
    }
    fetchMovieByImdbId(imdbId) {
        var url = 'http://www.omdbapi.com/?apikey=852159f0';
        url += '&i=' + imdbId;
        fetch(url)
            .then(res => res.json())
            .then((json) => {
                this.setState({movie: json});
            });
    }
    render() {
        return(
            <div>
                <h2>{this.state.movie.Title}</h2>
                <img width="50%"
                     style={{float: 'left', marginRight: '10px'}}
                     src={this.state.movie.Poster}/>
                <p>{this.state.movie.Plot}</p>
            </div>
        )
    }
}

export default MovieDetails;