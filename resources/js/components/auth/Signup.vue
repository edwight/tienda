<template>
    <div>
        <div class="alert alert-danger" v-if="error && !success">
            <p>There was an error, unable to complete registration.</p>
        </div>
        <div class="alert alert-success" v-if="success">
            <p>Registration completed. You can now <router-link :to="{name:'login'}">sign in.</router-link></p>
        </div>
        <form autocomplete="off" @submit.prevent="signup" v-if="!success" method="post">
            <div class="form-group" v-bind:class="{ 'has-error': error && errors.name }">
                <label for="name">Name</label>
                <input type="text" id="name" class="form-control" v-model="name" required>
                <span class="help-block" v-if="error && errors.name">{{ errors.name }}</span>
            </div>
            <div class="form-group" v-bind:class="{ 'has-error': error && errors.email }">
                <label for="email">E-mail</label>
                <input type="email" id="email" class="form-control" placeholder="user@example.com" v-model="email" required>
                <span class="help-block" v-if="error && errors.email">{{ errors.email }}</span>
            </div>
            <div class="form-group" v-bind:class="{ 'has-error': error && errors.password }">
                <label for="password">Password</label>
                <input type="password" id="password" class="form-control" v-model="password" required>
                <span class="help-block" v-if="error && errors.password">{{ errors.password }}</span>
            </div>
            <div class="form-group" v-bind:class="{ 'has-error': error && errors.password }">
                <label for="password">Password Confirmation</label>
                <input type="password" id="password_confirmation" class="form-control" v-model="password_confirmation" required>
                <span class="help-block" v-if="error && errors.password_confirmation">{{ errors.password_confirmation}}</span>
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
        </form>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                name: '',
                email: '',
                password: '',
                password_confirmation:'',
                error: false,
                errors: {},
                success: false
            };
        },
        methods: {
          signup(){
            this.$store.dispatch('retrieveToken',{
                name:this.name,
                email:this.email,
                password:this.password,
                password_confirmation:this.password_confirmation,
            })
            .then(response => {
                //this.$store.commit(“loginSuccess”, res);
                this.$router.push({name: 'dashboard'});
            })
            .catch(error => {
                //this.$store.commit("loginFailed", {error});
            })
            
            /*
            var app = this
            this.$auth.login({
                headers: {
                    'Content-Type': 'application/json',
                },
                params: {
                  email: app.email,
                  password: app.password
                }, 
                success: function (response) {
                    alert(response),
                    console.log(response),
                    this.$auth.token('access_token', response.data.access_token)
                },
                error: function () {},
                rememberMe: true,
                redirect: '/dashboard',
                fetchUser: true,
            }); 
            */      
          },
        }
    }
</script>