import { Router } from 'express'	
	import { 	
	      get_customers_basket_all  	
	    , get_customers_basket_byid  	
	    , port_customers_basket  	
	    , put_customers_basket  	
	    , delete_customers_basket   	
	} from '../controllers/customers_basket.controllers';	
		
		
	const router = Router();	
		
	router.route('/customers_basket/getall/').get(get_customers_basket_all);	
	router.route('/customers_basket/:id').get(get_customers_basket_byid);	
	router.route('/customers_basket/create/').post(port_customers_basket);	
	router.route('/customers_basket/put/').put(put_customers_basket);	
	router.route('/customers_basket/del/').delete(delete_customers_basket);	
	 	
		
	export default router;