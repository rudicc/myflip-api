import { Router } from 'express'	
	import { 	
	      get_languages_all  	
	    , get_languages_byid  	
	    , port_languages  	
	    , put_languages  	
	    , delete_languages   	
	} from '../controllers/languages.controllers';	
		
		
	const router = Router();	
		
	router.route('/languages/getall/').get(get_languages_all);	
	router.route('/languages/:id').get(get_languages_byid);	
	router.route('/languages/create/').post(port_languages);	
	router.route('/languages/put/').put(put_languages);	
	router.route('/languages/del/').delete(delete_languages);	
	 	
		
	export default router;