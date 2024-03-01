import { Router } from 'express'	
	import { 	
	      get_orders_status_history_all  	
	    , get_orders_status_history_byid  	
	    , port_orders_status_history  	
	    , put_orders_status_history  	
	    , delete_orders_status_history   	
	} from '../controllers/orders_status_history.controllers';	
		
		
	const router = Router();	
		
	router.route('/orders_status_history/getall/').get(get_orders_status_history_all);	
	router.route('/orders_status_history/:id').get(get_orders_status_history_byid);	
	router.route('/orders_status_history/create/').post(port_orders_status_history);	
	router.route('/orders_status_history/put/').put(put_orders_status_history);	
	router.route('/orders_status_history/del/').delete(delete_orders_status_history);	
	 	
		
	export default router;