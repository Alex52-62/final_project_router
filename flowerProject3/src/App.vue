<template>

  <div id="app">
    <header>
                <siteheader></siteheader>
                <div class="cart">
                    <search></search>
                    <cart ref="cart"></cart>
                </div>
    </header>

    <main>
    <leftbar></leftbar>
                    <div class="cover">
                    <h2>Welcome to Floral Shop</h2>
                    <p class="covertext">Floral Shop is free website template by templatemo.
                      Sed in suscipit risus, eget consectetur justo. Praesent lacinia, nisi
                      quis commodo consectetur, diam magna laoreet felis, a pulvinar mauris
                      enim in felis. Phasellus in mauris velit. In pellentesque massa in nisl
                      auctor pellentesque. Donec fermentum convallis purus, id luctus nulla
                      tempus in. Aliquam diam nibh, consectetur quis fringilla facilisis. </p>
                </div>
            <transition name="fade">
                <router-view/>
            </transition>
                <div class="shipping">
                    <a href="#">
                      <img src="./assets/images/free_shipping.jpg" alt="Free Shipping" />
                    </a>
                </div>
    </main>
    <sitefooter></sitefooter>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

<script>
// @ is an alias to /src
import siteheader from '@/components/siteheader.vue';
import leftbar from '@/components/leftbar.vue';
import sitefooter from '@/components/sitefooter.vue';
import search from '@/components/search.vue';
import cart from '@/components/cart.vue';

export default {
  components: {
    siteheader, leftbar, sitefooter, search, cart,
  },
  props: ['filter'],
};
</script>
