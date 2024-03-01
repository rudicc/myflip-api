import { Router } from 'express'	
	import { 	
	      get_newsletters_all  	
	    , get_newsletters_byid  	
	    , port_newsletters  	
	    , put_newsletters  	
	    , delete_newsletters   	
	} from '../controllers/newsletters.controllers';	
		
		
	const router = Router();	
		
	router.route('/newsletters/getall/').get(get_newsletters_all);	
	router.route('/newsletters/:id').get(get_newsletters_byid);	
	router.route('/newsletters/create/').post(port_newsletters);	
	router.route('/newsletters/put/').put(put_newsletters);	
	router.route('/newsletters/del/').delete(delete_newsletters);	
	 	
		
	export default router;