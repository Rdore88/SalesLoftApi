import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListItem from '../../components/listItem/ListItem';
import './allPersonList.css';
import LetterFrequencyButton from '../../components/letterFrequencyButton/LetterFrequencyButton';

class AllPersonList extends Component {
  render() {
    if (this.props.allPeople.length > 0) {
      let listOfPeople = this.props.allPeople.map(person => {
        return (
          <ListItem key={person.id} person={person} />
        )
      })
      return (
        <div>
          <h1 className="list-header">List of all People</h1>
          <LetterFrequencyButton peopleArray={this.props.allPeople}/>
          <div className="list">
            {listOfPeople}
          </div>
        </div>
      )
    } else {
      return (
        <h1 className="loading-header">Loading please wait</h1>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    allPeople: state.allPeople.allPeople
  }
}

export default connect(mapStateToProps)(AllPersonList);
