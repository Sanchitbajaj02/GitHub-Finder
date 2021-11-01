import React, { useState } from "react";

const Search = () => {
  const [username, setUsername] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setUsername(value);
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    window.sessionStorage.setItem("username", username);
    event.target.reset();
  };
  return (
    <React.Fragment>
      <form className="my-5" onSubmit={handleSubmit} method="get">
        <div className="row">
          <div className="col-md-9">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="username"
                id="username"
                placeholder="Enter github username"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-3">
            <button className="btn btn-custom-color">Submit</button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Search;
