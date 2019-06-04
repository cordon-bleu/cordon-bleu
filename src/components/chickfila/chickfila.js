import React, { Component } from 'react';
import './chickfila.scss';
import axios from 'axios';


export default class chickfila extends Component {
    constructor() {
        super()
        this.state = {
            session: false,
            items: []
        }
    }

    componentDidMount() {
        axios.get('/api/menu').then(response => {
            this.setState({ items: response.data })
            console.log(response.data)

        })
        axios.get('/api/getSession').then(response => {
            console.log(response.data.user)
            if (response.data.user.email) {
                this.setState({ session: true })
            }
        })
    }

    handleClick(id) {
        if (this.state.session) {
            axios.post(`/api/cart/${id}`).then(response => {
                console.log("hit")
            })
        } else { //history comes from react router dom
            this.props.history.push("/Login")
        }
    }

    render() {
        let itemList = this.state.items.map(menu => {
            return <div className="food-item" key={menu.id}>
                <h3>{menu.name}</h3>
                <h5>{menu.description}</h5>
                <h4> $ {menu.price}</h4>
                <button className="addToCart" onClick={() => {
                    this.handleClick(menu.id)
                    window.location.reload()

                }


                }> Add To Cart </button>
            </div>
        })
        return (
            <div>

                <div className="food-item-outer">

                    {itemList}

                </div>
            </div >
        );
    }
}

