import { Router } from 'express'	
	import { 	
	      get_zones_all  	
	    , get_zones_byid  	
	    , port_zones  	
	    , put_zones  	
	    , delete_zones   	
	} from '../controllers/zones.controllers';	
		
		
	const router = Router();	
		
	router.route('/zones/getall/').get(get_zones_all);	
	router.route('/zones/:id').get(get_zones_byid);	
	router.route('/zones/create/').post(port_zones);	
	router.route('/zones/put/').put(put_zones);	
	router.route('/zones/del/').delete(delete_zones);	
	 	
		
	export default router;