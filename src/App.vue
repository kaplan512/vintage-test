<template>
  <div id="app">
    <header-vue/>
    <div class = "address">
      <div class = "address-block">
        <tabs/>
      </div>
      <div class = "address-block">
        <map-vue/>
      </div>
    </div>
    <footer-vue/>
    <notifications group="foo" />
  </div>
</template>

<script>
import HeaderVue from './components/HeaderVue'
import MapVue from './components/Map'
import Tabs from './components/Tabs'
import FooterVue from './components/FooterVue'

export default {
  name: 'app',
  components: {
    HeaderVue,
    MapVue,
    Tabs,
    FooterVue
  }
}
</script>

<style lang = "scss">
  @import "assets/scss/main";

  .address {
    display: flex;
    background: #242424;
    padding-left: 15px;
    &-block {
      width: 50%;
    }
  }
  @media screen and (max-width: 991px) {
    .address {
      flex-direction: column;
      &-block {
        width: 100%;
      }
    }
  }
</style>
