<template>
    <Layout>
        
    </Layout>
</template>

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

</style>