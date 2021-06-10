<template>
  <Layout>
    <!-- 顶部文字 -->
    <div class="hero">
      <h1 class="hero-title">{{ general.title }}</h1>
      <h2 class="hero-subtitle">{{ general.subtitle }}</h2>
    </div>

    <!-- 中间文章列表 -->
    <div class="container">
      <div class="projects">
        <div class="project" v-for="edge in $page.posts.edges" :key="edge.node.id">
          <g-link 
            :to="`/post/${edge.node.id}`"
            class="project-link"
          >
            <img 
              alt="Banana"
              :src="`http://localhost:1337${edge.node.image.url}`"
              class="thumbnail"
              width="2560"
              sizes="(max-width: 2560px) 100vw, 2560px"
            />
            <h3 class="project-title">{{edge.node.title}}</h3>
            <div class="categories">
              <span class="category">photography</span>
              <span class="category">{{ edge.node.categories }}</span>
            </div>
          </g-link>
        </div>
      </div>
    </div>

    <!-- 底部文章列表 -->
    <div>
      <div class="latest-journals-heading container">
        <span class="label">Latest and greatest</span>
      </div>
      <div class="latest-journals">
        <div class="container">
          <g-link
            v-for="edge in $page.articels.edges"
            :key="edge.node.id"
            :to="`/articel/${edge.node.id}`"
            class="journal"
            exact
          >
            <h3 class="journal-title">{{ edge.node.title }}</h3>
          </g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query {
  posts: allStrapiPost {
    edges {
      node {
        id
        title
        categories
        image {
          id
          url
        }
      }
    }
  }
  articels: allStrapiArticel {
    edges {
      node {
        id
        title
      }
    }
  }
  general: allStrapiGeneral {
    edges {
      node {
        id
        title
        subtitle
      }
    }
  }
}
</page-query>
<script>
export default {
  metaInfo: {
    title: 'Portfolio'
  },
  name: "HomePage",
  computed: {
    general () {
      return this.$page.general.edges[0].node
    }
  }
}
</script>

<style scoped>
* {
  user-select: none;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 6rem;
}
.hero {
  text-align: center;
  width: 640px;
  max-width: 100%;
  margin: 0 auto;
  padding: 9.8rem 0 8rem;
}
h1 {
  display: block;
  letter-spacing: -.01em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
h2 {
  display: block;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.hero-title {
  font-size: 3rem;
  font-weight: 700;
  padding: 0;
  margin: 0 0 2rem;
  line-height: 1.2;
}
.hero-subtitle {
  margin: 0;
  padding: 0;
  font-size: 1.15em;
  font-weight: 400;
  line-height: 1.68;
  opacity: .6;
}

.projects {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
}
.project {
  grid-column: auto / span 1;
}
.project:nth-child(3n+1) {
  grid-column: auto / span 2;
}
.thumbnail {
  height: 560px;
  -o-object-fit: cover;
  object-fit: cover;
  transition: all .15s ease;
  box-shadow: 0 0 40px -20px rgb(0 0 0 / 25%);
}
.project:hover .thumbnail {
  transform: scale(1.02);
  box-shadow: 0 20px 40px -20px rgb(0 0 0 / 25%);
}
.project-link {
  text-decoration: none;
}
img {
  max-width: 100%;
}
h3 {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.project-title {
  text-align: center;
  font-size: 1rem;
  margin: 2rem 0 1rem;
}
.categories {
  font-size: .8rem;
  text-align: center;
}
.category {
  margin-right: .8rem;
}
a {
  color: inherit;
}


.latest-journals-heading {
  margin-top: 6rem;
  margin-bottom: 1rem;
  font-size: .6rem;
  text-transform: uppercase;
}
.label {
  display: block;
  font-weight: 700;
  margin-bottom: .5rem;
}
.latest-journals {
  max-width: 100%;
  margin: 0 2rem;
  border-top: 1px solid #f3f3f3;
  border-bottom: 1px solid #f3f3f3;
}
.journals {
  margin: 0;
  max-width: 100%;
}
.journal {
  flex: 0 0 25%;
  height: 100%;
  height: 106px;
  border-right: 1px solid #f3f3f3;
  display: block;
  text-decoration: none;
  padding-top: 24px;
}
.journal:hover {
  background: #f3f3f3;
}
.journal:last-child {
  border-right: 1px solid #fff;
}
h3 {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  padding: 0 32px;
  text-align: left;
}
.journal-title {
  font-size: 1rem;
  line-height: 1.35;
}
</style>
