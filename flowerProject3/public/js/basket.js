Vue.component('basket', {
    data() {
        return {
            cartUrl: '/getBasket.json',
            cartItems: [],
        }
    },
    methods: {
        addProduct(product) {
            let find = this.cartItems.find(el => el.id_product === product.id_product);
            if (find) {
                this.$parent.putJson(`/api/cart/${find.id_product}`, { quantity: 1 });
                find.quantity++;
            } else {
                let prod = Object.assign({ quantity: 1 }, product);
                this.$parent.postJson('/api/cart', prod)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.push(prod);
                        }
                    });
            }
        },
        remove(item) {
            if (item.quantity > 1) {
                this.$parent.putJson(`/api/cart/${item.id_product}`, { quantity: -1 })
                    .then(data => {
                        if (data.result === 1) {
                            item.quantity--;
                        }
                    });
            } else {
                this.$parent.deleteJson(`/api/cart/${item.id_product}`)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1);
                        }
                    });
            }
        },
    },
    mounted() {
        this.$parent.getJson('/api/cart')
            .then(data => {
                for (let el of data.contents) {
                    this.cartItems.push(el);
                }
            });
    },
    template: `
    <div class="basketFull">
        <h2>Your Basket</h2>
        <table width="700" border="0" cellpadding="5" cellspacing="0">
            <tr bgcolor="#41581B">
                <p v-if="!cartItems.length">Корзина пуста</p>
                    <div class="fullBasket">           
                        <cart-item class="cart-item" 
                            v-for="item of cartItems" 
                                :key="item.id_product"
                                :cart-item="item" 
                                :img="item.img"
                                @remove="remove">
                        </cart-item>
                    </div>
            </tr>
        </table>
    </div>`
});