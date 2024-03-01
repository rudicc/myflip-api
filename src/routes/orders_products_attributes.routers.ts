import { Router } from 'express'	
	import { 	
	      get_orders_products_attributes_all  	
	    , get_orders_products_attributes_byid  	
	    , port_orders_products_attributes  	
	    , put_orders_products_attributes  	
	    , delete_orders_products_attributes   	
	} from '../controllers/orders_products_attributes.controllers';	
		
		
	const router = Router();	
		
	router.route('/orders_products_attributes/getall/').get(get_orders_products_attributes_all);	
	router.route('/orders_products_attributes/:id').get(get_orders_products_attributes_byid);	
	router.route('/orders_products_attributes/create/').post(port_orders_products_attributes);	
	router.route('/orders_products_attributes/put/').put(put_orders_products_attributes);	
	router.route('/orders_products_attributes/del/').delete(delete_orders_products_attributes);	
	 	
		
	export default router;