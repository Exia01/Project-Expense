import React, { Component } from 'react';
import axios from 'axios';
import ItemTd from './Item/Item';
import { v4 as uuidv4 } from 'uuid';

class Generate extends Component {
  state = {
    students: [],
  };
  componentDidMount() {
    axios
      .get(`/read/convert`)
      // .get(`/read`)
      .then((res) => {
        console.log(res);
        const data = res.data;
        this.setState({ students: data });
        console.log(this.state);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <h1>Let's Read Data from a File:</h1>
          <a className='waves-effect waves-light btn' href='#'>
            Select File
          </a>
          <hr />
        </div>
        <div className='row'>
          <table className='highlight responsive-table'>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Gender</th>
                <th>Class Level</th>
                <th>Home State</th>
                <th>Major</th>
                <th>Extracurricular Activities</th>
              </tr>
            </thead>
            <tbody id='table-data'>
              {this.state &&
                this.state.students.map((student) => {
                  return (
                    <tr key={uuidv4()}>
                      <ItemTd student={student} />
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Generate;
