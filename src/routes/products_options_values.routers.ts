import { Router } from 'express'	
	import { 	
	      get_products_options_values_all  	
	    , get_products_options_values_byid  	
	    , port_products_options_values  	
	    , put_products_options_values  	
	    , delete_products_options_values   	
	} from '../controllers/products_options_values.controllers';	
		
		
	const router = Router();	
		
	router.route('/products_options_values/getall/').get(get_products_options_values_all);	
	router.route('/products_options_values/:id').get(get_products_options_values_byid);	
	router.route('/products_options_values/create/').post(port_products_options_values);	
	router.route('/products_options_values/put/').put(put_products_options_values);	
	router.route('/products_options_values/del/').delete(delete_products_options_values);	
	 	
		
	export default router;