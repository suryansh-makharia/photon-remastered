import React from "react";

class SearchBar extends React.Component {
  state = { term: '' };
  onFormSubmit = (e) => {
      e.preventDefault();
      this.props.onSubmit(this.state.term);
  }
  render() {
    return (
      <div className="ui segment">
        <h1 style={{textAlign: 'center'}}>Photo-on v2.0</h1>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field ui action input" style={{display: 'flex', justifyContent: 'center'}}>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({term: e.target.value})}
              style={{width: '40vw', fontSize: '1.2rem'}}
              placeholder="Search for images"
            />
            <button className="ui icon button" style={{ outline: 'none', background: '#000f66'}}><i className="search icon" style={{color: 'white'}}></i></button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
