<template>
    <div id="app">
      <b-form @submit="onSubmit">
        <b-form-group label="User Name:" label-for="name">
        <b-form-input id="name" placeholder="Enter name" required></b-form-input>
        </b-form-group>
  
        <b-form-group label="Password:" label-for="password">
          <b-form-input id="password" placeholder="Enter pass" type="password" required></b-form-input>
        </b-form-group>
  
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </div>
</template>
  
<script>

  export default {
    name: 'Login',
    
    methods: {
      onSubmit(e) {
        e.preventDefault();

        this.$router.push({name: 'Home'});
      }
    }
  }

</script>  
  
<style scoped>
  input[type=text], input[type=password]{
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  button {
    color: #2c3e50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 10%;
  }

  button:hover {
    opacity: 0.8;
  }

</style>
  