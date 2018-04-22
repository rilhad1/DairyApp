import React from 'react';
import ItemNew from './ItemNew.js';
import ItemList from './ItemList.js';
import { ItemDiv, ItemTitle } from './styledItem.js';
import { connect } from "react-redux"


class ItemBlock extends React.Component {
    render = () => {
        return (
            <ItemDiv>
                <ItemTitle>Items</ItemTitle>
                <ItemNew />
                <ul>
                    { this.props.state.map((item) => 
                        <ItemList 
                            length={item.comment.length} 
                            id={item.id}
                            title={item.title} 
                            key={item.id}
                        /> )
                    }
                </ul>
            </ItemDiv>
        );
    }
};


const mapStateToProps = state => {
    return {
        state: state
    }
}


export default connect(mapStateToProps)(ItemBlock);


