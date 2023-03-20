import { useRouteError } from "react-router-dom";
import SideBar from "../../components/SideBar";

export default function Index() {
  const error = useRouteError() as any;
  console.error(error);

  return (
    <>
      <SideBar />
      <div id="detail">
        <div id="error-page">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
    </>
  );
}
