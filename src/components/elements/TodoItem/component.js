import React from 'react';
import PropTypes from 'prop-types';

export default class Component extends React.Component {
  render() {
    const { classes, todo, remove } = this.props;
    
    return (
      <li className={classes.item}>
        <button
          onClick={() => remove(todo)}
          className={classes.button}
        >
          x
        </button>{' '}
        {todo.text}
      </li>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  todo: PropTypes.object,
  remove: PropTypes.func
};