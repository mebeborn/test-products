import React, { Component } from 'react';
import Table from './components/Table/Table';
import Input from './components/Input/Input';
import Loader from './components/Loader/Loader';

class App extends Component {

  state = {
    data: [],
    filteredData: [],
    searchText: '',
    isLoading: true,
    error: ''
  }

  componentDidMount() {
    fetch('https://prod-test.herokuapp.com/api/getProducts')
      .then(resonse => resonse.json())
      .then(data => this.setState({ isLoading: false, filteredData: data, data }))
      .catch(error => this.setState({ error }))
  }

  changeHandler(event) {
    let products = [...this.state.data];

    if (event.target.value !== '') {
      products = this.state.data.filter(el => {
        const searchText = event.target.value.toLowerCase();
        const name = el.name.toLowerCase();

        return name.includes(searchText);
      });
    }
    this.setState({ filteredData: [...products] });
  }

  render() {
    const content = (
      <React.Fragment>
        <Input changeHandler={(event) => this.changeHandler(event)} />
        <Table products={this.state.filteredData} />
      </React.Fragment>
    );


    return (
      <div className="container-fluid">
        {
          this.state.error ? <h1>Try again later</h1> :
            this.state.isLoading
              ? <Loader />
              : content
        }
      </div>
    );
  }
}

export default App;
