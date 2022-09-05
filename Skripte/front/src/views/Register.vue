<template>
    <div id="app">
   
        <b-form @submit="onSubmit">
        <b-form-group label="Email address:" label-for="email">
          <b-form-input id="email" v-model="form.email" type="email" placeholder="Enter email" required></b-form-input>
        </b-form-group>
  
        <b-form-group label="User Name:" label-for="name">
          <b-form-input id="name" v-model="form.name" placeholder="Enter name" required></b-form-input>
        </b-form-group>
  
        <b-form-group label="Password:" label-for="password">
          <b-form-input id="password" v-model="form.password" type="password" required></b-form-input>
        </b-form-group>
       
        <b-form-group label="role">
          <b-form-radio v-model="form.admin" name="myChoice" value="admin" required>admin</b-form-radio>
          <b-form-radio v-model="form.admin" name="myChoice" value="manager" required>manager</b-form-radio>
          <b-form-radio v-model="form.admin" name="myChoice" value="employee" required>employee</b-form-radio>
        </b-form-group>
  
        
        <br>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </div>
  </template>
  
<script>
    import { mapActions } from 'vuex';

    export default {
        name: 'Register',
      
        components: {
        },

        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    admin: '',
                    password: ''
                }
            }
        },

        methods: {
            ...mapActions([
                'register'
            ]),
            async onSubmit(e) {
                e.preventDefault();
                this.register(this.form);
                this.$router.push({name: 'Login'});
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