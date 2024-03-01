import { Router } from 'express'	
	import { 	
	      get_reviews_all  	
	    , get_reviews_byid  	
	    , port_reviews  	
	    , put_reviews  	
	    , delete_reviews   	
	} from '../controllers/reviews.controllers';	
		
		
	const router = Router();	
		
	router.route('/reviews/getall/').get(get_reviews_all);	
	router.route('/reviews/:id').get(get_reviews_byid);	
	router.route('/reviews/create/').post(port_reviews);	
	router.route('/reviews/put/').put(put_reviews);	
	router.route('/reviews/del/').delete(delete_reviews);	
	 	
		
	export default router;