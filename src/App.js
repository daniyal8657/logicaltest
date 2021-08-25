import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./Components/Home";
import { FetchingDataFromApi } from "./Components/DataFetch/FetchingDataFromApi";

function App() {
  return (
    <div className="App">
      <h1>ToDo :</h1>
      <Home />
      <hr />

      <FetchingDataFromApi />
    </div>
  );
}

export default App;
