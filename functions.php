<?php
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
function my_theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'montserrat', 'https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,500,500i,600,600i,700,700i,900,900i' );
    wp_enqueue_script( 'searchlayoutscript', get_stylesheet_directory_uri() . '/search-layout.js');
}

add_action( 'init', 'cg_woocommerce_image_dimensions_el_override', 1 );


function cg_woocommerce_image_dimensions_el_override() {
    $single = array(
        'width' => '500', // px
        'height' => '920', // px
        'crop' => 1        // true
    );
    $catalog = array(
        'width' => '220', // px
        'height' => '405', // px
        'crop' => 1        // true
    );
    // Image sizes
    update_option( 'shop_single_image_size', $single ); // Single product image
    update_option( 'shop_catalog_image_size', $catalog );       // Product category 

}


/**
 * Register our sidebars and widgetized areas.
 *
 */
function arphabet_widgets_init() {

    register_sidebar( array(
        'name'          => 'Top Banner Area',
        'id'            => 'top-banner',
        'before_widget' => '<div>',
        'after_widget'  => '</div>',
        'before_title'  => '',
        'after_title'   => '',
    ) );

}
add_action( 'widgets_init', 'arphabet_widgets_init' );


?>