import { Router } from 'express'	
	import { 	
	      get_orders_all  	
	    , get_orders_byid  	
	    , port_orders  	
	    , put_orders  	
	    , delete_orders   	
	} from '../controllers/orders.controllers';	
import { delete_orders_basket
	, get_orders_basket_all
	, get_orders_basket_byid
	, get_orders_bassket_byordersid_cutomerid
	, port_orders_basket, put_orders_basket_billing_img_receipt 
} from '../controllers/orders_basket.controllers';
		
		
	const router = Router();	
		
	router.route('/orders/getall/').get(get_orders_all);	
	router.route('/orders/:id').get(get_orders_byid);	
	router.route('/orders/create/').post(port_orders);	
	router.route('/orders/put/').put(put_orders);	
	router.route('/orders/del/').delete(delete_orders);	
	 
	//orders basket
	router.route('/orders_basket/getall/').get(get_orders_basket_all);	
	router.route('/orders_basket/:id').get(get_orders_basket_byid);	
	router.route('/orders_basket/create/').post(port_orders_basket);	
	router.route('/orders_basket_img/put/').put(put_orders_basket_billing_img_receipt);	
	router.route('/orders_basket/del/').delete(delete_orders_basket);	
		
	//get_orders_bassket_byordersid_cutomerid
	router.route('/orders_basket/getordcus/').post(get_orders_bassket_byordersid_cutomerid);	

	export default router;