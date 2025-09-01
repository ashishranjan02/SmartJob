import { configureStore} from '@reduxjs/toolkit';
import jdReducer from '../features/Admin/JdPost/jdSlice.js'
import recruiterReducer from '../features/Admin/recruiter/recruiterSlice.js'

export const store = configureStore({
  reducer: {
    jd: jdReducer,
    recruiter: recruiterReducer,
  },
});

