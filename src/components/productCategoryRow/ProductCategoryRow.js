import React, {Component, Fragment} from "react";
import { ProductRow } from '../productRow/ProductRow';

export class ProductCategoryRow extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const productos = this.props.data;
        const categoria = this.props.category
        
        const categoryElements = productos.filter(product =>(
            product.category === categoria
        ))
        
        return <Fragment>
                <tr className="product__category-row">
                    <td>{this.props.category}</td>
                </tr>
                {
                    categoryElements.map(product =>(
                        <ProductRow key={product.name} name={product.name} price={product.price} />
                    ))
                }
          
        </Fragment>

      
    }
}