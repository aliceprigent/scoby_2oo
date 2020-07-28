import React, { Component } from "react";

export class CardItem extends Component {
  render() {
    return (
      <div className="card">
        <img className="round-image" src={this.props.plant.image} alt="r" />
        <p>{this.props.plant.name}</p>
        <p>{this.props.plant.quantity}</p>
        <p>{this.props.plant.description}</p>
        <p>{this.props.plant.address}</p>
        <img
          style={{ borderRadius: "20px", width: "25px", height: "25px" }}
          src={this.props.user.profileImg} alt="r"
        />
        <p>Given away by:{this.props.user.firstName}</p>
        <p>Contact {this.props.user.firstName} at {this.props.user.email ? this.props.user.email: this.props.user.phone}</p>
      </div>
    );
  }
}

export default CardItem;
