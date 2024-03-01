import { Router } from 'express'	
	import { 	
	      get_products_description_all  	
	    , get_products_description_byid  	
	    , port_products_description  	
	    , put_products_description  	
	    , delete_products_description   	
	} from '../controllers/products_description.controllers';	
		
		
	const router = Router();	
		
	router.route('/products_description/getall/').get(get_products_description_all);	
	router.route('/products_description/:id').get(get_products_description_byid);	
	router.route('/products_description/create/').post(port_products_description);	
	router.route('/products_description/put/').put(put_products_description);	
	router.route('/products_description/del/:id').delete(delete_products_description);	
	 	
		
	export default router;