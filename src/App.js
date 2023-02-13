import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searcfield: ''
        }
    }
    render() {
        return (
            <section className='tc' >
                <h1>RoboFriends</h1>
                <SearchBox />
                <CardList robots={this.state.robots} />
            </section>
        );
    }
}

export default App