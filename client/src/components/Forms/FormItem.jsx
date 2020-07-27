import React, { Component } from "react";
import LocationAutoComplete from "../LocationAutoComplete";
import "../../styles/form.css";

class ItemForm extends Component {
  state = {
    name:""
  };

  handleChange = (event) => {
    const key = event.target.name;
    let value =
      event.target.type === "file" ? event.target.files[0] : event.target.value;
      console.log("Wax On Wax Off");
    this.setState({[key]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Wax On Wax Off");
    function buildFormData(formData, data, parentKey) {
      if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
        Object.keys(data).forEach(key => {
          buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
        });
      } else {
        const value = data == null ? '' : data;
    
        formData.append(parentKey, value);
      }
    }
    
    function jsonToFormData(data) {
      const formData = new FormData();
    
      buildFormData(formData, data);
    
      return formData;
    }
    
    const my_data = {
      name: this.state.name,
    description: this.state.description,
    image: this.state.image,
    category: this.state.category,
    quantity: this.state.quantity,
    address: this.state.adress,
    /* id_user: this.req.session.currentUser.id */
  };
    
    jsonToFormData(my_data)

  };


  handlePlace = (place) => {
    // This handle is passed as a callback to the autocomplete component.
    // Take a look at the data and see what you can get from it.
    // Look at the item model to know what you should retrieve and set as state.
    console.log(place);
  };

  render() {
    return (
      <div className="ItemForm-container">
        <form className="form" onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <h2 className="title">Add Item</h2>

          <div className="form-group">
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              className="input"
              type="text"
              placeholder="What are you giving away ?"
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="category">
              Category
            </label>

            <select id="category" name="category" defaultValue="-1">
              <option value="-1" disabled>
                Select a category
              </option>
              <option value="Plant">Plant</option>
              <option value="Kombucha">Kombucha</option>
              <option value="Vinegar">Vinegar</option>
              <option value="Kefir">Kefir</option>
            </select>
          </div>

          <div className="form-group">
            <label className="label" htmlFor="quantity">
              Quantity
            </label>
            <input name="quantity" className="input" id="quantity" type="number" />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="location">
              Address
            </label>
            <LocationAutoComplete onSelect={this.handlePlace} />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="text-area"
              placeholder="Tell us something about this item"
            ></textarea>
          </div>

          <div className="form-group">
            <label className="custom-upload label" htmlFor="image">
              Upload image
            </label>
            <input name="image" className="input" id="image" type="file" />
          </div>

          <h2>Contact information</h2>

          <div className="form-group">
            <label className="label" htmlFor="contact">
              How do you want to be reached?
            </label>
            <div>
              <input type="radio" />
              user email
            </div>
            <input type="radio" />
            contact phone number
          </div>

          <p className="message">
            <img src="/media/info.svg" alt="info" />
            Want to be contacted by phone? Add your phone number in your
            personal page.
          </p>

          <button type="submit" className="btn-submit">Add Item</button>
        </form>
      </div>
    );
  }
}

export default ItemForm;
