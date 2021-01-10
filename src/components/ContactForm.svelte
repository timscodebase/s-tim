<script>
  import { createForm } from "svelte-forms-lib";

  const encode = data =>
    Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&')

  const { form, handleChange, handleSubmit } = createForm({
    initialValues: {
      message: "",
      name: "",
      email: ""
    },
    onSubmit: values => {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', values }),
      })
        .then(() => alert('Success!'))
        .catch(error => alert(error))

      e.preventDefault()
    }
  });
</script>

<form class="form" on:submit={handleSubmit}>
  <div>
    <div>
      <label class="label" for="name">
        <p hidden>Your Name:</p>
        <input
          class="input"
          type="text"
          name="name"
          placeholder="Your Name"
          on:change={handleChange}
        />
      </label>
    </div>
    <div>
      <label
        class="padTop label"
        for="email"
      >
        <p hidden>Your Email:</p>
        <input
          class="input"
          type="email"
          name="email"
          placeholder="Your Email"
          on:change={handleChange}
        />
      </label>
    </div>
    <div>
      <label
        class="padTop label"
        for="message"
      >
        <p hidden>Message:</p>
        <textarea
          class="textarea"
          name="message"
          placeholder="Message"
          on:change={handleChange}
        />
      </label>
    </div>
  </div>
  <button class="submit" type="submit">
    Send
  </button>
</form>

<style>
  .form {
    max-width: 100vw;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 3fr 1fr;
    margin-bottom: 2rem;
  }

  .label {
    display: flex;
    justify-content: space-between;
    color: var(--white);
  }

  .padTop {
    padding-top: 0.5rem;
  }

  .form input,
  .form textarea {
    width: 100%;
  }

  .submit {
    width: 100%;
    background: var(--yellowtopurple);
    border: 0;
    outline: 0;
    padding: 0.5rem;
  }
</style>