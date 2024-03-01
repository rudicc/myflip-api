import { Router } from 'express'	
	import { 	
	      get_customers_info_all  	
	    , get_customers_info_byid  	
	    , port_customers_info  	
	    , put_customers_info  	
	    , delete_customers_info   	
	} from '../controllers/customers_info.controllers';	
		
		
	const router = Router();	
		
	router.route('/customers_info/getall/').get(get_customers_info_all);	
	router.route('/customers_info/:id').get(get_customers_info_byid);	
	router.route('/customers_info/create/').post(port_customers_info);	
	router.route('/customers_info/put/').put(put_customers_info);	
	router.route('/customers_info/del/').delete(delete_customers_info);	
	 	
		
	export default router;