import { Router } from 'express'	
	import { 	
	      get_orders_products_download_all  	
	    , get_orders_products_download_byid  	
	    , port_orders_products_download  	
	    , put_orders_products_download  	
	    , delete_orders_products_download   	
	} from '../controllers/orders_products_download.controllers';	
		
		
	const router = Router();	
		
	router.route('/orders_products_download/getall/').get(get_orders_products_download_all);	
	router.route('/orders_products_download/:id').get(get_orders_products_download_byid);	
	router.route('/orders_products_download/create/').post(port_orders_products_download);	
	router.route('/orders_products_download/put/').put(put_orders_products_download);	
	router.route('/orders_products_download/del/').delete(delete_orders_products_download);	
	 	
		
	export default router;