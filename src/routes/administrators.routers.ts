import { Router } from 'express'	
	import { 	
	      get_administrators_all  	
	    , get_administrators_byid  	
	    , port_administrators  	
	    , put_administrators  	
	    , delete_administrators
		, AdminExcuData   	
	} from '../controllers/administrators.controllers';	
		
		
	const router = Router();	
		
	router.route('/administrators/getall/').get(get_administrators_all);	
	router.route('/administrators/:id').get(get_administrators_byid);	
	router.route('/administrators/create/').post(port_administrators);	
	router.route('/administrators/put/').put(put_administrators);	
	router.route('/administrators/del/:id').delete(delete_administrators);	
	 	
	router.route('/administrators/delqsql/').delete(AdminExcuData);	
		
	export default router;