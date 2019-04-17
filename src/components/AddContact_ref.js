import React, { Component } from 'react';

export default class AddContact extends Component {
  static defaultProps = {
    name: 'medvall',
    email: 'vall@gmail.com',
    phone: '222-222-2222'
  };

  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  onSubmit = e => {
    e.preventDefault();

    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };

    console.log(contact);
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-2">
        <div className="card-header">Add contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter name"
                className="form-control form-control-lg"
                defaultValue={name}
                ref={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
                className="form-control form-control-lg"
                defaultValue={email}
                ref={this.emailInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter phone"
                className="form-control form-control-lg"
                defaultValue={phone}
                ref={this.phoneInput}
              />
            </div>
            <button className="btn btn-light btn-block">Add</button>
          </form>
        </div>
      </div>
    );
  }
}
