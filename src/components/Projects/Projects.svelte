<script context="module">
  import client from '../sanityClient'
  import generateImage from '../generateImage'

	export async function preload({ params }) {
		const GROQ_QUERY = `
			*[_type == 'project'][0]{
        description
        link
        gitLink
        image {..., asset->}
        title
			}
		`

		const data = await client
			.fetch(GROQ_QUERY)
      .catch((err) => this.error(500, err))
      
    console.log(data);

		// Transform the image data
		data.image = generateImage(data.image)

		return { data }
	}
</script>

<script>
  import Project from '$components/Projects/Project'

  export let data;
</script>

<div class="projectsWrapper">
  <h1>Projects</h1>
  <div class="projectsGrid">
    {#each data as project}
      <Project {...project} />
    {/each}
  </div>
</div>

<style>
  .projectsWrapper {
    background-color: var(--black);
    padding: 0.5rem var(--padding) 1rem var(--padding);
  }

  .projectsWrapper h1 {
    font-size: 3rem;
    background: var(--purpletoyellow);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .projectsGrid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 0 -2rem;
  }
</style>