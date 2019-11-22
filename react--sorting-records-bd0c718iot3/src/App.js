import React, {Component} from 'react';
import Filter from './components/Filter';
import RecordTable from './components/RecordTable';

class App extends Component {
  state = {
    nameChecked: true,
    ageChecked: false
}

onNameToggled(event) {
  const status = event.target.checked;
    this.setState({
      nameChecked: status
    });
}

onAgeToggled(event) {
  const status = event.target.checked;
    this.setState({
      ageChecked: status
    });
}

  render() {
    return (
      <div className="container-fluid">
        <center><h1>Birthday Records</h1></center>
        <Filter onAgeClick = {this.onAgeToggled.bind(this)} onNameClick = {this.onNameToggled.bind(this)}></Filter>
        <RecordTable nameChecked = {this.state.nameChecked} ageChecked = {this.state.ageChecked}></RecordTable>
      </div>
    );
  }
}

export default App;
