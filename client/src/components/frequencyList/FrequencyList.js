import React, { Component } from 'react';
// import './frequencyModal.css'

class FrequencyModal extends Component{
  render() {
    let { show, frequenciesObject } = this.props.data;
    if (show) {
      let frequencies = Object.keys(frequenciesObject).map((key, index) => {
        return (
          <tr key={index}>
            <td>{key}</td>
            <td>{frequenciesObject[key]}</td>
          </tr>
        )
      })
      return (
        <div>
          <button onClick={this.props.closeList}>Close List</button>
          <table>
            <thead>
            <tr>
              <th>Character</th>
              <th>Count</th>
            </tr>
            </thead>
            <tbody>
              {frequencies}
            </tbody>
          </table>
        </div>
      )
    } else {
      return null
    }
  }
}

export default FrequencyModal;
