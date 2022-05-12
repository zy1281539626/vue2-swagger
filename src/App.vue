<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import axios from "axios";
import SwaggerParser from "@apidevtools/swagger-parser";
export default {
  name: "App",
  components: {
    // HelloWorld
  },
  mounted() {
    axios
      .get("/api/demo/v2/api-docs", {
        headers: {
          Authorization: "Bearer 9DB9F7BE-72F7-4DEF-904A-072F3C4720B3",
        },
      })
      .then((res) => {
        let swaggerParser = new SwaggerParser();
        let options = {
          parse: {
            json: true,
            yaml: true,
            text: true,
            binary: true,
          },
          resolve: {
            external: true,
          },
          dereference: {
            circular: true,
          },
          validate: {
            schema: false,
            spec: false,
          },
        };
        swaggerParser.validate(res.data, options).then((res) => {
          console.log(res);
        });
      });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
