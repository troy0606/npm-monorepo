import { Link } from "react-router-dom";

export default function DemoLink<T>(linkData: T) {
  return (
    <ul>
      {linkData.map((linkObject) => (
        <li>
          <Link to={`usestate`}>useState demo</Link>
        </li>
      ))}
    </ul>
  );
}
