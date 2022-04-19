import { Link } from "react-router-dom"

export const ButtonPrimary = ({url, children}) => {
  return (
    <>
        <Link to={url} target="yes" className="btn btn-primary">{children}</Link>
    </>
  )
}
