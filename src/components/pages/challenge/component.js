import React from 'react';
import PropTypes from 'prop-types';
import DataField from '../../elements/DataField';
import fetch from '../../../utils/fetch';
import AdminBase from '../../layouts/AdminBase';


export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataMahasiswa : [],
    }
  }
  componentDidMount(){
    this.getData();
  }

  getData = () => {
    fetch({
      method: 'get',
      url: 'http://api.myjson.com/bins/qv7mg',
    }).then(res => {
      this.setState({
        dataMahasiswa: res
      })
    })
  }

  render() {
    const { classes } = this.props;
    const { dataMahasiswa } = this.state;
    console.log(dataMahasiswa)
    return (
      <AdminBase>
          
        <form>
        <table>
          <tr>
            <th>NIM</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>class</th>
          
          </tr>
            {dataMahasiswa.map((i,v) => {
              return (
                
                <tr>
                  <td>{i.nim}</td>
                  <td>{i.name}</td>
                  <td>{i.address}</td>
                  <td>{i.phoneNumber}</td>
                  <td>{i.gender}</td>
                  <td>{i.class[name]}</td>
                </tr>
                
            );
            })}
            
          
        </table>
        </form>
        
      </AdminBase>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object.isRequired,
};
