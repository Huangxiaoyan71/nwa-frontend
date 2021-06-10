<template>
    <Layout>
        <div class="container">
            <div class="project-header">
                <h1 class="project-title">{{ $page.articel.title }}</h1>
                <div class="project-info">
                    <div class="categories-container">
                        <div class="categories">
                            <span class="label">Categories</span>
                            <span class="category">photography</span>
                            <span class="category">{{ $page.articel.categories }}</span>
                        </div>
                    </div>
                    <div class="year-container">
                        <span class="label">Year</span>
                        <div>2019</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <img :src="`${GRIDSOME_API_URL}${$page.articel.image.url}`" alt="">
        </div>
        <div class="container">
            <div class="content" v-if="$page.articel.content" v-html="md2Html($page.articel.content)" />
        </div>
    </Layout>
</template>

<page-query>
query ($id: ID!) {
    articel: strapiPost (id: $id) {
        id
        auth
        title
        image {
            url
        }
    }
}
</page-query>

<script>
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt();

export default {
    name: "PostPage",
    methods: {
        md2Html (markdown) {
            return md.render(markdown);
        }
    }
}
</script>

<style>
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 6rem;
}
.project-header {
    padding: 20vh 0 4rem;
}
.project-title {
    font-size: 4rem;
    margin: 0 0 4rem;
    padding: 0;
}
h1 {
    letter-spacing: -.01em;
}
.project-info {
    display: flex;
    flex-wrap: wrap;
    font-size: .8rem;
}
.project-info > div {
    margin-right: 4rem;
}
.label {
    display: block;
    font-weight: 700;
    margin-bottom: .5rem;
}
</style>