import { Router } from 'express'	
	import { 	
	      get_geo_zones_all  	
	    , get_geo_zones_byid  	
	    , port_geo_zones  	
	    , put_geo_zones  	
	    , delete_geo_zones   	
	} from '../controllers/geo_zones.controllers';	
		
		
	const router = Router();	
		
	router.route('/geo_zones/getall/').get(get_geo_zones_all);	
	router.route('/geo_zones/:id').get(get_geo_zones_byid);	
	router.route('/geo_zones/create/').post(port_geo_zones);	
	router.route('/geo_zones/put/').put(put_geo_zones);	
	router.route('/geo_zones/del/').delete(delete_geo_zones);	
	 	
		
	export default router;