import { Router } from 'express'
import {
    captureOrder,
    createorder,
    cancelOrder
} from '../controllers/payment.controller.js';

const router = Router();

router.post('/create-order', createorder)

router.get('/capture-order', captureOrder)

router.get('/cancel-order', cancelOrder)


export default router;