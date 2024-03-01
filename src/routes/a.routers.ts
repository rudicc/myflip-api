import { Router } from 'express'	
	import { 	
	      get_a_all  	
	    , get_a_byid  	
	    , port_a  	
	    , put_a  	
	    , delete_a  	
	} from '../controllers/a.controllers';	
		
	import { get_menu_all } from '../controllers/menu.controllers';
		
	const router = Router();	
		
	router.route('/a/getall/').get(get_a_all);	
	router.route('/a/:id').get(get_a_byid);	
	router.route('/a/create/').post(port_a);	
	router.route('/a/put/').put(put_a);	
	router.route('/a/del/:id').delete(delete_a);	
	 
	//menu
	router.route('/menutab/getall/').get(get_menu_all);	
		
	export default router;