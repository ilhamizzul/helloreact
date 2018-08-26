import React from 'react';
import PropTypes from 'prop-types';
import DataField from '../../elements/DataField';
// import Button from '../../elements/Button';
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
      url: 'https://virtserver.swaggerhub.com/telkomdds/MockUpAPI/1.0.0/api/mahasiswa',
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
          
        {/* <form>
        {dataMahasiswa.map((i,v) => {
          return (
            // <DataField> { i.nim } </DataField>
            // <DataField> {i.name} </DataField>
            // <DataField> {i.adrress} </DataField>
            // <DataField> {i.phoneNumber} </DataField>
            // <DataField> {i.gender} </DataField>
            <h1>{i.nim}</h1>
        );
        })}
          
        </form> */}

        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell numeric>Calories</TableCell>
                <TableCell numeric>Fat (g)</TableCell>
                <TableCell numeric>Carbs (g)</TableCell>
                <TableCell numeric>Protein (g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => {
                return (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell numeric>{row.calories}</TableCell>
                    <TableCell numeric>{row.fat}</TableCell>
                    <TableCell numeric>{row.carbs}</TableCell>
                    <TableCell numeric>{row.protein}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>

      </AdminBase>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object.isRequired,
};
