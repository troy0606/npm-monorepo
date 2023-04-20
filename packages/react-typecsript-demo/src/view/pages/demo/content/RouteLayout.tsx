import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { TArrayGeneric, TlinkObject } from "../../../../models/types/common";
export default function RouteLayout<T extends TArrayGeneric<TlinkObject>>({
  ...props
}) {
  const linkData = props.linkData as T;
  return (
    <>
      <ul>
        {linkData.map((linkObject) => (
          <li key={linkObject.path}>
            <Link to={linkObject.path}>{linkObject.name}</Link>
          </li>
        ))}
      </ul>
      <Routes>
        {linkData.map((linkObject) => (
          <Route path={linkObject.path} element={linkObject.element} key={linkObject.path}/>
        ))}
      </Routes>
    </>
  );
}
