import { Router } from 'express'	
	import { 	
	      get_banners_all  	
	    , get_banners_byid  	
	    , port_banners  	
	    , put_banners  	
	    , delete_banners   	
	} from '../controllers/banners.controllers';	
		
		
	const router = Router();	
		
	router.route('/banners/getall/').get(get_banners_all);	
	router.route('/banners/:id').get(get_banners_byid);	
	router.route('/banners/create/').post(port_banners);	
	router.route('/banners/put/').put(put_banners);	
	router.route('/banners/del/').delete(delete_banners);	
	 	
		
	export default router;