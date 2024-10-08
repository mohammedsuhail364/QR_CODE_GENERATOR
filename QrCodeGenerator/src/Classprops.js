import React, { Component } from 'react';

class Classprops extends Component {
    render() {
        return (
            <div>
                <h1>hello {this.props.name} from {this.props.place} ! welcome to tutorial</h1>
                <p>{this.props.children}</p>
            </div>
        );
    }
}

export default Classprops;