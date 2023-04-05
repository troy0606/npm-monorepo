import { Link } from "react-router-dom";

export default function DemoLink() {
  return (
    <ul>
      <li>
        <Link to={`usestate`}>useState demo</Link>
      </li>
      <li>
        <Link to={`useeffect`}>useEffect demo</Link>
      </li>
      <li>
        <Link to={`useref`}>useRef demo</Link>
      </li>
    </ul>
  );
}
