<template>
  <v-app id="app">
    <div id="app">
      <div id="nav">
        <router-link to="/">Counter</router-link>
        |
        <router-link to="/classic">Classic Counter</router-link>
        |
        <router-link to="/about">About</router-link>
      </div>

      <img src="./assets/logo.png" width="80" />
      <div id="content">
        <router-view />
      </div>
    </div>
  </v-app>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#content {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
