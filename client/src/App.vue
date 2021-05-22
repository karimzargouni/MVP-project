<template>
  <div id="app">
    <h1 class="title">Todo List:</h1>
    <hr />
    <div class="container">
      <div class="input">
        <input class='inner' v-model="description" type="text" placeholder="Go to mars..."/>
      </div>
      <div>
        <a class="button" @click="addItem">Add</a>
      </div>
    </div>
    <div v-for="item in items" :key="item._id">
      <div class='box'>
        <div>{{ item.date }}</div>
        <div>{{ item.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      items: [],
      description: "",
      editedDescription: "",
      selected: {},
    };
  },
  async mounted() {
    const response = await axios.get("http://localhost:3000/api");
    this.items = response.data;
    console.log(this.items);
  },
  methods: {
    async addItem() {
      const response = await axios.post("http://localhost:3000/api", {
        description: this.description,
      });
      this.items.push(response.data);
      this.description = "";
    },
  },
};
</script>

<style>
#app {
  margin: auto;
  margin-top: 3rem;
  max-width: 700px;
}
.icon {
  cursor: pointer;
}
.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.container{
  display: flex;
  margin-bottom: 2rem
}
.input{
  width: 91%;
  
}
.inner{
  width: 100%;
}

.box{
box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
margin-bottom: 2rem
}
</style>
