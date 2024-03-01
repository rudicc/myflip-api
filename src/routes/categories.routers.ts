import { Router } from 'express'	
	import { 	
	      get_categories_all  	
	    , get_categories_byid  	
	    , port_categories  	
	    , put_categories  	
	    , delete_categories
		, get_categories_selection			
	} from '../controllers/categories.controllers';	
		
	import { get_categories_sort_order,get_categories_topbook } from '../controllers/categories_bysort.controllers';
		
	const router = Router();	
	router.route('/categories/getsort/').get(get_categories_sort_order);
	router.route('/categories/gettopbook/:id').get(get_categories_topbook);
		//

	router.route('/categories/getselection/').get(get_categories_selection);
	router.route('/categories/getall/').get(get_categories_all);	
	router.route('/categories/:id').get(get_categories_byid);	
	router.route('/categories/create/').post(port_categories);	
	router.route('/categories/put/').put(put_categories);	
	router.route('/categories/del/').delete(delete_categories);	
	 	
		
	export default router;