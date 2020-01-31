import Link from "next/link";
import Layout from "../layouts/Main";

function Basecamp() {
  return (
    <Layout>
      <section>
        <h1>Hello, Basecampers!</h1>
        <p>
          My name is Moisés Ñañez. I have been following your work since I
          started using your product in my previous job.
        </p>
        <p>
          Last year, I was wondering if basecamp was going to open a position
          for a backend or frontend developer any time soon. Last week, I came
          across Jason’s tweet about this programmer position, which, as you can
          tell, is the opportunity I had been looking for.
        </p>
        <h3>What will I do at Basecamp?</h3>
        <p>
          I saw that you moved Turbolinks from CoffeeScript to TypeScript, so
          one of my responsibilities as a programmer will be helping to port
          Trix to TypeScript to unify the front-end framework stack. Also, I
          will bring ideas to work closely with the design team and collaborate
          with our open source frameworks not only with Javascript, but also
          Ruby.
        </p>
        <h3>What Basecamp will do for me?</h3>
        <p>
          You will rely on me to do the things I love: coding and music. We will
          work and learn together.
        </p>
        <h3>
          <Link href="/">About me</Link>
        </h3>
        <p>
          My background includes 4+ years developing applications using RoR. The
          last couple of years I have been migrating applications to React and
          using JSONAPI. I am taking violin classes again to apply for the
          National Youth Symphony Orchestra of Peru.
        </p>
        <p>
          Thanks for your time and consideration. I would be more than thrilled
          to be a part of your team.
        </p>
      </section>
    </Layout>
  );
}

export default Basecamp;
