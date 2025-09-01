import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const BASE_URL = 'http://localhost:3300/api/v1/recruiter'

export const createRecruiter = createAsyncThunk(
    'recruiter/create', (async(data, thunkApi) =>{
        try{
            const res = await axios.post(`${BASE_URL}/create`, data)
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
            const res = await axios.get(`${BASE_URL}/allrecruiter`);
            return res.data.data;
        }
        catch(error){
            return thunkApi.rejectWithValue(error.response?.data?.message);
        }
    })
)

export const updateRecruiter = createAsyncThunk(
    'recruiter/update', (async ({recruiterId, data},thunkApi) =>{
        try{
            const res = await axios.put(`${BASE_URL}/recruiterId`, data)
            return res.data.message;
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
        clearviewedRecruiter: (state) =>{
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
            state.list = action.payload
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
    }
})

export const {setFormField, resetForm, addRecruiter, setRecruiter, clearviewedRecruiter} = recruiterSlice;
export default recruiterSlice.reducer;
