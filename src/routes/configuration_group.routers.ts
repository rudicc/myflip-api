import { Router } from 'express'	
	import { 	
	      get_configuration_group_all  	
	    , get_configuration_group_byid  	
	    , port_configuration_group  	
	    , put_configuration_group  	
	    , delete_configuration_group   	
	} from '../controllers/configuration_group.controllers';	
		
		
	const router = Router();	
		
	router.route('/configuration_group/getall/').get(get_configuration_group_all);	
	router.route('/configuration_group/:id').get(get_configuration_group_byid);	
	router.route('/configuration_group/create/').post(port_configuration_group);	
	router.route('/configuration_group/put/').put(put_configuration_group);	
	router.route('/configuration_group/del/').delete(delete_configuration_group);	
	 	
		
	export default router;