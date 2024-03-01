import { Router } from 'express'	
	import { 	
	      get_specials_all  	
	    , get_specials_byid  	
	    , port_specials  	
	    , put_specials  	
	    , delete_specials   	
	} from '../controllers/specials.controllers';	
		
		
	const router = Router();	
		
	router.route('/specials/getall/').get(get_specials_all);	
	router.route('/specials/:id').get(get_specials_byid);	
	router.route('/specials/create/').post(port_specials);	
	router.route('/specials/put/').put(put_specials);	
	router.route('/specials/del/').delete(delete_specials);	
	 	
		
	export default router;