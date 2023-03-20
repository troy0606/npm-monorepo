import "./App.css";
import store from "../redux/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Error from "../view/pages/error";
import LoadingEffect from "../view/pages/loading_effect";
import FormValidate from "../view/pages/form_validate";
import Root from "../routes/root";
import Demo from "./pages/demo";

// TODO: 幫router 配置找家
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "loading_effect",
        element: <LoadingEffect />,
      },
      {
        path: "form_validate",
        element: <FormValidate />,
      },
      {
        path: "demo/*",
        element: <Demo />,
      }
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
