import React, { Component } from "react";
import "./menus.scss";
import axios from "axios";
import checkmark from "../../images/checkmark.png";
import { connect } from "react-redux";
import { addToCart } from "../../ducks/cartReducer";

class chickfila extends Component {
  constructor() {
    super();
    this.state = {
      session: false,
      items: []
    };
  }

  componentDidMount() {
    axios.get("/api/menu/chickfila").then(response => {
      this.setState({ items: response.data });
    });
    axios.get("/api/getSession").then(response => {
      if (response.data.user.email) {
        this.setState({ session: true });
      }
    });
  }

  handleClick(id) {
    if (this.state.session) {
      this.props.addToCart(id);
    } else {
      //history comes from react router dom
      this.props.history.push("/Login");
    }
  }

  render() {
    let itemList = this.state.items.map((menu, index) => {
      return (
        <div className="food-item" key={index}>
          <h3>{menu.name}</h3>
          <h5 className="menu-description">
            {menu.description && menu.description.length > 80
              ? menu.description.slice(0, 80) + "..."
              : menu.description}
          </h5>
          <h4> $ {menu.price}.00</h4>
          <button
            className="addToCart"
            onClick={() => {
              this.handleClick(menu.id);
            }}
          >
            {" "}
            Add To Cart{" "}
          </button>
        </div>
      );
    });
    return (
      <div>
        <div className="menu-items-upper">
          <img
            className="menu-logo"
            src="http://www.chick-fil-a.com/-/media/Images/CFACOM/Default-Images/chick-fil-a-logo-vector.ashx"
            alt="logo"
          />

          <h2 className="delivery-tag">
            <img className="checkmark" src={checkmark} alt="checkmark" />
            FREE DELIVERY WITH DASHPASS
          </h2>
          <h1 className="restaurant-name">Chick-fil-A®</h1>
          <h3 className="gray-tag">Open Hours: 7:00AM - 10:00PM</h3>
          <div class="rating">
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>☆</span>
            <h3 className="gray-tag">4.5 (641 Ratings)</h3>
          </div>
          <div className="info-part">
            <div className="seperate-part">
              {" "}
              <div className="top">Free</div>
              <div className="bottom">delivery</div>
            </div>
            <div className="seperate-part">
              {" "}
              <div className="top">17-27</div>
              <div className="bottom">minutes</div>
            </div>
            <div className="seperate-part">
              {" "}
              <div className="top">1.1</div>
              <div className="bottom">miles</div>
            </div>
          </div>
        </div>
        <div className="item-bar">
          <span className="item-bar-word">Breakfast</span>
          <span className="item-bar-word">Entrees </span>
          <span className="item-bar-word">Salads</span>
          <span className="item-bar-word">Sides </span>
          <span className="item-bar-word">Beverages </span>
          <span className="item-bar-word">Treats </span>
        </div>
        <div className="food-item-outer">{itemList}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  { addToCart }
)(chickfila);
