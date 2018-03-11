import Layout from '../layouts/Main';
import SocialNetwork from '../components/SocialNetwork';

export default () => (
  <Layout>
    <ul>
      <SocialNetwork link="https://github.com/moisesnandres" icon="github" name="GitHub" />
      <SocialNetwork link="https://linkedin.com/in/moisesnandres/" icon="linkedin-in" name="LinkedIn" />
      <SocialNetwork link="https://medium.com/@moisesnandres" icon="medium-m" name="Medium" />
      <SocialNetwork link="https://twitter.com/moisesnandres" icon="twitter" name="Twitter" />
      <SocialNetwork link="https://instagram.com/moisesnandres" icon="instagram" name="Instagram" />
    </ul>
    <style jsx>{`
      ul {
        display: grid;
        grid-template-columns: repeat(5, 100px);
        grid-gap: 1em;
      }
    `}</style>
  </Layout>
)
