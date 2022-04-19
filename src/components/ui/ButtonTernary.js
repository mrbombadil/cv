import { Link } from "react-router-dom"

export const ButtonTernary = ({url, children}) => {
  return (
    <>
        <Link to={url} target="yes" className="btn btn-ternary">{children}</Link>
    </>
  )
}
