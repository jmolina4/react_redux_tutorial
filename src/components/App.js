import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar'

class App extends React.Component {
    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 1ebde06c6a98eb8bf4b1ccddc514267a2d37a41a7182457af4ea5e1d01adbdfe'
            }
        });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div >
        );
    }
}

export default App