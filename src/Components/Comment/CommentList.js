import React from 'react';
import CommentItem from './CommentItem.js';
import CommentInput from './CommentInput.js';
import { CommentDiv, CommentTitle, Ul } from './styledComment.js';
import { connect } from 'react-redux';

class CommentList extends React.Component{
    
    render =() => {
        if(!this.props.commentPost) {
            return (
            <CommentDiv>
                <CommentTitle>Chose Item</CommentTitle>
                <Ul>
                </Ul>
                <CommentInput/>
            </CommentDiv>
            );
        }
        
        return (
            <CommentDiv>
                <CommentTitle>Comments #{this.props.commentPost.id}</CommentTitle>
                <Ul>
                    {    
                        this.props.commentPost.comment.map(item => 
                            <CommentItem 
                                url={item.img}
                                post={item.text} 
                                key={item.id}
                            /> 
                        ) 
                    }
                </Ul>
                <CommentInput/>
            </CommentDiv>
            );
    }
}


const mapStateToProps = state => {
    return {
        commentPost: state.filter( item => item.isOpen )[0]
    };
};


export default connect(mapStateToProps)(CommentList);


