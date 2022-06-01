import React, {Component} from "react";

export class SearchBar extends Component {
    constructor(props) {
        super(props);
    }
    handleStock = (e)=> {
        this.props.handleChangeStock(e.target.checked)
    }
    handleSearch = (e)=> {  
        this.props.handleChangeSearch(e.target.value)
    }
    render() {
        const search = this.props.state.searchText;
        const stock = this.props.state.isStockOnly;
        return <form className="search"> 
            <div className="campo">
                <input type="text" placeholder="Search..." value={search} onChange={this.handleSearch}/>

            </div>
            <div className="campo">
                <input type="checkbox" id="stock"  checked={stock} onChange={this.handleStock} />
                <label htmlFor="stock">Only shows products in stock</label>
            </div>
        </form>
    }
}