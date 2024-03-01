import { Router } from 'express'	
	import { 	
	      get_orders_products_all  	
	    , get_orders_products_byid  	
	    , port_orders_products  	
	    , put_orders_products  	
	    , delete_orders_products,   	
		get_orders_products_byordersid_cutomerid
	} from '../controllers/orders_products.controllers';	
		
		
	const router = Router();	
		
	router.route('/orders_products/getall/').get(get_orders_products_all);	
	router.route('/orders_products/:id').get(get_orders_products_byid);	
	router.route('/orders_products/create/').post(port_orders_products);	
	router.route('/orders_products/put/').put(put_orders_products);	
	router.route('/orders_products/del/').delete(delete_orders_products);	
	 	
	//get by ordersid customerid
	//get_orders_products_byordersid_cutomerid
	router.route('/ordersid_productsid/ordersproducts/').post(get_orders_products_byordersid_cutomerid);	
	
	
	export default router;