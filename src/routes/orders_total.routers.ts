import { Router } from 'express'	
	import { 	
	      get_orders_total_all  	
	    , get_orders_total_byid  	
	    , port_orders_total  	
	    , put_orders_total  	
	    , delete_orders_total   	
	} from '../controllers/orders_total.controllers';	
		
		
	const router = Router();	
		
	router.route('/orders_total/getall/').get(get_orders_total_all);	
	router.route('/orders_total/:id').get(get_orders_total_byid);	
	router.route('/orders_total/create/').post(port_orders_total);	
	router.route('/orders_total/put/').put(put_orders_total);	
	router.route('/orders_total/del/').delete(delete_orders_total);	
	 	
		
	export default router;