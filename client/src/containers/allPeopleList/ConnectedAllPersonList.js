import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListItem from '../../components/listItem/ListItem';
import './allPersonList.css';

class AllPersonList extends Component {
  constructor(props){
    super(props);
      this.findLetterFrequencies = this.findLetterFrequencies.bind(this);
      this.state = {
        notWords: [".", "_"]
      }
  }

  organizeEmail(email){
    let splitEmail = email.split("@")
    return splitEmail[0]
  }

  getAllEmails(){
    let emailArray = [];
    this.props.allPeople.forEach(person => {
      emailArray.push(this.organizeEmail(person.email_address))
    })
    return emailArray
  }

  findLetterFrequencies(event){
    let output = {}
    let allCharacters = this.getAllEmails().join('')

    for (var i = 0; i < allCharacters.length; i++) {
      if (output.hasOwnProperty(allCharacters[i])) {
        output[allCharacters[i]] += 1
      } else {
        this.state.notWords.includes(allCharacters[i]) ? null : output[allCharacters[i]] = 1
      }
    }
    console.log(output);
    return output;
  }

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
          <button onClick={this.findLetterFrequencies}>Letter Frequencies</button>
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
