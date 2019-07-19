import React, { Component } from 'react';

import Post from '../components/Post';
import {getPostsList} from "../redux/actions/posts";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    postsList: state.posts.postsList,
});
const mapDispatchToProps = dispatch => ({
    getPostsList: () => dispatch(getPostsList())
});

class PostsList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const { getPostsList } = this.props;
        getPostsList();
    }

    render() {
        const { history, postsList } = this.props;

        return (
            <React.Fragment>
                {postsList && postsList.length && postsList.map((p,i) => <Post key={i} postData={p}/>)}
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
