import React from 'react';
import Select from './components/Select';
import Table from './components/Table';
import Chart from './components/Chart';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      history: [],
      id: ''
    };
  }

  onHandleChange = (device) => {
    if (device.target.value !== 'Select a device') {
      fetch(`/${device.target.value}`)
        .then(res => res.json())
        .then(data =>
          this.setState({ type: data.type, history: data.history, id: data.id })
        );
    } else {
      this.setState({ type: '', history: [], id: '' });
    }
  }

  render() {
    const { type, history, id } = this.state;
    return (
      <div className="container mt-2">
        <h1>Stock for Video Games Console Department</h1>
        <div className="row">
          <div className="col-md-3">
            <Select onHandleChange={this.onHandleChange} value={type} />
            {type && <p>Product id : #{id}</p>}
          </div>
          {type && (
            <div className="col-md-4">
              <Table type={type} history={history} />
            </div>
          )}
          {type && (
            <div className="col-md-5">
              <Chart type={type} history={history} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
