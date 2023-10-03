import { useState } from "react";
import { userData } from "../service/apiUser";

export function Search({ datos, nameUser }) {
  const [user, setUser] = useState();
  const [noFont, setNotfont] = useState(false);
  const handleWordUse = (e) => {
    setUser(e.target.value);
  };

  const handleOnlead = async () => {
    if (!user) {
      const n = await userData("octocat");
      nameUser(n);
    }
  };

  const handleSearchUser = async () => {
    const n = await userData(user);
    if (n.message === "Not Found") {
      setNotfont(true);
    } else {
      nameUser(n);
    }
  };

  return (
    <div
      onLoad={handleOnlead}
      style={{ background: datos.form }}
      className="search-user"
    >
      <img src="./img/icon-search.svg" alt="icon search" />
      <input
        onChange={handleWordUse}
        onFocus={() => setNotfont(false)}
        style={{ color: datos.colors }}
        type="text"
        placeholder="Search GitHub username..."
      />
      <span
        style={noFont ? { display: "initial" } : { display: "none" }}
        className="no-result"
      >
        No results
      </span>
      <button onClick={handleSearchUser} style={{ color: "white" }}>
        Search
      </button>
    </div>
  );
}
