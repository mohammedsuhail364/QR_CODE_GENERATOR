import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class PureComp extends PureComponent {
    render() {
        console.log('pure comp');
        return (
            <div>
               i'm pure component {this.props.name1}
            </div>
        );
    }
}
export default PureComp;