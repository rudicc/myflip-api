import { Router } from 'express'	
	import { 	
	      get_sessions_all  	
	    , get_sessions_byid  	
	    , port_sessions  	
	    , put_sessions  	
	    , delete_sessions   	
	} from '../controllers/sessions.controllers';	
		
		
	const router = Router();	
		
	router.route('/sessions/getall/').get(get_sessions_all);	
	router.route('/sessions/:id').get(get_sessions_byid);	
	router.route('/sessions/create/').post(port_sessions);	
	router.route('/sessions/put/').put(put_sessions);	
	router.route('/sessions/del/').delete(delete_sessions);	
	 	
		
	export default router;