import React, { Component } from 'react';

class LetterFrequencyButton extends Component {
  constructor(props){
    super(props);
      this.findLetterFrequencies = this.findLetterFrequencies.bind(this);
      this.state = {
        notWords: [".", "_"]
      }
  }

  //this function shaves off the @... part of the email
  organizeEmail(email){
    let splitEmail = email.split("@")
    return splitEmail[0]
  }

  getAllEmails(){
    let emailArray = [];
    this.props.peopleArray.forEach(person => {
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
    return output;
  }

  render() {
    return (
      <button onClick={this.findLetterFrequencies}>Letter Frequencies</button>
    )
  }
}

export default LetterFrequencyButton;
