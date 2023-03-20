import { Link } from "react-router-dom";

export default function DemoLink() {
  return (
    <ul>
      <li>
        <Link to={`usestate`}>usestate demo</Link>
      </li>
    </ul>
  );
}
