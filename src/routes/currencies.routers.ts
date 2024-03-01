import { Router } from 'express'	
	import { 	
	      get_currencies_all  	
	    , get_currencies_byid  	
	    , port_currencies  	
	    , put_currencies  	
	    , delete_currencies   	
	} from '../controllers/currencies.controllers';	
		
		
	const router = Router();	
		
	router.route('/currencies/getall/').get(get_currencies_all);	
	router.route('/currencies/:id').get(get_currencies_byid);	
	router.route('/currencies/create/').post(port_currencies);	
	router.route('/currencies/put/').put(put_currencies);	
	router.route('/currencies/del/').delete(delete_currencies);	
	 	
		
	export default router;