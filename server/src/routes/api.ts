import {Router} from 'express';

import Paths from './constants/Paths';
import userRouter from "./UserRouter";


// **** Variables **** //

const apiRouter = Router();


// Add UserRouter
apiRouter.use(Paths.Users.Base, userRouter);


// **** Export default **** //

export default apiRouter;
