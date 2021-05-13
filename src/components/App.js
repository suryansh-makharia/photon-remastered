import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
class App extends React.Component {
    state = { images: [] };
     onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
            
        });
        this.setState({images : response.data.results});
    }
    render(){
    return (
        <div className="ui container" style={{margin: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
            <div style={{paddingBottom: '10px'}}>Found: {this.state.images.length} results.</div>
            <ImageList images={this.state.images}/>
        </div>
    )
  }
}
 

export default App;