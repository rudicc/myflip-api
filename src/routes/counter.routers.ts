import { Router } from 'express'	
	import { 	
	      get_counter_all  	
	    , get_counter_byid  	
	    , port_counter  	
	    , put_counter  	
	    , delete_counter   	
	} from '../controllers/counter.controllers';	
		
		
	const router = Router();	
		
	router.route('/counter/getall/').get(get_counter_all);	
	router.route('/counter/:id').get(get_counter_byid);	
	router.route('/counter/create/').post(port_counter);	
	router.route('/counter/put/').put(put_counter);	
	router.route('/counter/del/').delete(delete_counter);	
	 	
		
	export default router;