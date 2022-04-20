import React, { useState, useEffect } from "react";
import axios from "axios";
import './styles/Data.css'




class Data extends React.Component {
    state = {
        credit: [],
        debit: [],
        items: []
    }

    async componentDidMount(){
        try {
            const debits = await axios.get('https://moj-api.herokuapp.com/debits');
            const debitinfo = debits.data;
            const credits = await axios.get('https://moj-api.herokuapp.com/credits');
            const creditinfo = credits.data;
            this.setState({
                items: debitinfo,
                debit: debitinfo,
                credit: creditinfo
            })
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <div>
                <div class="container">
                <button  onClick={() => this.setState({ items: this.state.debit})}>Debit</button>
                <button  onClick={() => this.setState({ items: this.state.credit})}>Credit</button>
                </div>
                {this.state.items.map(data => (
                    <ul key = {data.id} className = "list">
                        <li>Description: {data.description}</li>
                        <li>Amount: {data.amount}</li>
                        <li>Date: {data.date.substring(0,10)}</li>
                    </ul>
                ))}
            
            </div>
        )
    }
}
export default Data;