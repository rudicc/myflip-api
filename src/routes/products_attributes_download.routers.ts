import { Router } from 'express'	
	import { 	
	      get_products_attributes_download_all  	
	    , get_products_attributes_download_byid  	
	    , port_products_attributes_download  	
	    , put_products_attributes_download  	
	    , delete_products_attributes_download   	
	} from '../controllers/products_attributes_download.controllers';	
		
		
	const router = Router();	
		
	router.route('/products_attributes_download/getall/').get(get_products_attributes_download_all);	
	router.route('/products_attributes_download/:id').get(get_products_attributes_download_byid);	
	router.route('/products_attributes_download/create/').post(port_products_attributes_download);	
	router.route('/products_attributes_download/put/').put(put_products_attributes_download);	
	router.route('/products_attributes_download/del/').delete(delete_products_attributes_download);	
	 	
		
	export default router;