import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance as axios } from '../../utils/axios';


export const createRecruiter = createAsyncThunk(
    'recruiter/create', (async(data, thunkApi) =>{
        try{
            const res = await axios.post(`/recruiter/create`, data)
            return res.data.data
        }
        catch(error){
            return thunkApi.rejectWithValue(error.response?.data?.message)
        }
    }) 
)

export const getAllRecruiter = createAsyncThunk(
    'recruiter/allrecruiter', (async(_, thunkApi) =>{
        try{
            const res = await axios.get(`/recruiter/allrecruiter`);
            return res.data;
        }
        catch(error){
            return thunkApi.rejectWithValue(error.response?.data?.message);
        }
    })
)

export const getRecruiterById = createAsyncThunk(
    'recruiter/viewrecruiter', (async(recruiterId, thunkApi) =>{
        try{
            const res = await axios.get(`/recruiter/view/${recruiterId}`)
            return res.data;
        }
        catch(error){
            return thunkApi.rejectWithValue(error.response?.data?.message);
        }
    })
)

export const updateRecruiter = createAsyncThunk(
    'recruiter/update', (async ({recruiterId, data},thunkApi) =>{
        try{
            const res = await axios.put(`/recruiter/update/${recruiterId}`, data)
            return res.data.message;
        }
        catch(error){
            return thunkApi.rejectWithValue(error.response?.data?.message)
        }
    })
)

export const updateStatus = createAsyncThunk(
    'recruiter/updatestatus', (async ({recruiterId, data}, thunkApi) => {
        try{
            const res = await axios.put(`/recruiter/updatestatus/${recruiterId}`, data)
            return res.data.data;
        }
        catch(error){
            return thunkApi.rejectWithValue(error.response?.data?.message)
        }
    })
)

export const getAllRecruiterCount = createAsyncThunk(
    'recruiter/allcount', (async(_, thunkApi) => {
        try{
            const res = await axios.get(`/recruiter/allcount`)
            return res.data.Count;
        }
        catch(error){
            return thunkApi.rejectWithValue(error.response?.data?.message)
        }
    })
)

export const getActiveRecruiterCount = createAsyncThunk(
    'recruiter/activecount', (async(_, thunkApi) =>{
        try{
            const res = await axios.get(`/recruiter/activecount`)
            return res.data.Count;
        }
        catch(error){
            return thunkApi.rejectWithValue(error.response?.data?.message)
        }
    })
)

export const getDectiveRecruiterCount = createAsyncThunk(
    'recruiter/deactivecount', (async(_, thunkApi) =>{
        try{
            const res = await axios.get(`/recruiter/deactivecount`)
            return res.data.Count;
        }
        catch(error){
            return thunkApi.rejectWithValue(error.response?.data?.message)
        }
    })
)

export const getBlockedRecruiterCount = createAsyncThunk(
    'recruiter/blockedcount', (async(_, thunkApi) =>{
        try{
            const res = await axios.get(`/recruiter/blockedcount`)
            return res.data.Count;
        }
        catch(error){
            return thunkApi.rejectWithValue(error.response?.data?.message)
        }
    })
)

const initialState = {
    list: [],
    form: {
        firstName:'',
        lastName:'',
        gender:'',
        email:'',
        phoneNo:'',
        currentLocation:'',
        description:'',
        totalExperience:'',
        level:'',
        recruiterImage:'',
    },
    status:'idle',
    error: null,
    viewedProfile: null,

    totalCount: 0,
    activeCount: 0,
    deactiveCount: 0,
    loading: false,
}

