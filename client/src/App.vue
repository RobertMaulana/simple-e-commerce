<template>
  <div id="app">
    <HeaderApp></HeaderApp>
    <SearchBoxApp></SearchBoxApp>
    <CarouselApp></CarouselApp>
    <router-view></router-view>
    <PopularApp></PopularApp>
    <AllProductApp></AllProductApp>
    <!-- <Order></Order> -->
    <FooterApp></FooterApp>
  </div>
</template>

<script>
import HeaderApp from './components/HeaderApp'
import SearchBoxApp from './components/SearchBoxApp'
import CarouselApp from './components/CarouselApp'
import PopularApp from './components/PopularApp'
import AllProductApp from './components/AllProductApp'
import FooterApp from './components/FooterApp'
// import Order from './components/OrderVerification'
export default {
  name: 'app',
  components: {
    HeaderApp,
    SearchBoxApp,
    CarouselApp,
    PopularApp,
    AllProductApp,
    FooterApp,
    // Order
  }
}
</script>

<style>
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
