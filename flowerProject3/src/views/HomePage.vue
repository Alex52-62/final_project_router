<template>
<div>
  <products ref="products"></products>
</div>
</template>

<script>
// @ is an alias to /src
import products from '@/components/products.vue';

export default {
  name: 'HomePage',
  components: { products },
  props: {},
  data() {
    return {};
  },
  computed: {},
};
</script>
