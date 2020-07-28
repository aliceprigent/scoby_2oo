import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";
import "../styles/Profile.css";
import "../styles/CardItem.css";
import apiHandler from "../api/apiHandler";
import Card from "../components/Card";

class Profile extends Component {
  state = {};

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.props.authContext.user._id, this.state);
    apiHandler
      .updateProfile(this.props.authContext.user._id, this.state)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleModification = () => {
    console.log("I've been called from the card");
    const user = this.props.authContext.user._id;
    apiHandler
      .getItems(user)
      .then((data) => {
        this.setState({ items: data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    const user = this.props.authContext.user._id;
    console.log("===================USER", user);
    apiHandler
      .getItems(user)
      .then((data) => {
        console.log("==============DATA", data);
        this.setState({ items: data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { authContext } = this.props;
    const { user } = authContext;
    console.log("================THIS.STATE", this.state);
    return (
      <div style={{ padding: "100px", fontSize: "1.25rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
          This is profile, it's protected !
        </h2>
        <p>
          Checkout the<b>ProtectedRoute</b> component in
          <code>./components/ProtectRoute.jsx</code>
        </p>
        <a
          style={{ color: "dodgerblue", fontWeight: "bold" }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://reacttraining.com/react-router/web/example/auth-workflow"
        >
          React router dom Demo of a protected route
        </a>

        <section className="Profile">
          <div className="user-image round-image">
            <img src={user.profileImg} alt={user.firstName} />
          </div>
          <div className="user-presentation">
            <h2>
              {user.firstName} {user.lastName}
            </h2>
            <Link className="link" to="/profile/settings">
              Edit profile
            </Link>
          </div>

          {!user.phoneNumber && (
            <div className="user-contact">
              <h4>Add a phone number</h4>

              <form
                className="form"
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
              >
                <div className="form-group">
                  <label className="label" htmlFor="phoneNumber">
                    Phone number
                  </label>
                  <input
                    className="input"
                    id="phoneNumber"
                    type="text"
                    name="phoneNumber"
                    placeholder="Add phone number"
                  />
                </div>
                <button className="form__button" type="submit">
                  Add phone number
                </button>
              </form>
            </div>
          )}

          {user.phoneNumber && (
            <div>
              <h4>Phone number:</h4>
              <p>{user.phoneNumber}</p>
            </div>
          )}

          {!this.state.items === 0 && (
            <div className="CardItem">
              <div className="item-empty">
                <div className="round-image">
                  <img src="/media/personal-page-empty-state.svg" alt="" />
                </div>
                <p>You don't have any items :(</p>
              </div>
            </div>
          )}

          {this.state.items && (
            <div className="CardItem">
              <h3>Your items</h3>

              {this.state.items.map((oneItem) => (
                <Card
                  item={oneItem}
                  key={oneItem._id}
                  handleModification={this.handleModification}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    );
  }
}

export default withUser(Profile);
