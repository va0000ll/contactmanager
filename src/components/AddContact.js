import React, { Component } from 'react';
import { Consumer } from '../context';
import TextInputGroup from './TextInputGroup';
import axios from 'axios';

export default class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };
  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    if (!name) {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    if (!email) {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    if (!phone) {
      this.setState({ errors: { phone: 'Phone is required' } });
      return;
    }

    const newContact = { name, email, phone };

    const res = await axios.post(
      'https://jsonplaceholder.typicode.com/users',
      newContact
    );

    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });
    this.props.history.push('/');
    dispatch({ payload: res.data, type: 'ADD_CONTACT' });
  };
  onInputChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-2">
              <div className="card-header">Add contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={this.onInputChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    type="email"
                    label="Email"
                    name="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={this.onInputChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter phone"
                    value={phone}
                    onChange={this.onInputChange}
                    error={errors.phone}
                  />
                  <button className="btn btn-light btn-block">Add</button>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
