import React from 'react';
import { connect } from 'react-redux';
import {  Form, Input, ButtonSub  } from './styledItem.js';
import { addListAction } from './../../Redux/actions/index.js';


class ItemNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = event => {
    this.setState({value: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(addListAction(this.state.value));
  }
  render = () => {
    return (
        <Form onSubmit={this.handleSubmit}>
            <Input 
                type="text" 
                placeholder="Type name here..."
                value={this.state.value} 
                onChange={this.handleChange} 
            />
            <ButtonSub>Add new</ButtonSub>
        </Form>
    );
  }
}

export default connect()(ItemNew);
