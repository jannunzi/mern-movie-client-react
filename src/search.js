import React from 'react';
import Results from './results';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MovieDetails from './details';

class SearchMovie extends React.Component {
    constructor() {
        super();
        this.state = {keyword: '', movies: []};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({keyword: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        var url = 'http://www.omdbapi.com/?apikey=852159f0';
        url += '&s=' + this.state.keyword;
        fetch(url)
            .then(res => res.json())
            .then((json) => {
                this.setState({movies: json.Search});
            });
    }

    renderMovies() {
        var items;
        if(this.state.movies) {
            items = this.state.movies.map(function(item, index) {
                return <li className="list-group-item" key={index}>{item.Title}</li>;
            });
        }
        return (
            <ul className="list-group">
                {items}
            </ul>
        )
    }

    render() {
        return (
            <div>
                <h2>Search Movies</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <input value={this.state.keyword}
                               className="form-control"
                               onChange={this.handleChange} />
                        <div className="input-group-append">
                            <button type="submit"
                                    className="btn btn-primary">
                                Search
                            </button>
                        </div>
                    </div>
                </form>
                <Router>
                    <div className="row">
                        <div className="col-md-6">
                            <Results movies={this.state.movies}/>
                        </div>
                        <div className="col-md-6">
                            <Route path="/movie/:imdbId" component={MovieDetails}/>
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}

export default SearchMovie;