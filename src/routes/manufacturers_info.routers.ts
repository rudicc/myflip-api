import { Router } from 'express'	
	import { 	
	      get_manufacturers_info_all  	
	    , get_manufacturers_info_byid  	
	    , port_manufacturers_info  	
	    , put_manufacturers_info  	
	    , delete_manufacturers_info   	
	} from '../controllers/manufacturers_info.controllers';	
		
		
	const router = Router();	
		
	router.route('/manufacturers_info/getall/').get(get_manufacturers_info_all);	
	router.route('/manufacturers_info/:id').get(get_manufacturers_info_byid);	
	router.route('/manufacturers_info/create/').post(port_manufacturers_info);	
	router.route('/manufacturers_info/put/').put(put_manufacturers_info);	
	router.route('/manufacturers_info/del/').delete(delete_manufacturers_info);	
	 	
		
	export default router;