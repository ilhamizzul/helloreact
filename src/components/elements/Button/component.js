import React from 'react';

export default class Component extends React.Component {
  render() {
    const { label, name, classes} = this.props;

    return (
      <div className={classes.root}>  
        <button>simpan</button>
      </div>
    )
  }
}