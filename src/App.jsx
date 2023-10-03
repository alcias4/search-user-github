import { useState } from "react";
import { Infocard } from "./components/InfoCard";
import { Search } from "./components/Search";
import dato from "./themes/dark.json";

import "./App.css";

function App() {
  const [datos, setDatos] = useState(dato.Dark);
  const [themes, setThemes] = useState(false);
  const [datoUser, setDatoUser] = useState();

  const handleThemes = () => {
    setThemes(!themes);
    themes ? setDatos(dato.Dark) : setDatos(dato.Light);
  };

  const nameUser = (e) => {
    setDatoUser(e);
  };

  return (
    <>
      <main style={{ background: datos.body, color: datos.colors }}>
        <section className="form">
          <menu className="themes">
            <h1>devfinder</h1>
            <button style={{ color: datos.colors }} onClick={handleThemes}>
              {datos.font}
              <img src={datos.iconSvg} alt="icon themes" />
            </button>
          </menu>
          <Search datos={datos} nameUser={nameUser} />
          <Infocard datos={datos} datoUser={datoUser} />
        </section>
      </main>
    </>
  );
}

export default App;
