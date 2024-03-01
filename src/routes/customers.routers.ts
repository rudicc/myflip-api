import { Router } from 'express'	
	import { 	
	      get_customers_all  	
	    , get_customers_byid  	
	    , port_customers  	
	    , put_customers  	
	    , delete_customers   
		, get_customers_Addressbook_byid,	
		get_customers_ismember_all,
		port_customers_ismember,
		put_customers_ismember,
		delete_customers_ismember,
		get_customers_ismember_byId
	} from '../controllers/customers.controllers';	
		
		
	const router = Router();	
		
	router.route('/customers/getall/').get(get_customers_all);	
	router.route('/customers/:id').get(get_customers_byid);	
	router.route('/customers/cusaddr/:id').get(get_customers_Addressbook_byid);	
	router.route('/customers/create/').post(port_customers);	
	router.route('/customers/put/').put(put_customers);	
	router.route('/customers/del/').delete(delete_customers);	
	 	
	//member
	router.route('/cusmember/getall/').get(get_customers_ismember_all);	
	router.route('/cusmember/:cusid').get(get_customers_ismember_byId);	
	router.route('/cusmember/create/').post(port_customers_ismember);	
	router.route('/cusmember/put/').put(put_customers_ismember);	
	router.route('/cusmember/del/').delete(delete_customers_ismember);	
	
	export default router;