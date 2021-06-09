Vue.component('leftbar', {
    template: `
    <div id="sidebar" class="left">
    <div class="sidebar_box"><span class="bottom"></span>
        <h3>Categories</h3>
        <div class="content">
            <ul class="sidebar_list">
                <li><a href="#">Nulla odio ipsum</a></li>
                <li><a href="#">Suspendisse posuere</a></li>
                <li><a href="#">Aliquam euismod</a></li>
                <li><a href="#">Curabitur ac mauris</a></li>
                <li><a href="#">Mauris nulla tortor</a></li>
                <li><a href="#">Nullam ultrices</a></li>
                <li><a href="#">Vivamus scelerisque</a></li>
                <li><a href="#">Suspendisse posuere</a></li>
                <li><a href="#">Quisque vel justo</a></li>
            </ul>
        </div>
    </div>
    <div class="sidebar_box"><span class="bottom"></span>
        <h3>Weekly Special</h3>
        <div class="content special">
            <img src="images/templatemo_image_01.jpg" alt="Flowers" />
            <a href="#">Citrus Burst Bouquet</a>
            <p>
                Price:
                <span class="price normal_price">$160</span>&nbsp;&nbsp;
                <span class="price special_price">$100</span>
            </p>
        </div>
    </div>
</div>
    `
});