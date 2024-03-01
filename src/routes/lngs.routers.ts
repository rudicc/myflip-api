import { Router } from 'express'	
	import { 	
	      get_lang 		
	} from '../controllers/lngs.controllers';	
		
		
	const router = Router();	
		
	router.route('/lng/:id').get(get_lang);	
 	 			
	export default router;