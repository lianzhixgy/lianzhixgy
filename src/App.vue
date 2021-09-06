<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/vue3d">Vue3d</router-link> |
    <router-link to="/audio">Audio</router-link> |
    <router-link to="/vuethreejs">VueThreeJs</router-link> |
    <router-link to="/zhangapp">ZhangApp</router-link> |
    <router-link to="/test">test</router-link> |
    <router-link to="/elestyle">elestyle</router-link> |
    <router-link to="/zhangapptwo">zhangapptwo</router-link> |
    <router-link to="/test01">test01</router-link> |
    <router-link to="/autocanvas">autocanvas</router-link> |
    <router-link to="/testarr">testarr</router-link> |
    <router-link to="/motorspeed">MotorSpeed</router-link> |
    <router-link to="/speedeffectivevalue">SpeedEffectiveValue</router-link> |
    <router-link to="/threejstest">threejstest</router-link> |
  </div>
  <router-view/>
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
</style>
