import { Router } from 'express'	
	import { 	
	      get_customers_basket_attributes_all  	
	    , get_customers_basket_attributes_byid  	
	    , port_customers_basket_attributes  	
	    , put_customers_basket_attributes  	
	    , delete_customers_basket_attributes   	
	} from '../controllers/customers_basket_attributes.controllers';	
		
		
	const router = Router();	
		
	router.route('/customers_basket_attributes/getall/').get(get_customers_basket_attributes_all);	
	router.route('/customers_basket_attributes/:id').get(get_customers_basket_attributes_byid);	
	router.route('/customers_basket_attributes/create/').post(port_customers_basket_attributes);	
	router.route('/customers_basket_attributes/put/').put(put_customers_basket_attributes);	
	router.route('/customers_basket_attributes/del/').delete(delete_customers_basket_attributes);	
	 	
		
	export default router;