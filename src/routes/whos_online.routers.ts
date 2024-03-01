import { Router } from 'express'	
	import { 	
	      get_whos_online_all  	
	    , get_whos_online_byid  	
	    , port_whos_online  	
	    , put_whos_online  	
	    , delete_whos_online   	
	} from '../controllers/whos_online.controllers';	
		
		
	const router = Router();	
		
	router.route('/whos_online/getall/').get(get_whos_online_all);	
	router.route('/whos_online/:id').get(get_whos_online_byid);	
	router.route('/whos_online/create/').post(port_whos_online);	
	router.route('/whos_online/put/').put(put_whos_online);	
	router.route('/whos_online/del/').delete(delete_whos_online);	
	 	
		
	export default router;