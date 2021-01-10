<script>
  import Icon  from '$components/Icon/Icon.svelte';
  import Nav from '$components/Nav.svelte';
  import Separator from '$components/Separator.svelte';
  import { faCodepen, faDev, faGithub } from '@fortawesome/free-brands-svg-icons'
</script>

<main>
  <header class="secondaryHeader">
    <section>
      <a href="/">
        <h1 class="h1">Tim Smith</h1>
      </a>
      <div class="carousel">
        <div class="inner">
          <div class="element">Web Developer</div>
          <div class="element">Photographer</div>
          <div class="element">Writer</div>
          <div class="element">Artist</div>
        </div>
      </div>
    </section>
    <div class="socialIcons">
      <a
        href="https://codepen.io/WebRuin"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Icon icon={faCodepen} />
      </a>
      <a
        href="https://dev.to/tithos"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Icon icon={faDev} />
      </a>
      <a
        href="https://github.com/timscodebase"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Icon icon={faGithub} />
      </a>
    </div>
  </header>
  <Separator />
  <Nav />
</main>

<style>
  .secondaryHeader {
    display: flex;
    justify-content: space-between;
    padding: var(--padding);
    background: rgb(255, 248, 0);
    background: var(--yellowtopurple);
  }

  .h1 {
    font-size: 2.5rem;
    background: var(--redtoblue);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: var(--black);
  }

  .socialIcons {
    width: 160px;
    margin: 0 0 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .socialIcons a {
    color: var(--white);
    padding: 0 1rem;
    font-size: 1.5rem;
  }

  .carousel {
    overflow: hidden;
    display: flex;
    justify-self: end;
    vertical-align: top;
    height: 32px;
    margin: 0;
    font-size: 1.75rem;
  }
  .inner {
    margin-left: auto;
    animation: scroll 5s ease-in-out infinite;
  }
  .element {
    font-size: 1.1em;
    text-shadow: 0px 2px 2px #fba09d;
  }

  @keyframes scroll {
    0%,
    20% {
      transform: translateY(-10px);
    }
    25%,
    45% {
      transform: translateY(-58px);
    }
    50%,
    70% {
      transform: translateY(-100px);
    }
    75%,
    95% {
      transform: translateY(-144px);
    }
    100% {
      transform: translateY(-130px);
    }
  }
</style>