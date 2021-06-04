<template>
  <div class="layout">
    <header class="header">
      <div class="container">
        <div class="left">
          <a href="/" class="home-link active"><img src="/img/logo.svg" alt="Nichlas W. Andersen" class="logo" /></a>
        </div>
        <nav class="nav right">
          <a href="/journal" aria-current="page" class="nav__link active--exact active">Journal</a>
          <a href="/contact" class="nav__link">Say Hi!</a>
        </nav>
      </div>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
