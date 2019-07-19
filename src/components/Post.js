import React, { Component } from 'react';


export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { postData } = this.props;

        return (
            <div className="post-card">
                <div>{postData.title}</div>
                <div>{postData.body}</div>
            </div>
        );
    }
}
