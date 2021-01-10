<script>
  import Icon  from '$components/Icon/Icon.svelte';
  import { faBrain } from '@fortawesome/free-solid-svg-icons/faBrain'
  import { faCameraRetro } from '@fortawesome/free-solid-svg-icons/faCameraRetro'
  import { faLaptopCode } from '@fortawesome/free-solid-svg-icons/faLaptopCode'
  import { faTools } from '@fortawesome/free-solid-svg-icons/faTools'
  import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons/faUserAstronaut'
  import { faRss } from '@fortawesome/free-solid-svg-icons/faRss'
</script>


<nav class="nav" role="navigation">
  <a class="link pink" href="/projects">
    <p>Projects</p>
    <Icon icon={faLaptopCode} />
  </a>
  <a class="link" href="/skills">
    <p>Skills</p>
    <Icon icon={faTools} />
  </a>
  <a class="link" href="/education">
    <p>Education</p>
    <Icon icon={faBrain} />
  </a>
  <a class="link" href="/photography">
    <p>Photography</p>
    <Icon icon={faCameraRetro} />
  </a>
  <a class="link" href="/blog">
    <p>Blog</p>
    <Icon icon={faRss} />
  </a>
  <a class="link" href="/uses">
    <p>Uses</p>
    <Icon icon={faUserAstronaut} />
  </a>
</nav>

<style>
  .nav {
    display: flex;
    gap: 3px;
    flex-wrap: wrap;
    padding: 3px;
    background: rgb(255, 0, 0);
    background: linear-gradient(
      90deg,
      rgba(255, 0, 0, 1) 0%,
      rgba(252, 253, 29, 1) 20%,
      rgba(26, 255, 0, 1) 40%,
      rgba(44, 48, 253, 1) 60%,
      rgba(253, 55, 252, 1) 80%,
      rgba(252, 69, 69, 1) 100%
    );
  }

  .link {
    display: flex;
    flex: 1 1 180px;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    color: var(--purple);
    text-transform: uppercase;
    background-color: var(--black);
    border: 0;
    outline: none;
    font-size: 0.8rem;
  }

  .link svg {
    font-size: 1.25rem;
  }

  @media only screen and (min-width: 400px) {
    .nav {
      display: flex;
      padding: 5px 0;
      gap: 5px;
      background-color: var(--black);
    }

    .link {
      flex: 1 1 381px;
    }
  }
</style>