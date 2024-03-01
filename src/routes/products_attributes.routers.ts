import { Router } from 'express'	
	import { 	
	      get_products_attributes_all  	
	    , get_products_attributes_byid  	
	    , port_products_attributes  	
	    , put_products_attributes  	
	    , delete_products_attributes   	
	} from '../controllers/products_attributes.controllers';	
		
		
	const router = Router();	
		
	router.route('/products_attributes/getall/').get(get_products_attributes_all);	
	router.route('/products_attributes/:id').get(get_products_attributes_byid);	
	router.route('/products_attributes/create/').post(port_products_attributes);	
	router.route('/products_attributes/put/').put(put_products_attributes);	
	router.route('/products_attributes/del/').delete(delete_products_attributes);	
	 	
		
	export default router;