import { Router } from 'express'	
	import { 	
	      get_manufacturers_all  	
	    , get_manufacturers_byid  	
	    , port_manufacturers  	
	    , put_manufacturers  	
	    , delete_manufacturers   	
	} from '../controllers/manufacturers.controllers';	
		
		
	const router = Router();	
		
	router.route('/manufacturers/getall/').get(get_manufacturers_all);	
	router.route('/manufacturers/:id').get(get_manufacturers_byid);	
	router.route('/manufacturers/create/').post(port_manufacturers);	
	router.route('/manufacturers/put/').put(put_manufacturers);	
	router.route('/manufacturers/del/').delete(delete_manufacturers);	
	 	
		
	export default router;