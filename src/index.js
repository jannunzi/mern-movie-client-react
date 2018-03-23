import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchMovie from './search';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class MernMovieClient extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <h1>MERN Movie Client</h1>
                <SearchMovie/>
            </div>
        )
    }
}

const Component3 = () => {
    return(
        <h1>Component 3</h1>
    )
};

class Component1 extends React.Component {
    render() {
        return(
            <h1>Component 1</h1>
        );
    }
}

class Component2 extends React.Component  {
    render() {
        return (
            <h1>Component 2</h1>
        )
    }
}

const ComponentId = ({match}) => {
    return (
        <h1>Component Id {match.params.id}</h1>
    )
};

const ComponentId2 = ({id}) => {
    return (
        <h1>Component Id 2 {id}</h1>
    )
};

class Main extends React.Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <h1>Main</h1>
                    <Link to="/page1">Page 1</Link>
                    |
                    <Link to="/page2">Page 2</Link>
                    |
                    <Link to="/page3">Page 3</Link>
                    |
                    <Link to="/page/1">Page /1</Link>
                    |
                    <Link to="/page/2">Page /2</Link>
                    |
                    <Link to="/pageid2/1">Page 2/1</Link>
                    |
                    <Link to="/pageid2/2">Page 2/2</Link>
                    <br/>
                    <Route path="/page1" component={Component1}/>
                    <Route path="/page2" component={Component2}/>
                    <Route path="/page3" component={Component3}/>
                    <Route path="/page/:id" component={ComponentId}/>
                    <Route path="/pageid2/:id" render={({match}) => (
                        <ComponentId2 id={match.params.id}/>
                    )}/>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(
    <Main/>,
    document.getElementById('root')
);
