<template>
    <div class="site-header">
    <div class="logo">
        <div id="site_title"><a href="#">Floral Shop</a></div>
    </div>
    <nav id="mainNav">
        <ul>
            <li class="icon-home"><b><router-link to="/">Home</router-link></b></li>
            <li class="icon-cog"><b><router-link to="/about">About</router-link></b></li>
            <li class="icon-desktop"><b><router-link to="/products">Products</router-link></b>
                <ul class="sub-menu">
                    <li><a href="#"><i class="icon-plane"></i><b>Web</b></a></li>
                    <li><a href="#"><i class="icon-book"></i><b>Print</b></a></li>
                    <li><a href="#"><i class="icon-facetime-video"></i><b>Video</b></a></li>
                </ul>
            </li>
            <li class="icon-user"><b><router-link to="/checkout">checkout</router-link></b></li>
            <li class="icon-twitter"><b><router-link to="/contact">contact</router-link></b></li>
            <li class="icon-user"><b><router-link to="/FAQs">FAQs</router-link></b></li>
            <li class="icon-twitter"><b><router-link to="/Basket">basket</router-link></b></li>
        </ul>
        <div class="clr"></div>
    </nav>
    </div>
</template>

<script>
export default {
  name: 'site-header',
  props: {

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
