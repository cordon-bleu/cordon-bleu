import React, { useState, useEffect } from "react";
import promo from "../../images/promo.jpg";
import "./Rest.scss";
import { connect } from "react-redux";
import axios from "axios";

/// icon
import American from "./food_icons/American.jpg";
import Mexican from "./food_icons/Mexican.png";
import Breakfast from "./food_icons/Breakfast.png";
import Chinese from "./food_icons/Chinese.png";
import Burgers from "./food_icons/Burgers.png";
import Italian from "./food_icons/Italian.png";
import Sushi from "./food_icons/Sushi.png";
import Asian from "./food_icons/Asian.png";
import Thai from "./food_icons/Thai.png";
import Indian from "./food_icons/Indian.png";
import Barbecue from "./food_icons/Barbecue.jpg";
import Sandwiches from "./food_icons/Sandwiches.png";
import Fast_Food from "./food_icons/Fast_Food.png";
import Dessert from "./food_icons/Dessert.png";
import Vietnamese from "./food_icons/Vietnamese.png";
import Seafood from "./food_icons/Seafood.jpg";
import Japanese from "./food_icons/Japanese.png";
/// icon

/// promoted restuarants
import Chipotle from "./foodpromo/Chipotle.jpg";
import Wendy from "./foodpromo/Wendy.png";
import Corner from "./foodpromo/Corner.jpeg";
import Chicfila from "./foodpromo/Chicfila.jpg";
import Papa from "./foodpromo/Papa.jpg";