const recruiterSlice = createSlice({
    name:'recruiter',
    initialState,
    reducers:{
        setFormField: (state, action) =>{
            const{field, value} = action.payload;
            state.form[field] = value;
        },
        resetForm: (state) =>{
            state.form = initialState.form;
        },
        addRecruiter: (state, action) =>{
            state.list.push(action.payload);
        },
        setRecruiter:(state, action) =>{
            state.list = action.payload
        },
        clearViewedRecruiter: (state) =>{
            state.viewedRecruiter = null;
        }
    },
    extraReducers: (builder) =>{
        builder
        .addCase(createRecruiter.pending, (state) =>{
            state.status = 'loading';
            state.error = null;
        })
        .addCase(createRecruiter.fulfilled, (state, action) =>{
            state.status = 'succeeded';
            state.error = null;
        })
        .addCase(createRecruiter.rejected, (state, action) =>{
            state.status = 'failed';
            state.error = action.payload;
        })
        .addCase(getAllRecruiter.fulfilled, (state, action) =>{
            state.status = 'succeeded';
            state.list = action.payload;
        })
        .addCase(getAllRecruiter.rejected, (state, action) =>{
            state.status = 'failed';
            state.error = action.payload
        })
        .addCase(updateRecruiter.pending, (state) =>{
            state.status = 'loading';
            state.error = null;
        })
        .addCase(updateRecruiter.fulfilled, (state, action) =>{
            state.status = 'succeeded';
            state.error = null;
        })
        .addCase(updateRecruiter.rejected, (state, action) =>{
            state.status = 'failed';
            state.error = action.payload;
        })
        .addCase(getRecruiterById.pending, (state) =>{
            state.loading = true;
            state.error = null;
        })
        .addCase(getRecruiterById.fulfilled, (state, action) =>{
            state.loading = false;
            state.viewedRecruiter = action.payload;
            state.form ={
                ...state.form,
                ...action.payload
            }
        })
        .addCase(getRecruiterById.rejected, (state, action) =>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(updateStatus.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.error = null;

            const updatedRecruiter = action.payload;
            const index = state.list.findIndex(recruiter => recruiter.recruiterId === updatedRecruiter.recruiterId);
            if (index !== -1) {
                state.list[index] = updatedRecruiter; 
            }
        })
        .addCase(updateStatus.pending, (state) =>{
            state.loading = true;
            state.error = null;
        })
        .addCase(getAllRecruiterCount.fulfilled, (state, action) =>{
            state.status = 'succeeded';
            state.totalRecruiter = action.payload;
            state.loading = false;
        })
        .addCase(getAllRecruiterCount.pending, (state) =>{
            state.loading = true;
            state.error = null;  
        })
        .addCase(getAllRecruiterCount.rejected, (state, action) =>{
            state.status = 'failed';
            state.error = action.payload;
            state.loading = false;
        })
        .addCase(getActiveRecruiterCount.fulfilled, (state, action) =>{
            state.status = 'succeeded';
            state.activeRecruiter = action.payload;
            state.loading = false;
        })
        .addCase(getActiveRecruiterCount.pending, (state) =>{
            state.loading = true;
            state.error = null;  
        })
        .addCase(getActiveRecruiterCount.rejected, (state, action) =>{
            state.status = 'failed';
            state.error = action.payload;
            state.loading = false;
        })
        .addCase(getDectiveRecruiterCount.fulfilled, (state, action) =>{
            state.status = 'succeeded';
            state.deactiveRecruiter = action.payload;
            state.loading = false;
        })
        .addCase(getDectiveRecruiterCount.pending, (state) =>{
            state.loading = true;
            state.error = null;  
        })
        .addCase(getDectiveRecruiterCount.rejected, (state, action) =>{
            state.status = 'failed';
            state.error = action.payload;
            state.loading = false;
        })
        .addCase(getBlockedRecruiterCount.fulfilled, (state, action) =>{
            state.status = 'succeeded';
            state.blockedRecruiter = action.payload;
            state.loading = false;
        })
        .addCase(getBlockedRecruiterCount.pending, (state) =>{
            state.loading = true;
            state.error = null;  
        })
        .addCase(getBlockedRecruiterCount.rejected, (state, action) =>{
            state.status = 'failed';
            state.error = action.payload;
            state.loading = false;
        })

    }
})

export const {setFormField, resetForm, addRecruiter, setRecruiter, clearviewedRecruiter} = recruiterSlice;
export default recruiterSlice.reducer;
