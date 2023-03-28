import "./App.css";
import { Link } from "react-router-dom";
import CardComposant from "./Components/card";

function App() {
  return (
    <div className="App">
      <div className="box">
        <CardComposant
          titre="Recette"
          subTitle="Donnez une seconde vie à vos ingrédients oubliés"
        />
      </div>

      <nav>
        <ul>
          <li>
            <Link to={`food`}>Food</Link>
          </li>
          <li>
            <Link to={`ingredients`}>Ingrediens</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
