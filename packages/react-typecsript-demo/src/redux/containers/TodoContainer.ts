import { connect } from "react-redux";
import TodoList from "../../view/components/TodoList";
import { RootState } from "../store";

const mapStateToProps = (state: RootState) => {
};

export default connect(mapStateToProps, {})(TodoList);
