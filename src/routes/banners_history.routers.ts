import { Router } from 'express'	
	import { 	
	      get_banners_history_all  	
	    , get_banners_history_byid  	
	    , port_banners_history  	
	    , put_banners_history  	
	    , delete_banners_history   	
	} from '../controllers/banners_history.controllers';	
		
		
	const router = Router();	
		
	router.route('/banners_history/getall/').get(get_banners_history_all);	
	router.route('/banners_history/:id').get(get_banners_history_byid);	
	router.route('/banners_history/create/').post(port_banners_history);	
	router.route('/banners_history/put/').put(put_banners_history);	
	router.route('/banners_history/del/').delete(delete_banners_history);	
	 	
		
	export default router;