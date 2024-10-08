// Counter.js
import React, { Component } from 'react';
import updatecom from './higherorder';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    incrementcount = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <button onMouseEnter={this.incrementcount}>
                    {this.props.name} incremented to {count}
                </button>
            </div>
        );
    }
}

export default updatecom(Counter);
