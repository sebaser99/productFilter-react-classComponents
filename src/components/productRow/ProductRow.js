import React, {Component} from "react";

export class ProductRow extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const nombre = this.props.stock ? this.props.name : <span style={{color: 'red'}}>{this.props.name}</span>
        return <tr>
            <td>{nombre}</td>
            <td>{this.props.price}</td>
        </tr>
    }
}