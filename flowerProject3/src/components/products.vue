<template>
        <div class="products">
            <product ref="refref"
            v-for="item of filtered"
            :key="item.id_product"
            :product="item"
            ></product>

        </div>
</template>

<script>
// @ is an alias to /src
import product from '@/components/product.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'products',
  props: ['filter'],
  components: { product },
  computed: {
    ...mapGetters(['userSearch', 'products', 'filtered']),
  },
  methods: {
    ...mapActions([
      'get_userSearch',
      'addProduct',
      'getProducts']),
  },
  filter(value) {
    const regexp = new RegExp(value, 'i');
    this.filtered = this.products.filter((el) => regexp.test(el.product_name));
  },
  created() {
    this.getProducts();
    this.get_userSearch();
  },
  data() {
    return {
    };
  },
};
</script>
