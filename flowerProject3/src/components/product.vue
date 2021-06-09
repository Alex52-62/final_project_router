<template>
  <div class="product-item">
    <vpopup
      inPopupBuy="add to basket"
      :popupTitle="product.product_name"
      v-on:closePopup="isInfoPopupVisible = !isInfoPopupVisible"
      v-on:PopupBuy="addToCart(product)"
      v-show="isInfoPopupVisible"
    >
      <div>
        <img :src="product.img" alt="Some img" />
        <h3>{{ product.product_name }}</h3>
        <p>{{ product.price }}USD</p>
      </div>
    </vpopup>
    <div class="desc">
      <img :src="product.img" alt="Some img" />
      <h3>{{ product.product_name }}</h3>
      <p>{{ product.price }}USD</p>
      <button
        class="show__info"
        @click="isInfoPopupVisible = !isInfoPopupVisible"
      >
        подробно
      </button>
      <button class="buy-btn" @click="addToCart(product)">Купить</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import vpopup from '@/components/vpopup.vue';
import { mapActions } from 'vuex';

export default {
  name: 'product',
  props: ['product'],
  components: { vpopup },
  data() {
    return {
      cartAPI: this.$root.$refs.cart,
      isInfoPopupVisible: false,
    };
  },
  methods: {
    ...mapActions({ addToCart: 'addToCart' }),
  },
  mounted() {
    console.log(this.addToCart);
  },
};
</script>
