import React, { useState, useEffect } from "react";
import axios from "axios";




class Data extends React.Component {
    state = {
        credit: true,
        items: []
    }

    // async componentDidMount() {
    //     const url =  "https://moj-api.herokuapp.com/debits";
    //     const response = await fetch(url);
    //     const data = response.json();
    //     this.setState({ item: data})
    // }

    async componentDidMount(){
        try {
            const res = await axios.get('https://moj-api.herokuapp.com/debits');
            const info = res.data;
            this.setState({
                items: info
            })
            console.log(info);
            console.log(this.state.items.length);
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <div>
                {this.state.items.map(data => (
                    <div key = {data.id}>{data.description}</div>
                ))}
            </div>
        )
    }
}
export default Data;