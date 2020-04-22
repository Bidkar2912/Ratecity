import React, { Component } from 'react';
import axios from 'axios';
import Pagination from 'react-bootstrap/Pagination'

class UserList extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://blaze.ratecity.com.au/api/search/home-loans`)
      .then(res => {
        const persons = res.data.hits;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <div>
      <h4>RateCity Test</h4>
      <div className="table-responsive">
                <table className="table mg-b-0">
                  <thead>
                    <tr>
                      <th scope="col"> UUId</th>
                      <th scope="col">Name</th>
                      <th scope="col">FamilyId</th>
                      <th scope="col">FamilyName</th>

                     
                    </tr>
                  </thead>
                  <tbody>
                     { this.state.persons.map(person =><tr> <td>{person.uuid}</td><td>{person.name}</td><td>{person.familyId
                     }</td><td>{person.familyName}</td></tr>)}
                  </tbody>
                  <Pagination>
  <Pagination.First />
  <Pagination.Prev />
  <Pagination.Item>{1}</Pagination.Item>
  <Pagination.Item>{2}</Pagination.Item>
  <Pagination.Item>{3}</Pagination.Item>
  <Pagination.Next />
  <Pagination.Last />
</Pagination>
                </table>
              </div>
              </div>
    )
  }
}

export default UserList;