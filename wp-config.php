<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'steppahead' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '=L&KA^7GY@zw~ESdQ$;Y}n[epd08k-{UYKEiQD`_wP-+n`~C-k/WYp?k@ew9ENnF' );
define( 'SECURE_AUTH_KEY',  '.0=(/^hoZgi!_1iAwGzB^tgZ<:$?eo>ja#`Wc%H<k+3BSL3`d({5M+L<8^x#^ZK#' );
define( 'LOGGED_IN_KEY',    '<mU%X8n],C_<q[#n_NWq2:p`b6~)gDN`4nhqj3 :T0W`A|bd:E}nY,[}M9pw%Su2' );
define( 'NONCE_KEY',        'qd$AC&1$zHB;E.2)yL2eD P:>w%=b/|]Q%AQoJdl)1! WmZfU>u1,Y>!9N5qwG9[' );
define( 'AUTH_SALT',        '? [M3ZZ;fjt$%)N?-&Kz=;EYK5>j2:WoDm[n7HhftERy[0LquC/C_duEdUFgg8T ' );
define( 'SECURE_AUTH_SALT', 'zg=FC9tli6sw2WqZ? hO?*v_w1gM]sVP87[Bod{|o2|*asj2)]z<@23ARJC9O|;2' );
define( 'LOGGED_IN_SALT',   '&z%<f2u2[n_>O=$v6E7|i)k%?6(?smAyw?b``0vU:l*Qxd)#(6,AHDrQ!RXR <4}' );
define( 'NONCE_SALT',       'hKe)4xr)m: [rJEknu5eZ7c{{_x$Fl)Fu`H8;`xmdl|=@A]qQ_HxLa@;HM^+)Ep]' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
