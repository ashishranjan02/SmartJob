import { configureStore} from '@reduxjs/toolkit';
import jobReducer from '../features/Admin/Job/jobSlice.js'
import recruiterReducer from '../features/Admin/recruiter/recruiterSlice.js'

export const store = configureStore({
  reducer: {
    job: jobReducer,
    recruiter: recruiterReducer,
  },
});

