
<template>
  <div class="page-content--bge5">
    <div class="container">
      <div class="login-wrap">
        <div class="login-content">
          <div class="login-logo">
            <a href="#">
                <img src="images/icon/logo.png" alt="CoolAdmin">
            </a>
          </div>
          <div class="login-form">
            <form autocomplete="off" @submit.prevent="login" method="post">
              <div class="form-group">
                  <label>Email Address</label>
                  <input class="au-input au-input--full" type="email" name="email" placeholder="Email" v-model="email" required>
              </div>
              <div class="form-group">
                  <label>Password</label>
                  <input class="au-input au-input--full" type="password" name="password" placeholder="Password"  v-model="password" required>
              </div>
              <div class="login-checkbox">
                  <label>
                      <input type="checkbox" name="remember">Remember Me
                  </label>
                  <label>
                      <a href="#">Forgotten Password?</a>
                  </label>
              </div>
              <button class="au-btn au-btn--block au-btn--green m-b-20" type="submit">sign in</button>
              <div class="social-login-content">
                <div class="social-button">
                  <button class="btn btn-info">sign in with facebook</button>
                  <button class="au-btn au-btn--block au-btn--blue2">sign in with twitter</button>
                </div>
              </div>
            </form>
            <div class="register-link">
              <p>
                Don't you have account?
                <a href="#">Sign Up Here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default{
        name:'login',
        data(){
          return {
            email: null,
            password: null,
            error: false
          }
        },
        methods: {
          login(){
            this.$store.dispatch('retrieveToken',{
                email:this.email,
                password:this.password
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
<style>
    .page-content--bge5 {
    background: #e5e5e5;
    height: 100vh;
}

.login-wrap {
    max-width: 540px;
    padding-top: 8vh;
    margin: 0 auto;
}

.login-logo {
    text-align: center;
    margin-bottom: 30px;
}

.login-checkbox {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}

.login-checkbox label input[type="checkbox"] {
    margin-right: 8px;
}

.login-checkbox > label > a {
    color: #ff2e44;
}
.au-input--full {
    width: 100%;
}
.au-input {
    line-height: 43px;
    border: 1px solid #e5e5e5;
    font-size: 14px;
    color: #666;
    padding: 0 17px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    -webkit-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    transition: all 0.5s ease;
}
.au-btn--green {
    background: #63c76a;
}
.m-b-20 {
    margin-bottom: 20px;
}
@media (max-width: 991px) {
    .login-checkbox {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -moz-box-orient: vertical;
        -moz-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    }
}

.login-form .form-group label {
    display: block;
}

.login-content {
    background: #fff;
    padding: 30px 30px 20px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
}

.social-login-content {
    border-top: 1px solid #e7e7e7;
    border-bottom: 1px solid #e7e7e7;
    padding: 20px 0px;
}

.register-link {
    padding-top: 15px;
    text-align: center;
    font-size: 14px;
}

.register-link > p > a {
    color: #ff2e44;
}

</style>