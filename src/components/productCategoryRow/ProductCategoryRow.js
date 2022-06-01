import React, {Component, Fragment} from "react";
import { ProductRow } from '../productRow/ProductRow';

export class ProductCategoryRow extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const productos = this.props.data;
        const categoria = this.props.category      
        return <Fragment>
                <tr className="product__category-row">
                    <td colSpan="2">{categoria}</td>
                </tr>
                {
                    productos.map(product =>(
                        <ProductRow key={product.name} name={product.name} price={product.price} stock={product.stocked} />
                    ))
                }
          
        </Fragment>

      
    }
}