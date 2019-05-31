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
        })
        axios.get('/api/getSession').then(response => {
            console.log(response)
            if (response.data.user.email) {
                this.setState({ session: true })
            }
        })
    }

    handleClick(id) {
        if (this.state.session) {
            axios.post(`/api/cart/${id}`).then(response => {
            })
        } else { //history comes from react router dom
            this.props.history.push("/Login")
        }
    }

    render() {
        let itemList = this.state.items.map(menu => {
            return <div key={menu.id}>
                <img src={menu.image} alt="menu" />
                <h3>{menu.name}</h3>
                <h5>{menu.description}</h5>
                <h4> $ {menu.price}</h4>
                <button className="addToCart" onClick={() => this.handleClick(menu.id)}> Add To Cart </button>
            </div>
        })
        return (
            <div>
                <div>
                    {itemList}
                </div>
            </div >
        );
    }
}
