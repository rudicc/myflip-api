import { Router } from 'express'	
	import { 	
	      get_countries_all  	
	    , get_countries_byid  	
	    , port_countries  	
	    , put_countries  	
	    , delete_countries   	
	} from '../controllers/countries.controllers';	
		
		
	const router = Router();	
		
	router.route('/countries/getall/').get(get_countries_all);	
	router.route('/countries/:id').get(get_countries_byid);	
	router.route('/countries/create/').post(port_countries);	
	router.route('/countries/put/').put(put_countries);	
	router.route('/countries/del/').delete(delete_countries);	
	 	
		
	export default router;