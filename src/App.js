import "./App.css";
import DataList from "./component/DataList";
import FormBox from "./component/FormBox";

function App() {
  return (
    <>
      <div className="container App">
        <h2 className="mb-4">CGPA Calculaor</h2>
        <FormBox />
        <DataList />
      </div>
      <footer>
        Developed by{" "}
        <a href="https://rashed-abir.web.app/" target="_blank" rel="noreferrer">
          Rashed Abir
        </a>
      </footer>
    </>
  );
}

export default App;
