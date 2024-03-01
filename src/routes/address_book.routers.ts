import { Router } from 'express'	
	import { 	
	      get_address_book_all  	
	    , get_address_book_byid  	
	    , port_address_book  	
	    , put_address_book  	
	    , delete_address_book
		, get_address_book_bycustomerId  	
	} from '../controllers/address_book.controllers';	
		
		
	const router = Router();	
		
	router.route('/address_book/getall/').get(get_address_book_all);	
	router.route('/address_book/:id').get(get_address_book_byid);
	router.route('/address_book/customer/:id').get(get_address_book_bycustomerId);	
	router.route('/address_book/create/').post(port_address_book);	
	router.route('/address_book/put/').put(put_address_book);	
	router.route('/address_book/del/').delete(delete_address_book);	
	 	
		
	export default router;