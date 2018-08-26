import React from 'react';

export default class Component extends React.Component {
  render() {
    const { label, name, classes} = this.props;

    return (
      <div className={classes.root}>  
        <label>
          {label}
          <input className={classes.inputStyle} type="text" name={name} />
        </label>
        
      </div>
    )
  }
}