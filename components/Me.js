import { Fragment } from 'react';

export default () => (
  <Fragment>
    <img src="/static/me.jpg"/>
    <h1>Moisés Ñañez</h1>
    <p>Software developer at <a href="https://devacademy.la/" target="_blank">devAcademy</a> and musician.</p>
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
)
