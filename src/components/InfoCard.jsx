export function Infocard({ datos, datoUser }) {
  const fecha = () => {
    const n = new Date(datoUser?.created_at).toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    return n.split(",").slice(1).join("");
  };

  return (
    <div className="info" style={{ background: datos.form }}>
      <section className="name">
        <img src={datoUser?.avatar_url} alt="avatar user of github" />
        <div className="login">
          <h2>{datoUser?.name ? datoUser.name : `The ${datoUser?.login}`}</h2>
          <strong>@{datoUser?.login}</strong>
          <p className="fecha">Joined {fecha()}</p>
        </div>
      </section>
      <p className="bio">{datoUser?.bio ? datoUser?.bio : "Not avalible"}</p>
      <section style={{ background: datos.body }} className="counter">
        <div>
          <span>Repos</span>
          <span className="numbers">{datoUser?.public_repos}</span>
        </div>
        <div>
          <span>Followers</span>
          <span className="numbers">{datoUser?.followers}</span>
        </div>
        <div>
          <span>Following</span>
          <span className="numbers">{datoUser?.following}</span>
        </div>
      </section>
      <footer className="info-red">
        <span style={!datoUser?.location ? { opacity: 0.5 } : null}>
          <img src="./img/icon-location.svg" alt="" />
          {datoUser?.location ? datoUser?.location : "Not Available"}
        </span>
        <span style={!datoUser?.twitter_username ? { opacity: 0.5 } : null}>
          <img src="./img/icon-twitter.svg" alt="" />
          <a style={{ color: datos.colors }} href={datoUser?.twitter_username}>
            {datoUser?.twitter_username
              ? datoUser?.twitter_username
              : "Not Available"}
          </a>
        </span>
        <span
          className="blog"
          style={!datoUser?.blog ? { opacity: 0.5 } : null}
        >
          <img src="./img/icon-website.svg" alt="" />
          <a style={{ color: datos.colors }} href={datoUser?.blog}>
            {datoUser?.blog ? datoUser?.blog : "Not Available"}
          </a>
        </span>
        <span style={!datoUser?.company ? { opacity: 0.5 } : null}>
          <img src="./img/icon-company.svg" alt="" />
          {datoUser?.company ? datoUser?.company : "Not Available"}
        </span>
      </footer>
    </div>
  );
}
