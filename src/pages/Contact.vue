<template>
  <Layout>
    <div class="container">
      <div class="contact-header">
        <h1 class="contact-title">Say hi!</h1>
        <p>Leave me a note with any questions you might have, I'll get back to you as soon as possible.</p>
      </div>
    </div>
    <div class="container">
      <form name="contact" class="contact-form">
        <div class="sender-info">
          <div class="sender-box">
            <label for="name" class="label">Your name</label>
            <input type="text" name="name" v-model="form.name" required>
          </div>
          <div class="sender-box">
            <label for="email" class="label">Your email</label>
            <input type="email" name="email" v-model="form.email" required>
          </div>
        </div>
        <div class="message">
          <label for="message" class="label">Message</label>
          <textarea name="message" v-model="form.message" required></textarea>
        </div>
        <button class="button" @click.prevent="onSubmit()">Submit</button>
      </form>
    </div>
  </Layout>
</template>

<script>
import axios from 'axios';

export default {
  metaInfo: {
    title: 'Contact'
  },
  name: 'ContactPage',
  data () {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    async onSubmit () {
      const { data } = await axios({
        method: 'POST',
        url: `${GRIDSOME_API_URL}/contacts`,
        data: this.form
      })
    }
  },
}
</script>
<style scoped>
.contact-header {
  padding: 6rem 0 4rem;
}
.contact-title {
  font-size: 4rem;
  margin: 0 0 4rem;
  padding: 0;
}
h1 {
  letter-spacing: -.01em;
}
p {
  line-height: 1.5;
  font-size: 1.15rem;
}
form {
  display: block;
  width: 100%;
}
.sender-info {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}
.sender-box {
  flex: 1;
  margin-right: 4rem;
}
.label {
  display: block;
  font-weight: 700;
  margin-bottom: .5rem;
}
input, textarea {
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  appearance: auto;
  cursor: text;
  margin: 0em;
  font: 400 13.3333px Arial;
  border-width: 2px;
  border-style: inset;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  border-image: initial;
  background: transparent;
  border: 1px solid #f3f3f3;
  outline: none;
  border-radius: .3rem;
  padding: .8rem 1rem;
  color: inherit;
  font-size: 1rem;
  width: 100%;
}
textarea {
  background: transparent;
  resize: none;
  height: 140px;
  width: 93.6%;
}
.button {
  color: #fff;
  background: #000;
  outline: none;
  border: 0;
  font-size: .8rem;
  padding: .8rem 1.6rem;
  border-radius: .3rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: opacity .25s ease;
  letter-spacing: .035em;
}
</style>