import React from 'react';
import PropTypes from 'prop-types';
import TextField from '../../elements/TextField';
import fetch from '../../../utils/fetch';
import AdminBase from '../../layouts/AdminBase';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      nim: '',
      address: '',
      phoneNumber: '',
      gender: ''
    }
    this.getData();
  }
  handleSubmit = event => {
    event.preventDefault();
    const data = this.state;
    fetch({
      method: 'post',
      url: 'https://virtserver.swaggerhub.com/telkomdds/MockUpAPI/1.0.0/api/mahasiswa',
      data,
    }).then(res => {
      console.log(res);
      console.log(res.data);
    })
  }

  getData = () => {
    fetch({
      method: 'get',
      url: 'https://virtserver.swaggerhub.com/telkomdds/MockUpAPI/1.0.0/api/mahasiswa',
    }).then(res => {
      console.log(res);
      console.log(res.data);
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render() {
    const { classes } = this.props;
    
    return (
      <AdminBase>
        <form onSubmit={this.handleSubmit}>
          <TextField label="NIM :" name="nim" onChange={this.handleChange}></TextField>
          <TextField label="Nama :" name="name" onChange={this.handleChange}></TextField>
          <TextField label="Alamat :" name="address" onChange={this.handleChange}></TextField>
          <TextField label="No.HP :" name="phoneNumber" onChange={this.handleChange}></TextField>
          <TextField label="Gender :" name="gender" onChange={this.handleChange}></TextField>
          <button type="submit">Simpan</button>
        </form>
      </AdminBase>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object.isRequired,
};
