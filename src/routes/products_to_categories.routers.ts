import { Router } from 'express'	
	import { 	
	      get_products_to_categories_all  	
	    , get_products_to_categories_byid  	
	    , port_products_to_categories  	
	    , put_products_to_categories  	
	    , delete_products_to_categories   	
	} from '../controllers/products_to_categories.controllers';	
		
		
	const router = Router();	
		
	router.route('/products_to_categories/getall/').get(get_products_to_categories_all);	
	router.route('/products_to_categories/:id').get(get_products_to_categories_byid);	
	router.route('/products_to_categories/create/').post(port_products_to_categories);	
	router.route('/products_to_categories/put/').put(put_products_to_categories);	
	router.route('/products_to_categories/del/:id').delete(delete_products_to_categories);	
	 	
		
	export default router;