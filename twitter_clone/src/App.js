import { Home } from "./Home";
import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get("http://localhost:5000/user").then((res) => {
      dispatch({ type: "USER", newTweets: res.data[0] });
    });
    axios.get("http://localhost:5000/posts").then((res) => {
      dispatch({ type: "INIT", newTweets: res.data.reverse() });
    });
  }, [dispatch]);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
