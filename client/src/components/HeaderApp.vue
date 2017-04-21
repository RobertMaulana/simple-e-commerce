<template lang="html">
  <div>
    <el-menu class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">CheaperShop</el-menu-item>
      <div class="user_menu" style="float:right" v-show="statusLogin == null">
        <el-menu-item index="1" @click="signup_modal">Signup</el-menu-item>
        <el-menu-item index="1" @click="signin_modal">Login</el-menu-item>
      </div>
      <el-submenu index="2" style="float:right" v-show="statusLogin">
        <template slot="title">Maulana</template>
        <el-menu-item index="2-2">Profile</el-menu-item>
        <el-menu-item index="2-3" @click="logout">Logout</el-menu-item>
      </el-submenu>
      <el-badge v-show="cart != ''" :value="cart" class="item" style="float:right;margin-top:15px;margin-right:15px;">
        <el-button size="small" @click="view_cart">Cart</el-button>
      </el-badge>
    </el-menu>
    <el-dialog title="Registration" v-model="dialogFormVisible">
      <el-form :model="form_signup">
        <el-form-item>
          <el-input v-model="form_signup.username" placeholder="Username"></el-input>
        </el-form-item>
        <el-form-item
        prop="email"
        :rules="[
          { required: true, message: 'Please input email address', trigger: 'blur' },
          { type: 'email', message: 'Please input correct email address', trigger: 'blur,change' }
        ]"
      >
        <el-input v-model="form_signup.email" placeholder="Email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" v-model="form_signup.password" placeholder="Password"></el-input>
        </el-form-item>
        <!-- <el-form-item>
          <el-select v-model="form_signup.role" placeholder="User Role">
            <el-option label="Admin" value="admin"></el-option>
            <el-option label="Guest" value="guest"></el-option>
          </el-select>
        </el-form-item> -->
        <el-form-item>
          <el-input v-model="form_signup.role" placeholder="Admin / Guest"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="signup(form_signup);dialogFormVisible = false; notification()">Confirm</el-button>
      </span>
    </el-dialog>
    <el-dialog title="Signin" v-model="dialogFormVisibleSignin">
      <el-form :model="form_signin">
        <el-form-item>
          <el-input v-model="form_signin.username" placeholder="Username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" v-model="form_signin.password" placeholder="Password"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleSignin = false">Cancel</el-button>
        <el-button type="primary" @click="signin(form_signin);dialogFormVisibleSignin = false;">Confirm</el-button>
      </span>
    </el-dialog>
    <el-dialog title="Signin Verification" v-model="dialogFormVisibleSigninVerif">
      <el-form :model="form_signin_verification">
        <el-form-item>
          <el-input v-model="form_signin_verification.username" placeholder="Username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" v-model="form_signin_verification.password" placeholder="Password"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleSigninVerif = false">Cancel</el-button>
        <el-button type="primary" @click="signinVerif(form_signin_verification);dialogFormVisibleSigninVerif = false;notification('Signin verifications success!')">Confirm</el-button>
      </span>
    </el-dialog>
    <el-dialog title="Shipping" v-model="dialogFormVisibleViewCart">
      <el-card class="box-card">
        <div v-for="(dataCart, index) in this.$store.state.dataCart" class="text item" :key="index">
          <h5><span>{{dataCart.id_product}}</span> - {{dataCart.product_name}}</h5>
          <p>Rp. {{dataCart.price}}</p>
        </div>
        <hr>
        <div class="total">
          <p>Total: <b>Rp. {{ total }}</b></p>
        </div>
      </el-card>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleViewCart = false">Cancel</el-button>
        <el-button type="primary" @click="checkout()">Checkout</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data() {
      return {
        dialogFormVisible: false,
        dialogFormVisibleSignin: false,
        dialogFormVisibleSigninVerif: false,
        dialogFormVisibleViewCart: false,
        form_signup: {
          username  : '',
          email     : '',
          password  : '',
          role      : '',
        },
        form_signin: {
          username: '',
          password: ''
        },
        form_signin_verification: {
          username: '',
          password: '',
        }
      };
    },
    methods: {
      ...mapActions([
        "signup","signin","signinVerif"
      ]),
      signup_modal(){
        this.dialogFormVisible = true
      },
      signin_modal(){
        this.dialogFormVisibleSignin = true
      },
      view_cart(){
        this.dialogFormVisibleViewCart = true
      },
      checkout(){
        if (window.localStorage.getItem("user") == null) {
          this.dialogFormVisibleSigninVerif = true
          this.dialogFormVisibleViewCart = true
        }else {
          this.dialogFormVisibleViewCart = false
          let data = {
            cart: JSON.parse(window.localStorage.getItem("cart")),
            user: window.localStorage.getItem('id')
          }
          this.$store.dispatch("checkout", data)
          this.$router.push({ path: '/order', query: { cart: data }})
        }
      },
      notification(notif="signin verifications success!") {
        if (notif="signin verifications success!") {
          this.$message({
            message: 'Signin verification success',
            type: 'success'
          });
        }else {
          this.$message({
            message: 'Congrats, Please verify link activation in your mail address!',
            type: 'success'
          });
        }
      },
      logout(){
        window.localStorage.clear();
        window.location = "/";
      }
    },
    computed: {
      ...mapGetters({
        statusRegistration: 'needActivation',
        statusLogin: 'isLogin',
        cart: 'cart'
      }),
      total: function() {
          if (!this.values) {
              return 0;
          }

          return this.values.reduce(function (total, value) {
              return total + Number(value.total);
          }, 0);
      }
    }
}
</script>

<style lang="css" scoped>
  .el-card {
    text-align: left;
  }
  .el-select {
    width: 100%;
  }
  .el-menu{
    margin-top: -50px;
    border: 1px solid #d9d9d9;
    background-color: #fff
  }
</style>
