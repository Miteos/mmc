<template>
  <v-row class="d-flex justify-center align-center">
    <v-col cols="12" sm="8" lg="6" class="mx-5">
      <v-card elevation="10" class="admin-login">
        <v-container fluid>
          <v-row>
            <v-col
              cols="12"
              sm="12"
              lg="6"
              class="d-flex justify-center align-center"
            >
              <div class="login-img-holder">
<!--                <img src="@/static/images/user-png.png" />-->
              </div>
            </v-col>
            <v-col cols="12" sm="12" lg="6">
              <v-card-title
                center
                class="login_title_admin d-flex justify-center"
              >
                Prijavi se:
              </v-card-title>
              <v-form
                class="px-8 py-6 text-center"
                @submit.prevent="adminLogin"
              >
                <v-text-field
                  v-model="username"
                  label="Korisničko ime"
                  :placeholder="!autofilled ? ' ' : ''"
                  required
                />
                <v-text-field
                  v-model="password"
                  label="Lozinka"
                  type="password"
                  :placeholder="!autofilled ? ' ' : ''"
                  required
                />
                <v-btn
                  type="submit"
                  dark
                  rounded
                  class="o_btn mt-5"
                  height="40px"
                  width="150px"
                  :loading="loggingIn"
                >
                  Prijava
                </v-btn>
              </v-form>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  layout: 'admin_login',
  data(){
    return{
      username: '',
      password: '',
      loggingIn: false,
      autofilled: false,
    }
  },
  mounted() {

    },
  methods: {
    async adminLogin() {
      try {
        this.loggingIn = true
        if (this.username === 'admin' && this.password === 'superadmin1234'){
         await Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Log-in successful',
            showConfirmButton: false,
            timer: 1500
          })
          await this.$router.push('/admin/dashboard')
        }
        else {
          await this.$toast.error('Invalid credentials, please enter correct username and password')
          }
      } catch (e) {
        // this.$vSnackbar({
        //   // text: this.$extractError(e),
        //   text:'Something went wrong',
        //   type: 'error'
        // })
      } finally {
        this.loggingIn = false
      }
    }
  },
  watch: {
    'form.email'() {
      this.autofilled = true;
    },
  },
}

</script>

<style lang="scss">
.admin-login {
  border-radius: 20px !important;
}

.login_title_admin {
  display: flex;
  justify-content: center;
  font-size: 30px !important;
  border-bottom: 2px solid lightgray;
}
.login-img-holder img {
  max-height: 300px;
  max-width: 300px;
  background: linear-gradient(45deg, #ff5c44 20%, #ff8b1a 50%);
  border-radius: 20px;
  @media screen and (max-width: 1280px) {
    max-height: 115px;
    max-width: 115px;
  }
}
</style>
