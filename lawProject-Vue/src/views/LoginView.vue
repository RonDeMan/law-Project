<template>
    <div>
        <h2 style="text-align: center;">התחברות</h2>
        <v-form v-model="valid" >
    <v-container>

      <v-row>

          <v-text-field
            v-model="email"
            label="מייל"
            required
            :rules="[rules.required,rules.email]"
          ></v-text-field>
        </v-row>
        <v-row>
          <v-text-field
            v-model="password"
            label="סיסמה"
            :type="showPassword? 'type' :'password'"
            @click:append="showPassword = !showPassword"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required]"
            required
          ></v-text-field>
      </v-row>
      <v-row>
      <v-btn
      class="mr-4"
      @click="submit"
    >
      הזדהה
    </v-btn>

    <v-btn
      class="mr-4"
      @click="logout"
    >
      התנתק
    </v-btn>
</v-row>
    </v-container>
  </v-form>
    </div>
</template>

<script>
import {login,logout, getUserInfo} from '../DL/login.js'
import router from "../router"

    export default {
        name:"loginView",
        data() {
            return {
                email: "",
                password: "",
                showPassword: false,
                valid: true,
                rules: {
                    required: value => !!value || 'שדה חובה',
                    email: value => {
                        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        return pattern.test(value) || 'לא מייל אמיתי'
                    },
                },
            }
        },
        methods: {
            submit() {
                login(this.email,this.password).then(res=>{
                    console.log(res)
                    getUserInfo().then(res=>{
                        console.log(res)
                        router.push("/home")
                    })
                }).catch(errors=>{
                    console.log(errors)
                })
            },

            logout(){
                logout().then(res=>{
                    console.log(res)
                })
            }
        },
    }
</script>

<style scoped>

</style>