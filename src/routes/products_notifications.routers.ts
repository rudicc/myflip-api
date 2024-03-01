import { Router } from 'express'	
	import { 	
	      get_products_notifications_all  	
	    , get_products_notifications_byid  	
	    , port_products_notifications  	
	    , put_products_notifications  	
	    , delete_products_notifications   	
	} from '../controllers/products_notifications.controllers';	
		
		
	const router = Router();	
		
	router.route('/products_notifications/getall/').get(get_products_notifications_all);	
	router.route('/products_notifications/:id').get(get_products_notifications_byid);	
	router.route('/products_notifications/create/').post(port_products_notifications);	
	router.route('/products_notifications/put/').put(put_products_notifications);	
	router.route('/products_notifications/del/').delete(delete_products_notifications);	
	 	
		
	export default router;