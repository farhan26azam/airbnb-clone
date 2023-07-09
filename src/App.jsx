import "./App.css";
import MainFiltersContainer from "./components/Filters/MainFiltersContainer";
import Header from "./components/Header/Header";
function App() {
  return (
    <>
      <div className="App">
        <Header />
        <MainFiltersContainer />
      </div>
    </>
  );
}

export default App;
