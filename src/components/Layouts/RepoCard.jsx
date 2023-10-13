import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'

const RepoCard = ({ repo }) => {
  return (
    <>
      <div
        className="card text-dark border-0 shadow"
        style={{ height: '100%' }}
      >
        <div className="card-body">
          <h4 className="card-title mb-3">
            <a
              href={repo?.html_url}
              target="_blank"
              title={repo?.name}
              rel="noopener noreferrer"
              className=" link-hover"
            >
              <FaLink size={20} /> {repo?.name}
            </a>
          </h4>
          {repo?.description && (
            <p className="card-text text-dark">{repo?.description}</p>
          )}

          <div>
            <span
              className="badge me-2 text-dark fs-6 d-inline-flex align-items-center"
              style={{ backgroundColor: '#3ABFF8' }}
            >
              <FaEye size={15} className="me-2" /> {repo?.watchers_count}
            </span>
            <span
              className="badge me-2 text-dark fs-6 d-inline-flex align-items-center"
              style={{ backgroundColor: '#36D399' }}
            >
              <FaStar size={15} className="me-2" /> {repo?.stargazers_count}
            </span>
            <span
              className="badge me-2 text-dark fs-6 d-inline-flex align-items-center"
              style={{ backgroundColor: '#F87272' }}
            >
              <FaInfo size={15} className="me-2" /> {repo?.open_issues}
            </span>
            <span
              className="badge me-2 text-dark fs-6 d-inline-flex align-items-center"
              style={{ backgroundColor: '#FBBD23' }}
            >
              <FaUtensils size={15} className="me-2" /> {repo?.forks}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default RepoCard

/*
style={{
          // backgroundColor: "rgb(31, 41, 55)"
          backgroundColor: "#2A303C",
        }}
*/
