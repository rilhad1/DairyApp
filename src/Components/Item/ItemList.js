import React from 'react';
import { Li, P, Span, Button } from './styledItem.js'
import { selectList, rmListItem } from './../../Redux/actions/index.js';
import { connect } from "react-redux"

class ItemList extends React.Component {
    
    render = () => {
        const {  id, title, length  } = this.props
        return (
            <Li onClick = {() => this.props.dispatch(selectList(id))}>
                <P>{title}<Span>{length}</Span></P>
                <Button onClick = {() => this.props.dispatch(rmListItem(id))}>Delete</Button>
            </Li>
        )
    }
};



export default connect()(ItemList);

