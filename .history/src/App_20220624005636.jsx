import "./App.css";
import Header from "./components/header/header";
import MainPage from "./components/main_page/main_page";
import Popap from "./components/popap/popap";
import PopapAdvantages from "./components/popap_advantages/popap_advantages";

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Popap />
      <PopapAdvantages />
    </div>
  );
}

export default App;
