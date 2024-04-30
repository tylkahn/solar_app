import React from "react";
import logo from '../logo.svg'

class Search extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <img src={logo} style={{ width: '45%', height: 'auto' }}/>
                <div class="search-container">
                    <input type="text" id="search-input" placeholder="Zipcode"/>
                    <button onClick={this.props.handle} type="submit" class="submit-btn">Search</button>
                </div>
            </div>
        );
    }
}

export default Search;