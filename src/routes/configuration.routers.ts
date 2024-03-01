import { Router } from 'express'	
	import { 	
	      get_configuration_all  	
	    , get_configuration_byid  	
	    , port_configuration  	
	    , put_configuration  	
	    , delete_configuration   	
	} from '../controllers/configuration.controllers';	
		
		
	const router = Router();	
		
	router.route('/configuration/getall/').get(get_configuration_all);	
	router.route('/configuration/:id').get(get_configuration_byid);	
	router.route('/configuration/create/').post(port_configuration);	
	router.route('/configuration/put/').put(put_configuration);	
	router.route('/configuration/del/').delete(delete_configuration);	
	 	
		
	export default router;