function Restuarants(props) {
  return (
    <article>
      <section className="restcont">
        <ul>
          <li>
            <img src={American} alt="" width="47" />
            <p>American</p>
          </li>
          <li>
            <img src={Mexican} alt="" width="47" />
            <p>Mexican</p>
          </li>
          <li>
            <img src={Breakfast} alt="" width="47" />
            <p>Breakfast</p>
          </li>
          <li>
            <img src={Chinese} alt="" width="47" />
            <p>Chinese</p>
          </li>
          <li>
            <img src={Burgers} alt="" width="47" />
            <p>Burgers</p>
          </li>
          <li>
            <img src={Italian} alt="" width="47" />
            <p>Italian</p>
          </li>
          <li>
            <img src={Sushi} alt="" width="47" />
            <p>Sushi</p>
          </li>
          <li>
            <img src={Asian} alt="" width="47" />
            <p>Asian</p>
          </li>
          <li>
            <img src={Thai} alt="" width="47" />
            <p>Thai</p>
          </li>
          <li>
            <img src={Indian} alt="" width="47" />
            <p>Indian</p>
          </li>
          <li>
            <img src={Barbecue} alt="" width="47" />
            <p>Barbecue</p>
          </li>
          <li>
            <img src={Sandwiches} alt="" width="47" />
            <p>Sandwiches</p>
          </li>
          <li>
            <img src={Fast_Food} alt="" width="47" />
            <p>Fastfood</p>
          </li>
          <li>
            <img src={Dessert} alt="" width="47" />
            <p>Desserts</p>
          </li>
          <li>
            <img src={Vietnamese} alt="" width="47" />
            <p>Vietnamese</p>
          </li>
          <li>
            <img src={Seafood} alt="" width="47" />
            <p>Seafood</p>
          </li>
          <li>
            <img src={Japanese} alt="" width="47" />
            <p>Japanese</p>
          </li>
        </ul>
      </section>
      <div className="filter-section">
        <ul className="filter">
          <li>
            Over 4.5 <i className="fas fa-star" /> &#65372; &gt;
          </li>
          <li>Pickup</li>
          <li>Vegetarian</li>
          <li>Dashpass</li>
          <li>&#36;,&#36;&#36; &#65372; &gt;</li>
        </ul>
      </div>
      <section className="promo">
        <div>
          <h2>&#36;0 delivery for 30 days!</h2>
          <p className="ten">
            &#36;0 delivery for orders over &#36;10 for 30days
          </p>
          <p className="learn">Learn More &#10230;</p>
        </div>
        <img src={promo} alt="" />
      </section>
      <section className="featured">
        <div>
          <h1>Featured National Partners</h1>
          <button className="see-all-button">See All &#10230;</button>
        </div>
        <div className="promoted">
          <div className="top">
            <figure>
              <img src={Chipotle} width="200" alt="chipotle" />
              <figcaption>Chipotle</figcaption>
              <figcaption>Free delivery .22mins</figcaption>
            </figure>
            <figure>
              <img src={Wendy} width="250" alt="wendy" />
              <figcaption>Wendy's</figcaption>
              <figcaption>Free delivery .22mins</figcaption>
            </figure>
          </div>
          <div className="bottom">
            <figure>
              <img src={Chicfila} width="200" alt="chicfila" />
              <figcaption>Chick-fil-A&#174;</figcaption>
              <figcaption>Free delivery .22mins</figcaption>
            </figure>
            <figure>
              <img src={Corner} alt="cornerbakery" width="200" />
              <figcaption>Corner Bakey</figcaption>
              <figcaption>Free delivery .22mins</figcaption>
            </figure>
            <figure>
              <img src={Papa} alt="papajohn" width="200" />
              <figcaption>Papa John's Pizza</figcaption>
              <figcaption>Free delivery .22mins</figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section className="pickup">
        <header>
          <h1>New! Try Pickup</h1>
          <p>No lines, no fees</p>
          <button className="see-all-button">See All &#10230;</button>
        </header>
        {props.eatery &&
          props.eatery.map((item, index) => {
            return (
              <figure key={index}>
                <img src={Papa} alt="" width="200" />
                <figcaption>{item.restaurantName[0]}</figcaption>
                <figcaption>
                  Pickup in {item.driving[0]}
                  <figcaption>{item.gpsTime[0]}</figcaption>
                </figcaption>
              </figure>
            );
          })}

        {props.eatery &&
          props.eatery.map((item, index) => {
            return (
              <figure key={index}>
                <img src={Chicfila} alt="" width="200" />
                <figcaption>{item.restaurantName[1]}</figcaption>
                <figcaption>
                  Pickup in {item.driving[1]}
                  <figcaption>{item.gpsTime[1]}</figcaption>
                </figcaption>
              </figure>
            );
          })}
        {props.eatery &&
          props.eatery.map((item, index) => {
            return (
              <figure key={index}>
                <img src={Papa} alt="" width="200" />
                <figcaption>{item.restaurantName[2]}</figcaption>
                <figcaption>
                  Pickup in {item.driving[2]}
                  <figcaption>{item.gpsTime[2]}</figcaption>
                </figcaption>
              </figure>
            );
          })}

        {props.eatery &&
          props.eatery.map((item, index) => {
            return (
              <figure key={index}>
                <img src={Papa} alt="" width="200" />
                <figcaption>{item.restaurantName[3]}</figcaption>
                <figcaption>
                  Pickup in {item.driving[3]}
                  <figcaption>{item.gpsTime[3]}</figcaption>
                </figcaption>
              </figure>
            );
          })}
        {props.eatery &&
          props.eatery.map((item, index) => {
            return (
              <figure key={index}>
                <img src={Papa} alt="" width="200" />
                <figcaption>{item.restaurantName[4]}</figcaption>
                <figcaption>
                  Pickup in {item.driving[4]}
                  <figcaption>{item.gpsTime[4]}</figcaption>
                </figcaption>
              </figure>
            );
          })}
        {props.eatery &&
          props.eatery.map((item, index) => {
            return (
              <figure key={index}>
                <img src={Papa} alt="" width="200" />
                <figcaption>{item.restaurantName[5]}</figcaption>
                <figcaption>
                  Pickup in {item.driving[5]}
                  <figcaption>{item.gpsTime[5]}</figcaption>
                </figcaption>
              </figure>
            );
          })}
      </section>

      <section className="alleatery">
        <h3>All Restuarants</h3>
        <ul>
          <li>
            <img src={American} alt="" width="47" />
            <p>American</p>
          </li>
          <li>
            <img src={Mexican} alt="" width="47" />
            <p>Mexican</p>
          </li>
          <li>
            <img src={Breakfast} alt="" width="47" />
            <p>Breakfast</p>
          </li>
          <li>
            <img src={Chinese} alt="" width="47" />
            <p>Chinese</p>
          </li>
          <li>
            <img src={Burgers} alt="" width="47" />
            <p>Burgers</p>
          </li>
          <li>
            <img src={Italian} alt="" width="47" />
            <p>Italian</p>
          </li>
          <li>
            <img src={Sushi} alt="" width="47" />
            <p>Sushi</p>
          </li>
          <li>
            <img src={Asian} alt="" width="47" />
            <p>Asian</p>
          </li>
          <li>
            <img src={Thai} alt="" width="47" />
            <p>Thai</p>
          </li>
          <li>
            <img src={Indian} alt="" width="47" />
            <p>Indian</p>
          </li>
          <li>
            <img src={Barbecue} alt="" width="47" />
            <p>Barbecue</p>
          </li>
          <li>
            <img src={Sandwiches} alt="" width="47" />
            <p>Sandwiches</p>
          </li>
          <li>
            <img src={Fast_Food} alt="" width="47" />
            <p>Fastfood</p>
          </li>
          <li>
            <img src={Dessert} alt="" width="47" />
            <p>Desserts</p>
          </li>
          <li>
            <img src={Vietnamese} alt="" width="47" />
            <p>Vietnamese</p>
          </li>
          <li>
            <img src={Seafood} alt="" width="47" />
            <p>Seafood</p>
          </li>
          <li>
            <img src={Japanese} alt="" width="47" />
            <p>Japanese</p>
          </li>
        </ul>
        <div className="filter-section">
          <ul className="filter">
            <li>
              Over 4.5 <i className="fas fa-star" /> &#65372; &gt;
            </li>
            <li>Pickup</li>
            <li>Vegetarian</li>
            <li>Dashpass</li>
            <li>&#36;,&#36;&#36; &#65372; &gt;</li>
          </ul>
        </div>
        <div className="alleatery">
          {props.eatery && console.log(props.eatery)}
        </div>
      </section>
    </article>
  );
}

const mapStateToProps = reduxState => {
  return {
    eatery: reduxState.search.eatery
  };
};

export default connect(mapStateToProps)(Restuarants);
