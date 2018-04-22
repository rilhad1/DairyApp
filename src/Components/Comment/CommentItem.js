import React from 'react';
import { PostItem, P, Logo } from './styledComment.js';

const CommentItem = (props) => {
        return (
            <PostItem>
                <Logo src={props.url}/>
                <P>{props.post}</P>
            </PostItem>
        );
};

export default CommentItem;