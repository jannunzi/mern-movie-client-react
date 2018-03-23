import React from 'react';
import {Link} from 'react-router-dom';

class MovieItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li className="list-group-item">
                <Link to={`/movie/${this.props.imdbId}`}>
                {this.props.title} / {this.props.imdbId}
                </Link>
            </li>
        )
    }
}

export default MovieItem;