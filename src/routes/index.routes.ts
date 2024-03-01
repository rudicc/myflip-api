import { Router, Request, Response  } from 'express'
import { Index } from '../controllers/index.controller';


const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Chop E-Book a Signin')
})

router.get('/hi', (req: Request, res: Response) => {   
    res.send('hi')    
})

export default router;