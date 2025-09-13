import { configureStore} from '@reduxjs/toolkit';
import jobReducer from '../features/Job/jobSlice.js'
import recruiterReducer from '../features/recruiter/recruiterSlice.js'

export const store = configureStore({
  reducer: {
    job: jobReducer,
    recruiter: recruiterReducer,
  },
});

