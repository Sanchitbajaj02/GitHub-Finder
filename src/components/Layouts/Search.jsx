import React, { useRef } from 'react'

const Search = ({ data, setData, type }) => {
  const refVar = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()

    const formdata = new FormData(event.target)

    console.log(formdata)
    setData(refVar.current.value)
  }

  return (
    <React.Fragment>
      <form className="my-4" onSubmit={handleSubmit} method="GET">
        <div className="row">
          <div className="col-md-10 my-3">
            <div className="form-group">
              <input
                type="search"
                className="form-control"
                name="username"
                id="username"
                placeholder={`Search for ${type}`}
                ref={refVar}
                defaultValue={data}
              />
            </div>
          </div>
          <div className="col-md-2 my-3">
            <button type="submit" className="btn btn-custom-color">
              Search user
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  )
}

export default Search
