import Layout from "../layouts/Main";
import Me from "../components/Me";
import SocialNetwork from "../components/SocialNetwork";

export default () => (
  <Layout>
    <div>
      <Me />
      <ul>
        <SocialNetwork
          link="https://github.com/moisesnandres"
          icon="github"
          name="GitHub"
        />
        <SocialNetwork
          link="https://linkedin.com/in/moisesnandres"
          icon="linkedin-in"
          name="LinkedIn"
        />
        <SocialNetwork
          link="https://twitter.com/moisesnandres"
          icon="twitter"
          name="Twitter"
        />
      </ul>
    </div>
    <style jsx>{`
      ul {
        align-self: normal
        display: grid;
        grid-gap: 1em;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        margin: 20px;
      }
      div {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 100vh;
      }
    `}</style>
  </Layout>
);
