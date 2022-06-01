import React, {Component} from 'react';
import {FilterableProductTable} from './components/filterableProductTable/FilterableProductTable';
import { SearchBar } from './components/searchBar/SearchBar';
import { ProductTable } from './components/productTable/ProductTable';
import {ProductCategoryRow} from "./components/productCategoryRow/ProductCategoryRow";

import './App.css';
import data from './data/products.json'

export class App extends Component {
  constructor(props) {
    super(props);
  }
  unique = (arr) => {
    return Array.from(new Set(arr));
  }

  render(){
    const categories = data.map(product => (
      product.category
    ))
    let categoryArr = this.unique(categories)
    

    return <FilterableProductTable>
              <SearchBar />
              <ProductTable>
                {categoryArr.map((product, index) => ( 
                  <ProductCategoryRow key={index}  category={product} data={data} />
                ))}
              </ProductTable>
          </FilterableProductTable>
  }
}
