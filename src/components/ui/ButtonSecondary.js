import { Link } from "react-router-dom"

export const ButtonSecondary = ({url, children}) => {
  return (
    <>
        <Link to={url} target="yes" className="btn btn-secondary">{children}</Link>
    </>
  )
}
