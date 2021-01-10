<script>
  import ContactForm from '$components/ContactForm.svelte';
  import Separator from '$components/Separator.svelte';
  import Icon  from '$components/Icon/Icon.svelte';


  import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
  import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
  import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
  import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
  import { faDev } from '@fortawesome/free-brands-svg-icons/faDev'
  import { faCodepen } from '@fortawesome/free-brands-svg-icons/faCodepen'

  const year = new Date().getFullYear()
</script>

<Separator />
<footer class="footer">
  <section>
    <h3>Contact Me</h3>
    <ContactForm />
  </section>
  <section>
    <div class="hide">
      <Separator fullBleed />
    </div>
    <div class="socialLinks">
      <a
        href="https://www.facebook.com/tim.smith/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Icon data={faFacebook} />
      </a>
      <a
        href="https://twitter.com/timsmith23"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Icon data={faTwitter} />
      </a>
      <a
        href="https://www.instagram.com/tithos/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Icon data={faInstagram} />
      </a>
      <a
        href="https://dev.to/tithos"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Icon data={faDev} />
      </a>
      <a
        href="https://github.com/timscodebase"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Icon data={faGithub} />
      </a>
      <a
        href="https://codepen.io/WebRuin"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Icon data={faCodepen} />
      </a>
    </div>
    <div class="signOff">
      <p>
        <a href="https://timsmith.tech">timsmith.tech</a> &copy; {year}
      </p>
      <p>Made with &#129505;</p>
    </div>
  </section>
</footer>

<style>
  .footer {
    flex-wrap: wrap;
    background-color: var(--black);
    padding: var(--padding);
    padding-top: 1rem;
  }

  .footer section {
    flex: 1 550px;
  }

  .footer a,
  .footer:visited {
    color: var(--red);
  }
  .footer a:hover {
    color: var(--orange);
  }

  .footer h3 {
    font-size: 2rem;
    font-weight: 300;
    font-family: 'Raleway', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    color: var(--purple);
  }

  .socialLinks {
    max-width: 360px;
    display: flex;
    justify-content: space-between;
    font-size: 2rem;
    padding: 1rem 0;
    margin: 0 auto;
  }

  .signOff {
    color: var(--white);
    padding: 1rem 0;
    text-align: center;
  }

  .hide {
    display: block;
  }

  @media (min-width: 1024px) {
    .footer {
      display: flex;
    }
    .hide {
      display: none;
    }

    .socialLinks {
      padding-top: 10%;
    }
  }
</style>