<template>
  <Layout>
    <div class="container">
        <div class="journal-hero">
            <h1 class="journal-header">a wise person once said...</h1>
        </div>
    </div>
    <g-link
        :to="`/articel/${edge.node.id}`"
        class="journal-post"
        v-for="edge in $page.articels.edges"
        :key="edge.node.id"
    >
        <div class="journal">
            <h2 class="journal-title">{{ edge.node.title }}</h2>
            <p class="journal-excerpt">{{ edge.node.subtitle }}</p>
        </div>
    </g-link>
    <div class="container">
        <pager :info="$page.articels.pageInfo" class="pager" />
    </div>
  </Layout>
</template>
<page-query>
query ($page: Int) {
    articels: allStrapiArticel (perPage: 10, page: $page) @paginate {
        pageInfo {
            totalPages
            currentPage
        }
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
import { Pager } from 'gridsome';

export default {
  metaInfo: {
    title: 'Journal'
  },
  name: 'JournalPage',
  components: {
      Pager
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
    padding: 10rem 0 3rem 0;
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
    width: 100%;
    display: inline-block;
    padding: 5rem 0;
    text-align: left;
}
.journal-post:hover {
    background-color: #f3f3f3;
}
.journal-post:hover .journal {
    width: 550px;

}
.journal {
    width: 570px;
    margin: 0 auto;
}
.journal-post > * {
    transition: transform .5s ease;
    transition-property: transform;
    transition-duration: 0.5s;
    transition-timing-function: ease;
    transition-delay: 0s;
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
    line-height: 1.4;
    font-size: 1.15rem;
}
.pager {
    text-align: right;
}
.pager > a{
    color: #000;
    padding: 0 16px;
}
.pager > .active {
    border-bottom: none;
}
</style>