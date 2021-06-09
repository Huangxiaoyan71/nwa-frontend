<template>
  <div class="layout">
    <header class="header sticky">
      <div class="container">
        <div class="left">
          <g-link to="/" class="home-link" exact>
            <img src="/img/logo.svg" alt="Nichlas W. Andersen" class="logo" />
          </g-link>
        </div>
        <nav class="nav right">
          <g-link to="/journal" aria-current="page" class="nav__link">Journal</g-link>
          <g-link to="/contact" class="nav__link">Say Hi!</g-link>
        </nav>
      </div>
    </header>
    <slot/>
    <!-- 页尾 -->
    <footer class="footer">
      <div class="container">
        <span>Copyright © 2021</span>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style scoped>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.header {
  height: 6rem;
  z-index: 10;
}
.nav {
  font-size: .9rem;
  font-weight: 600;
  text-decoration: none;
  margin-top: 4px;
  padding-bottom: 4px;
  border-bottom: 1px solid;
  border-color: transparent;
  transition: border .15s;
}
.nav a:hover, .active {
    padding-bottom: 4px;
    border-bottom: 1px solid #000;
    transition: border .15s;
}
.nav a {
  color: inherit;
  text-decoration: none;
  margin: 4px 0 0 48px;
}
.home-link {
  text-decoration: none !important;
}
.logo {
  height: 1.5rem;
}
img {
  max-width: 100%;
}
.footer {
  font-size: .8rem;
  padding: 6rem 0;
}
</style>
