const styles = {
  item: {
    listStyle: 'none',
    padding: '10px',
    background: '#FFF',
    borderBottom: '1px solid #EEE',
    '&:nth-child(2n)': {
      background: '#EEF6FF'
    },
    '&:last-child': {
      borderBottom: 'none'
    }
  },
  button: {
    fontSize: '12px'
  }
};

export default styles;