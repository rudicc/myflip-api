import { Router } from 'express'	
	import { 	
	      get_reviews_description_all  	
	    , get_reviews_description_byid  	
	    , port_reviews_description  	
	    , put_reviews_description  	
	    , delete_reviews_description   	
	} from '../controllers/reviews_description.controllers';	
		
		
	const router = Router();	
		
	router.route('/reviews_description/getall/').get(get_reviews_description_all);	
	router.route('/reviews_description/:id').get(get_reviews_description_byid);	
	router.route('/reviews_description/create/').post(port_reviews_description);	
	router.route('/reviews_description/put/').put(put_reviews_description);	
	router.route('/reviews_description/del/').delete(delete_reviews_description);	
	 	
		
	export default router;