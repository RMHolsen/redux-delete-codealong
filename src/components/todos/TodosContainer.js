import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo';

class TodosContainer extends Component {

  renderTodos = () => this.props.todos.map((todo, id) => <Todo delete={this.props.delete} key={todo.id} text={todo} />)
  // this has changed slightly because of the need to give each item its own id now that we're manipulating the todo item objects
  
  render() {
    return(
      <ol>
        {this.renderTodos()}
      </ol>
    );
  }
};
  
  const mapStateToProps = state => {
    return {
      todos: state.todos
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      delete: (todoText) => dispatch({ type: 'DELETE_TODO', payload: todoText })
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);