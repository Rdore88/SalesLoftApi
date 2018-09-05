import React, { Component } from 'react';
import './listItem.css'

export default class ListItem extends Component {
  render() {
    let { person } = this.props
    return (
      <div className="list-items">
        <p>Name: {person.display_name}</p>
        <p>Email: {person.email_address}</p>
        <p>Job Title: {person.job_title}</p>
      </div>
    )
  }
}
