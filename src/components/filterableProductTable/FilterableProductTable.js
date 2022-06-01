import React, {Component} from "react";
export class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return <div className="table">
            <h2 className="table__heading">Search your favorite product</h2>
            {this.props.children}
        </div>
    }
}
