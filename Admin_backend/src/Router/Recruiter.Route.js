import express from 'express';
import {createRecruiter, 
    getAllRecruiter, 
    updateRecruiter, 
    getRecruiterById, 
    getAllRecruiterCount, 
    getActiveRecruiterCount,
    updateRecruiterStatus,
    getDectiveRecruiterCount,
    getBlockedRecruiterCount,
} from '../Controller/Recruiter.Details.js';
import { upload } from '../Middleware/multer.middleware.js';
const recuriterRouter = express.Router()

recuriterRouter.post('/create', upload.single("recruiterImage"), createRecruiter)
recuriterRouter.get('/allrecruiter', getAllRecruiter)
recuriterRouter.put('/update/:recruiterId', upload.single("recruiterImage"), updateRecruiter) 
recuriterRouter.get('/view/:recruiterId', getRecruiterById)
recuriterRouter.put('/updatestatus/:recruiterId', upload.none(), updateRecruiterStatus)
recuriterRouter.get('/allcount', getAllRecruiterCount)
recuriterRouter.get('/activecount', getActiveRecruiterCount)
recuriterRouter.get('/deactivecount', getDectiveRecruiterCount)
recuriterRouter.get('/blockedcount', getBlockedRecruiterCount)


export default recuriterRouter;