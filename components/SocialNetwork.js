function SocialNetWork({ link, icon, name }) {
  return (
    <li>
      <a target="_blank" href={link}>
        <div>
          <i className={`fab fa-${icon}`} />
        </div>
        <h4>{name}</h4>
      </a>
      <style jsx>{`
        a {
          display: block;
          padding: 1em;
          transition: opacity 0.6s ease-in-out;
        }
        a:hover {
          opacity: 0.5;
        }
        div {
          font-size: 1.3em;
        }
        h4 {
          margin: 0.7em 0 0;
        }
        li {
          text-align: center;
        }
      `}</style>
    </li>
  );
}

export default SocialNetWork;
