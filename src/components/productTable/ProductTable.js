import React, {Component} from "react";


export class ProductTable extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return <table className="product-table">
            <thead className="product-table__head">
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {this.props.children}
            </tbody>
        </table>
    }
}