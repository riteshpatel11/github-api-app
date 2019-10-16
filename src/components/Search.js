import React from "react";

const Search = props => {
  return (
    <div className="container">
      <section className="col s4 offset-4">
        <form action="" onSubmit={props.handleSubmit}>
          <div className="input-field">
            <input
              placeholder="Search users"
              type="text"
              onChange={props.handleChange}
            />
            <button className="btn light-blue darken-3">Search</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Search;
