import { Router } from 'express'	
	import { 	
	      get_counter_history_all  	
	    , get_counter_history_byid  	
	    , port_counter_history  	
	    , put_counter_history  	
	    , delete_counter_history   	
	} from '../controllers/counter_history.controllers';	
		
		
	const router = Router();	
		
	router.route('/counter_history/getall/').get(get_counter_history_all);	
	router.route('/counter_history/:id').get(get_counter_history_byid);	
	router.route('/counter_history/create/').post(port_counter_history);	
	router.route('/counter_history/put/').put(put_counter_history);	
	router.route('/counter_history/del/').delete(delete_counter_history);	
	 	
		
	export default router;