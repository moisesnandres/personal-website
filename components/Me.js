import { Fragment } from "react";

function Me() {
  return (
    <Fragment>
      <img src="/static/me.jpeg" />
      <h1>Moisés Ñañez</h1>
      <p>React and ruby developer. Musician.</p>
      <style jxs>{`
        img {
          border-radius: 50%;
          width: 180px;
        }
        h1, p, img {
          margin: 20px;
        }
      `}</style>
    </Fragment>
  );
}

export default Me;
