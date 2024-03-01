import { Router } from 'express'	
	import { 	
	      get_address_format_all  	
	    , get_address_format_byid  	
	    , port_address_format  	
	    , put_address_format  	
	    , delete_address_format   	
	} from '../controllers/address_format.controllers';	
		
		
	const router = Router();	
		
	router.route('/address_format/getall/').get(get_address_format_all);	
	router.route('/address_format/:id').get(get_address_format_byid);	
	router.route('/address_format/create/').post(port_address_format);	
	router.route('/address_format/put/').put(put_address_format);	
	router.route('/address_format/del/').delete(delete_address_format);	
	 	
		
	export default router;