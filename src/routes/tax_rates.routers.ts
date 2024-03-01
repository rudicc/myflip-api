import { Router } from 'express'	
	import { 	
	      get_tax_rates_all  	
	    , get_tax_rates_byid  	
	    , port_tax_rates  	
	    , put_tax_rates  	
	    , delete_tax_rates   	
	} from '../controllers/tax_rates.controllers';	
		
		
	const router = Router();	
		
	router.route('/tax_rates/getall/').get(get_tax_rates_all);	
	router.route('/tax_rates/:id').get(get_tax_rates_byid);	
	router.route('/tax_rates/create/').post(port_tax_rates);	
	router.route('/tax_rates/put/').put(put_tax_rates);	
	router.route('/tax_rates/del/').delete(delete_tax_rates);	
	 	
		
	export default router;