import React from 'react';
import { TextArea, Logo, Message } from './styledComment.js';
import { addPost } from './../../Redux/actions/index.js'
import { connect } from "react-redux"

class CommentInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: ''
        };
    }

    handleChange = event => {
        this.setState({value: event.target.value});
    }
    
    addComment = event => {
        if (event.ctrlKey && event.keyCode === 13) {
            this.props.dispatch(addPost(this.state.value));
            this.setState({value: ''});
        }
    }
    
    render = () => {
        return (
            <Message>
                <Logo />
                <TextArea 
                    value={this.state.value} 
                    onChange={this.handleChange} 
                    onKeyDown={this.addComment}
                />
            </Message>
        );
    }
}


export default connect()(CommentInput);

