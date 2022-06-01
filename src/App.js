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
    this.state = {
      searchText : "",
      isStockOnly : false
    }
  }
  unique = (arr) => {
    return Array.from(new Set(arr));
  }
  handleChangeStock = (value)=> {
    this.setState({...this.state,
                    isStockOnly: value})
  }
  handleChangeSearch = (search) => {
    this.setState({ ...this.state,
                  searchText: search})
  }

  render(){
    const dataArr = this.state.searchText.length === 0 ? data :
        data.filter(product => (
          product.name.toLocaleLowerCase().includes(this.state.searchText.toLocaleLowerCase())
        ))
    const categories = data.map(product => (
      product.category
    ))
    const categoryArr = this.unique(categories)
    const productsArr = this.state.isStockOnly ?  categoryArr.map(cat =>(
                                                  {categoria: cat,
                                                    productos: dataArr.filter(product =>(
                                                      product.category === cat && product.stocked
                                                    ))}))
                                              : categoryArr.map(cat =>(
                                                {
                                                  categoria: cat,
                                                  productos: dataArr.filter(product =>(
                                                    product.category === cat
                                                  ))
                                                }))

    return <FilterableProductTable>
              <SearchBar state={this.state} handleChangeSearch={this.handleChangeSearch} 
              handleChangeStock={this.handleChangeStock} />
              <ProductTable>

                { dataArr.length > 0 ?
                  
                  productsArr.map((product, index) => {
                  if(product.productos.length > 0){
                    return <ProductCategoryRow key={index}  category={product.categoria} data={product.productos} />
                  } 
                  return;
                })
                : <tr><td className="error" colSpan="2">No hay productos para tu búsqueda</td></tr>
                }
              </ProductTable>
          </FilterableProductTable>
  }
}
