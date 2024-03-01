import { Router } from 'express'	
	import { 	
	      get_products_all  	
	    , get_products_byid  	
	    , port_products  	
	    , put_products  	
	    , delete_products   
		, get_products_by_manufacturers_id,	
		update_products_status,
		put_products_pdf,
		put_products_css,
		put_products_html,
		put_products_css_unzip
	} from '../controllers/products.controllers';	
import { get_products_home_bylikemodel, get_products_home_all , get_products_home_byid} from '../controllers/products_home.controllers';
import { get_filpebook_bypid } from '../controllers/filpebook.controllers';


		
	const router = Router();	
	//get home  get_products_home_bylikemodel
	router.route('/products/getlikemodel/:model').get(get_products_home_bylikemodel);	
    router.route('/products/getshp/').get(get_products_home_all);	
	router.route('/products/homeproducts').get(get_products_home_all);
	//
	
	router.route('/products/getall/').get(get_products_all);	
	router.route('/products/:id').get(get_products_byid);	
	router.route('/products/manufacturers_id/:id').get(get_products_by_manufacturers_id);	
	router.route('/products/create/').post(port_products);	
	router.route('/products/put/').put(put_products);	
	router.route('/products/putproductsstatus/').put(update_products_status);	
	router.route('/products/del/:id').delete(delete_products);	

	//pdf
	//put_products_pdf
	router.route('/productspdf/put/').put(put_products_pdf);

	//css
	router.route('/productscss/put/').put(put_products_css);
	router.route('/productscss/putunzip/').put(put_products_css_unzip); //zip
	//html	 	
	router.route('/productshtml/put/').put(put_products_html);

	//filpebook
	router.route('/filpebooks/pid/:id').get(get_filpebook_bypid);
		
	export default router;