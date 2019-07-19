import React, { Component } from 'react';
import {savePost} from "../redux/actions/posts";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    ...state
});
const mapDispatchToProps = dispatch => ({
    savePost: () => dispatch(savePost())
});


class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleValue: '',
            bodyValue: '',
        };

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeBody = this.handleChangeBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeTitle(event) {
        this.setState({titleValue: event.target.value});
    }
    handleChangeBody(event) {
        this.setState({bodyValue: event.target.value});
    }

    handleSubmit() {
        const { history, savePost } = this.props;

        return savePost({
            title: this.state.titleValue,
            body: this.state.bodyValue,
        })/*.then((res) => {
            history.push('/');
        })*/
    }

    render() {
        const { history } = this.props;

        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title:
                        <input type="text" value={this.state.titleValue} onChange={this.handleChangeTitle} />
                    </label>
                    <label>
                        Body:
                        <input type="text" value={this.state.bodyValue} onChange={this.handleChangeBody} />
                    </label>
                    <button type="submit">Save</button>
                </form>
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
