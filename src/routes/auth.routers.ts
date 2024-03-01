import { Router } from 'express'	
	import { 	
		    registers,get_user,signin , validateToken, signinPlunge, signinAddmin, signinUserFilpbook  	
	    // , get_a_byid  	
	    // , port_a  	
	    // , put_a  	
	    // , delete_a   	
	} from '../controllers/auth.controllers';	
import VerifyJWT from '../functions/verify.jwt';
		
		
	const router = Router();	
		
	// router.route('/a/getall/').get(get_a_all);	
	// router.route('/a/:id').get(get_a_byid);	
	// router.route('/a/create/').post(port_a);	
	// router.route('/a/put/').put(put_a);	
	// router.route('/a/del/').delete(delete_a);	
	 
	router.route('/auth/getuser/').get(get_user);

	router.route('/auth/register/').post(registers);

	router.route('/auth/signin/').post(signin);	
		
	router.get('/auth/validate/', VerifyJWT, validateToken);

	//	
	router.route('/auth/signin-plunge/').post(signinPlunge);	
	//	
	router.route('/auth/signin-ad/').post(signinAddmin);	


	//filp book
	router.route('/auth/filpebook/').post(signinUserFilpbook);

	export default router;