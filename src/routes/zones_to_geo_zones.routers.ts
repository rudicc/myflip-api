import { Router } from 'express'	
	import { 	
	      get_zones_to_geo_zones_all  	
	    , get_zones_to_geo_zones_byid  	
	    , port_zones_to_geo_zones  	
	    , put_zones_to_geo_zones  	
	    , delete_zones_to_geo_zones   	
	} from '../controllers/zones_to_geo_zones.controllers';	
		
		
	const router = Router();	
		
	router.route('/zones_to_geo_zones/getall/').get(get_zones_to_geo_zones_all);	
	router.route('/zones_to_geo_zones/:id').get(get_zones_to_geo_zones_byid);	
	router.route('/zones_to_geo_zones/create/').post(port_zones_to_geo_zones);	
	router.route('/zones_to_geo_zones/put/').put(put_zones_to_geo_zones);	
	router.route('/zones_to_geo_zones/del/').delete(delete_zones_to_geo_zones);	
	 	
		
	export default router;