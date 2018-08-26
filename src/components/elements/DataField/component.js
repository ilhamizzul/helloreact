import React from 'react';


export default class Component extends React.Component {
  render() {
    const { label, data, classes} = this.props;



    return (
      <div className={classes.root}>  
        <label className={classes.label}>
          {label}
          {/* <input className={classes.inputStyle} type="text" name={name} /> */}
          <h4 className={classes.data} >{data}</h4>
        </label>
        
      </div>


    )
  }
}