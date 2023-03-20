import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div id="sidebar">
      <h1>React Router Contacts</h1>
      <nav>
        <ul>
          <li>
            <Link to={`loading_effect`}>Loading Effect</Link>
          </li>
          <li>
            <Link to={`form_validate`}>Form Validate</Link>
          </li>
          <li>
            <Link to={`demo`}>Demo</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
