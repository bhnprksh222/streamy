import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createStream } from '../../actions/index';
import StreamForm from './StreamForm';

class StreamCreate extends Component {
    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    }

    render() {
        return (
            <div>
                <h3 className="ui container header left aligned ">Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default connect(
    null, 
    { createStream }
)(StreamCreate);
