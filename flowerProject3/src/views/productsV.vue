<template>
                <div class="cover7">
                    <h2>Products</h2>
                    <p>Cras aliquam, mi nec imperdiet volutpat, ligula est consequat odio, eu auctor urna augue eu quam.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum nec nunc ac hendrerit.
                        Morbi lacinia placerat diam sit amet fringilla.
                        Integer accumsan suscipit suscipit. Mauris non nunc sit amet turpis pharetra mattis. Validate
                        <a href="http://validator.w3.org/check?uri=referer" rel="nofollow"><strong>XHTML</strong></a> &amp;
                        <a href="http://jigsaw.w3.org/css-validator/check/referer"
                            rel="nofollow"><strong>CSS</strong></a>.</p>
                            <products ref="products"></products>

                    <div class="pagination">
                        <ul class="pagination">
                            <li><a href="#" style="color: #e79e05; font-size: 20px">«</a></li>
                            <li><a href="#" style="color: #e79e05; font-size: 20px">1</a></li>
                            <li><a class="active" href="#" style="color: #e79e05; font-size: 20px">2</a></li>
                            <li><a href="#" style="color: #e79e05; font-size: 20px">3</a></li>
                            <li><a href="#" style="color: #e79e05; font-size: 20px">4</a></li>
                            <li><a href="#" style="color: #e79e05; font-size: 20px">5</a></li>
                            <li><a href="#" style="color: #e79e05; font-size: 20px">6</a></li>
                            <li><a href="#" style="color: #e79e05; font-size: 20px">7</a></li>
                            <li><a href="#" style="color: #e79e05; font-size: 20px">»</a></li>
                        </ul>
                    </div>
                </div>
</template>

<script>
// @ is an alias to /src
import products from '@/components/products.vue';

export default {
  name: 'productsV',
  components: { products },
  props: {},
  data() {
    return {};
  },
  computed: {},
};
</script>

<style scoped>
.pagination {
    margin-bottom: 20px;
}
</style>
