import { Router } from 'express'	
	import { 	
	      get_categories_description_all  	
	    , get_categories_description_byid  	
	    , port_categories_description  	
	    , put_categories_description  	
	    , delete_categories_description   	
	} from '../controllers/categories_description.controllers';	
		
		
	const router = Router();	
		
	router.route('/categories_description/getall/').get(get_categories_description_all);	
	router.route('/categories_description/:id').get(get_categories_description_byid);	
	router.route('/categories_description/create/').post(port_categories_description);	
	router.route('/categories_description/put/').put(put_categories_description);	
	router.route('/categories_description/del/').delete(delete_categories_description);	
	 	
		
	export default router;