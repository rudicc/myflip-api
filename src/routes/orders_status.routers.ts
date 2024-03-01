import { Router } from 'express'	
	import { 	
	      get_orders_status_all  	
	    , get_orders_status_byid  	
	    , port_orders_status  	
	    , put_orders_status  	
	    , delete_orders_status   	
	} from '../controllers/orders_status.controllers';	
		
		
	const router = Router();	
		
	router.route('/orders_status/getall/').get(get_orders_status_all);	
	router.route('/orders_status/:id').get(get_orders_status_byid);	
	router.route('/orders_status/create/').post(port_orders_status);	
	router.route('/orders_status/put/').put(put_orders_status);	
	router.route('/orders_status/del/').delete(delete_orders_status);	
	 	
		
	export default router;