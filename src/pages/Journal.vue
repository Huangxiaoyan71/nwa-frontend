<template>
  <Layout>
    <div class="container">
        <div class="journal-hero">
            <h1 class="journal-header">a wise person once said...</h1>
        </div>
    </div>
    <g-link href="/journal/gridsome-forestry-cms/" class="journal-post">
        <div class="journal">
            <h2 class="journal-title">Gridsome with Forestry CMS</h2>
            <p class="journal-excerpt">Get up and running with Forestry CMS, a git-backed headless CMS with a slick editing interface.</p>
        </div>
    </g-link>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Journal'
  }
}
</script>
<style scoped>
a {
    text-decoration: none;
}
.container {
    max-width: 1200px;
    padding: 0 6rem;
}
.journal-hero {
    padding: 10rem 0;
    margin: 0 auto;
    color: #f3f3f3;
}
.journal-header {
    font-size: 3rem;
    font-weight: 700;
    padding: 0;
    margin: 0;
}
h1 {
    letter-spacing: -.01em;
}
.journal-post {
    padding: 5rem 0;
    text-align: left;

}
.journal {
    max-width: 540px;
    margin: 0 auto;
}
.journal-post > * {
    transition: transform .5s ease;
}
.journal-post h1, .journal-post h2 {
    margin: 0;
    padding: 0;
}
.journal-title {
    font-size: 2rem;
    color: #000;
}
.journal-excerpt {
    color: #2b2b2b;
}
p {
    line-height: 1.5;
    font-size: 1.15rem;
}
</style>