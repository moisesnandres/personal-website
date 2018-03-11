export default ({ link, icon, name}) => (
  <li>
    <a target='_blank' href={link}>
      <div>
        <i className={`fab fa-${icon}`}/>
      </div>
      <h4>{name}</h4>
    </a>
    <style jsx>{`
      a {
        display: block;
        padding: 1em;
        transition: opacity .6s ease-in-out;
      }
      a:hover {
        opacity: .5;
      }
      div {
        font-size: 1.3em;
      }
      h4 {
        margin: .7em 0 0;
      }
      li {
        text-align: center;
      }
    `}</style>
  </li>
)
