import React, {Component} from "react";

export class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <form className="search"> 
            <div className="campo">
                <input type="text" placeholder="Search..."/>

            </div>
            <div className="campo">
                <input type="checkbox" id="stock"  value={true} />
                <label htmlFor="stock">Only shows products in stock</label>
            </div>
        </form>
    }
}