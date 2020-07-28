import React, { Component } from "react";
import apiHandler from "../api/apiHandler";
import Link from "react-dom";

class Card extends Component {
  handleDelete = (id) => {
    apiHandler
      .deleteItem(id)
      .then(() => {
        this.props.handleModification();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { item } = this.props;
    console.log("================ITEM", item);
    return (
      <div key={item._id} className="item">
        <div className="round-image">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="description">
          <h2>{item.name}</h2>
          <h4>Quantity: {item.quantity} </h4>
          <p>{item.description}</p>
          <div className="buttons">
            <span>
              <button
                className="btn-secondary"
                onClick={() => this.handleDelete(item._id)}
              >
                Delete
              </button>
            </span>
            <span>
              {/* <Link to={`/item/edit/${item._id}`}> */}
              <button className="btn-primary">Edit</button>
              {/* </Link> */}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
