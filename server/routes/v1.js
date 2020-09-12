import express from 'express';
import usersRoute from './userRoute';

const router = express.Router();

router.use('/v1', usersRoute);

export default router;
