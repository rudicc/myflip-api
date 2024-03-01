import { Router } from 'express'	
	import { 	
	      get_tax_class_all  	
	    , get_tax_class_byid  	
	    , port_tax_class  	
	    , put_tax_class  	
	    , delete_tax_class   	
	} from '../controllers/tax_class.controllers';	
		
		
	const router = Router();	
		
	router.route('/tax_class/getall/').get(get_tax_class_all);	
	router.route('/tax_class/:id').get(get_tax_class_byid);	
	router.route('/tax_class/create/').post(port_tax_class);	
	router.route('/tax_class/put/').put(put_tax_class);	
	router.route('/tax_class/del/').delete(delete_tax_class);	
	 	
		
	export default router;