import express, { Application } from 'express';	
	 	
	const app  = express();	
		
	import IndexRoutes from './routes/index.routes';	
		
	import Routes_a from './routes/a.routers';	
	import Routes_address_book from './routes/address_book.routers';	
	import Routes_address_format from './routes/address_format.routers';	
	import Routes_administrators from './routes/administrators.routers';	
	import Routes_banners from './routes/banners.routers';	
	import Routes_banners_history from './routes/banners_history.routers';	
	import Routes_categories from './routes/categories.routers';	
	import Routes_categories_description from './routes/categories_description.routers';	
	import Routes_configuration from './routes/configuration.routers';	
	import Routes_configuration_group from './routes/configuration_group.routers';	
	import Routes_counter from './routes/counter.routers';	
	import Routes_counter_history from './routes/counter_history.routers';	
	import Routes_countries from './routes/countries.routers';	
	import Routes_currencies from './routes/currencies.routers';	
	import Routes_customers from './routes/customers.routers';	
	import Routes_customers_basket from './routes/customers_basket.routers';	
	import Routes_customers_basket_attributes from './routes/customers_basket_attributes.routers';	
	import Routes_customers_info from './routes/customers_info.routers';	
	import Routes_geo_zones from './routes/geo_zones.routers';	
	import Routes_languages from './routes/languages.routers';	
	import Routes_manufacturers from './routes/manufacturers.routers';	
	import Routes_manufacturers_info from './routes/manufacturers_info.routers';	
	import Routes_newsletters from './routes/newsletters.routers';	
	import Routes_orders from './routes/orders.routers';	
	import Routes_orders_products from './routes/orders_products.routers';	
	import Routes_orders_products_attributes from './routes/orders_products_attributes.routers';	
	import Routes_orders_products_download from './routes/orders_products_download.routers';	
	import Routes_orders_status from './routes/orders_status.routers';	
	import Routes_orders_status_history from './routes/orders_status_history.routers';	
	import Routes_orders_total from './routes/orders_total.routers';	
	import Routes_products from './routes/products.routers';	
	import Routes_products_attributes from './routes/products_attributes.routers';	
	import Routes_products_attributes_download from './routes/products_attributes_download.routers';	
	import Routes_products_description from './routes/products_description.routers';	
	import Routes_products_notifications from './routes/products_notifications.routers';	
	import Routes_products_options from './routes/products_options.routers';	
	import Routes_products_options_values from './routes/products_options_values.routers';	
	import Routes_products_options_values_to_products_options from './routes/products_options_values_to_products_options.routers';	
	import Routes_products_to_categories from './routes/products_to_categories.routers';	
	import Routes_reviews from './routes/reviews.routers';	
	import Routes_reviews_description from './routes/reviews_description.routers';	
	import Routes_sessions from './routes/sessions.routers';	
	import Routes_specials from './routes/specials.routers';	
	import Routes_tax_class from './routes/tax_class.routers';	
	import Routes_tax_rates from './routes/tax_rates.routers';	
	import Routes_whos_online from './routes/whos_online.routers';	
	import Routes_zones from './routes/zones.routers';	
	import Routes_zones_to_geo_zones from './routes/zones_to_geo_zones.routers';	
		
	//login
	import Routes_auth from './routes/auth.routers';	
	app.use(Routes_auth)

	//lng
	import Routes_lngs from './routes/lngs.routers';	
	app.use(Routes_lngs)


	//uploadfile 
	import UploadFile from './routes/uploadfileexpress.routers';
	app.use(UploadFile)
 
	//uploadfilemulter.routers
	import UploadFileMulter from './routes/uploadfilemulter.routers';
	app.use(UploadFileMulter)
 
	// app.use('/uploads' , express.static('uploads'));
	// app.use(express.static('uploads'));

	app.use( 	
	      IndexRoutes  	
	    , Routes_a 	
	    , Routes_address_book 	
	    , Routes_address_format 	
	    , Routes_administrators 	
	    , Routes_banners 	
	    , Routes_banners_history 	
	    , Routes_categories 	
	    , Routes_categories_description 	
	    , Routes_configuration 	
	    , Routes_configuration_group 	
	    , Routes_counter 	
	    , Routes_counter_history 	
	    , Routes_countries 	
	    , Routes_currencies 	
	    , Routes_customers 	
	    , Routes_customers_basket 	
	    , Routes_customers_basket_attributes 	
	    , Routes_customers_info 	
	    , Routes_geo_zones 	
	    , Routes_languages 	
	    , Routes_manufacturers 	
	    , Routes_manufacturers_info 	
	    , Routes_newsletters 	
	    , Routes_orders 	
	    , Routes_orders_products 	
	    , Routes_orders_products_attributes 	
	    , Routes_orders_products_download 	
	    , Routes_orders_status 	
	    , Routes_orders_status_history 	
	    , Routes_orders_total 	
	    , Routes_products 	
	    , Routes_products_attributes 	
	    , Routes_products_attributes_download 	
	    , Routes_products_description 	
	    , Routes_products_notifications 	
	    , Routes_products_options 	
	    , Routes_products_options_values 	
	    , Routes_products_options_values_to_products_options 	
	    , Routes_products_to_categories 	
	    , Routes_reviews 	
	    , Routes_reviews_description 	
	    , Routes_sessions 	
	    , Routes_specials 	
	    , Routes_tax_class 	
	    , Routes_tax_rates 	
	    , Routes_whos_online 	
	    , Routes_zones 	
	    , Routes_zones_to_geo_zones 	
	);	
		
	export default app;