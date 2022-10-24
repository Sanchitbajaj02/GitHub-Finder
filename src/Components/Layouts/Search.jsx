import React, { useRef } from "react";

const Search = ({ username, setUsername }) => {
  const refVar = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername(refVar.current.value);
  };

  return (
    <React.Fragment>
      <form className="my-5" onSubmit={handleSubmit} method="GET">
        <div className="row">
          <div className="col-md-9 my-3">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="username"
                id="username"
                placeholder="Enter github username"
                ref={refVar}
              />
            </div>
          </div>
          <div className="col-md-3 my-3">
            <button className="btn btn-custom-color">Submit</button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Search;
