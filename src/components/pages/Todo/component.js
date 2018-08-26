import 'isomorphic-fetch';
import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from '../../elements/TodoItem';

export default class Component extends React.Component {
  state = {
    text: ''
  }

  addTodos = e => {
    e.preventDefault();

    this.props.actions.addTodo(this.state.text);
    this.setState({ text: '' });
  }

  removeTodo = todo => {
    this.props.actions.removeTodo(todo);
  }
  render() {
    const { classes, items } = this.props;

    return (
      <div className={classes.container}>
        <form onSubmit={this.addTodos} className={classes.form}>
          <div>
            <input
              type="text"
              value={this.state.text}
              onInput={e => this.setState({ text: e.target.value })}
              id="input"
            />
            <label htmlFor="input">
              What must be done?
            </label>
          </div>
        </form>

        <ul className={classes.ul}>
          {items.map((todo, i) => (
            <TodoItem key={i} todo={todo} remove={this.removeTodo} />
          ))}
        </ul>
      </div>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  items: PropTypes.array,
  actions: PropTypes.object
};
