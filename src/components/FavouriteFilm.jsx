import React from "react";


class FavouriteFilm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      poster: "",
      comment: ""
    };

    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm(e) {
    e.preventDefault();

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    };

    const url = "https://post-a-form.herokuapp.com/api/movies/";

    fetch(url, config)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          alert(data.error);
        } else {
          alert(`Movie has been successfully added!`);
        }
      })
      .catch(e => {
        console.error(e);
        alert("There was an error when adding the movie");
      });
  }

  render() {

    return (
      <div className="movieForm">
        <h1>Movie</h1>
        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>My Movie</legend>
            <div className="form-data">
              <label htmlFor="filmName">Movie</label>
              <input
                type="text"
                id="title"
                name="title"
                value={this.state.title}
                onChange={this.onChange}
              />
            </div>

            <div className="form-data">
              <label htmlFor="poster">Poster</label>
              <input
                type="text"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={this.state.poster}
              />
            </div>

            <div className="form-data">
              <label htmlFor="comment">Comment</label>
              <textarea
                type="text"
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.comment}
              />
            </div>

            <div className="form-data">
              <input type="submit" value="Send" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
export default FavouriteFilm