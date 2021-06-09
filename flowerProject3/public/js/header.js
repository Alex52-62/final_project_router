Vue.component('site-header', {
    template: `
    <div class="site-header">
    <div class="logo">
        <div id="site_title"><a href="#">Floral Shop</a></div>
    </div>
    <nav id="mainNav">
        <ul>
            <li><a href="index.html"><i class="icon-home"></i><br /><b>Home</b></a></li>
            <li><a href="about.html"><i class="icon-cog"></i><br /><b>About</b></a></li>
            <li><a href="products.html"><i class="icon-desktop"></i><br /><b>Products</b></a>
                <ul class="sub-menu">
                    <li><a href="#"><i class="icon-plane"></i><b>Web</b></a></li>
                    <li><a href="#"><i class="icon-book"></i><b>Print</b></a></li>
                    <li><a href="#"><i class="icon-facetime-video"></i><b>Video</b></a></li>
                </ul>
            </li>
            <li><a href="checkout.html"><i class="icon-user"></i><br /><b>Checkout</b></a></li>
            <li><a href="contact.html"><i class="icon-twitter"></i><br /><b>Contact</b></a></li>
            <li><a href="faqs.html"><i class="icon-user"></i><br /><b>FAQs</b></a></li>
            <li><a href="basket.html"><i class="icon-twitter"></i><br /><b>Basket</b></a></li>
        </ul>
        <div class="clr"></div>
    </nav>
    </div>
    `
});