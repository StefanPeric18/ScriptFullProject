<template>
  <div id="app">
    <div>
        <b-navbar toggleable="sm" type="dark" variant="info">
     
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            
          <b-navbar-nav class="ml-auto">
            <b-nav-item  to="/register">Register</b-nav-item>
            <b-nav-item to="/login">Log In</b-nav-item>   
          </b-navbar-nav>
            
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
