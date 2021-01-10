<script>
  import cssVars from 'svelte-css-vars';
	import urlFor from '../sanityImageUrlBuilder'
  export let project;

  const {
    description,
    link,
    gitLink,
    image,
    title
  } = project;
  
  $: styleVars = {
    cssImage: urlFor(image),
  };
</script>

<div class="project" use:cssVars="{styleVars}">
  <section class="titles">
    <h3>{title}</h3>
    <h4>Description</h4>
  </section>
  <p>{description}</p>
  <section class="footer">
    <div class="links">
      <a href={link} target="_blank" rel="noopener noreferrer">
        Project Link
      </a>
      <a href={gitLink} target="_blank" rel="noopener noreferrer">
        GitHub Link
      </a>
    </div>
  </section>
</div>

<style>
  .projects {
    flex: 1 1 195px;
    padding: 1rem;
    background: var(--transtodarkblue);
    background-image: var(--cssImage);
    background-size: cover;
    margin-bottom: 5px;
  }

  h3 {
    color: var(--purple);
    text-shadow: 0px 0px 4px var(--black);
  }

  .links {
    display: flex;
    margin-top: 1rem;
    justify-content: space-between;
  }
  .links a {
    display: inline-block;
    padding: 5px 10px;
    border-radius: 20px;
    background: var(--purpletoyellow);
  }
  .links a,
  .links a:hover,
  .links a:visited {
    color: var(--black);
  }
</style>