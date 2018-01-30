/////////////////////////////////////////////// /* Import Stock React Components */ ////////////////////////////////////////////////////////
import React, {Component} from "react";
/////////////////////////////////////////////// /* Components */ ////////////////////////////////////////////////////////
import API from "../../utils/API"

class Home extends Component {

  state = {

  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchArticles("Donald");
  }

  searchArticles = query => {
    API.search(query).then(res => {
      console.log(res);
      this.setState({result: res.data})
    }).catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = event =>{
    event.preventDefault();


  }


  render() {
    return (

      <React.Fragment>

        <div className="container">
          <form role="col 12">

            <div className="row">
              <div className="input-field col s12">
                <label for="search">Search Term:</label>
                <input type="text" className="form-control" id="search-term" value={this.state.title} onChange={this.handleInputChange} name="title" placeholder="Title (required)"/>
              </div>
            </div>

            <div className="row">
              <div class="input-field col s12">
                <select id="num-records-select">
                  <option value="" disabled selected> Choose your option </option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                  <option value="1">Option 4</option>
                  <option value="2">Option 5</option>
                  <option value="3">Option 6</option>
                  <option value="1">Option 7</option>
                  <option value="2">Option 8</option>
                  <option value="3">Option 9</option>
                  <option value="3">Option 10</option>
                </select>
                <label>Number of Articles to Render</label>
              </div>
            </div>

            <div className="row">
              <div className="col s6">
                <label for="start-year">Start Year (Optional):</label>
                <input type="text" className="form-control" id="start-year" value={this.state.startYear} onChange={this.handleInputChange} name="author" placeholder="Author (required)/>
              </div>
              <div className="col s6">
                <label for="end-year">End Year (Optional):</label>
                <input type="text" className="form-control" id="end-year" value={this.state.startYear} onChange={this.handleInputChange} name="author" placeholder="Author (required)/>
              </div>
            </div>

            <button type="submit" className="btn btn-default" id="run-search" onClick={this.handleFormSubmit}>
              <i className="fa fa-search"></i>
              Search
            </button>
          </form>

      </div>
    </React.Fragment>);
  } // End of Render
} // End of Class

export default Home;
