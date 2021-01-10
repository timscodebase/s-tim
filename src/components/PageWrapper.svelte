<script>
  import Header from '$components/Header.svelte';
  import Footer from '$components/Footer.svelte';
  import Separator from '$components/Separator.svelte';
</script>

<div class="bodyWrapper">
  <Header />
  <Separator />
    <slot></slot>
  <Footer />
</div>

<style>
  .bodyWrapper {
    width: 1200px;
    margin: 0 auto;
    overflow-y: hidden;
    box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.75);
  }

  @media only screen and (max-width: 1200px) {
    .bodyWrapper {
      max-width: 100vw;
      margin: 0;
    }
  }
</style>