import { Router } from 'express'	
	import { 	
	      get_products_options_all  	
	    , get_products_options_byid  	
	    , port_products_options  	
	    , put_products_options  	
	    , delete_products_options   	
	} from '../controllers/products_options.controllers';	
		
		
	const router = Router();	
		
	router.route('/products_options/getall/').get(get_products_options_all);	
	router.route('/products_options/:id').get(get_products_options_byid);	
	router.route('/products_options/create/').post(port_products_options);	
	router.route('/products_options/put/').put(put_products_options);	
	router.route('/products_options/del/').delete(delete_products_options);	
	 	
		
	export default router;