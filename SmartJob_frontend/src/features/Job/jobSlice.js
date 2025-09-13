import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance as axios } from '../../utils/axios';

export const createPost = createAsyncThunk(
    'job/createPost', (async(data, thunkApi) =>{
        try{
            const res = await axios.post(`/job/create`, data)
            return res.data.data
        }
        catch(error){
            return thunkApi.rejectWithValue(error.response?.data?.message)
        }
    })
) 

export const getAllPost = createAsyncThunk(
  'job/getAllPost', async (_, thunkApi) => {
    try {
      const res = await axios.get(`/job/getAll`);
      return res.data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data?.message);
    }
  }
);

export const updatePost = createAsyncThunk(
    'job/updatePost', (async({id, data}, thunkApi) =>{
        try{
            const res = await axios.put(`/job/update/${id}`, data)
            return res.data.message
        }
        catch(error){
            return thunkApi.rejectWithValue(error.response?.data?.message)
        }
    })
)

export const deletePost = createAsyncThunk(
    'job/deletePost', (async (id, thunkApi) =>{
        try{
            const res = await axios.delete(`/job/delete/${id}`)
            return id;
        }
        catch(error){
            return thunkApi.rejectWithValue(error.response?.data?.message)
        }
    })
)

const initialState = {
    list: [],
    form:{
        companyName:"", 
        jobTitle:"", 
        department:"", 
        requiredSkill:"", 
        eligiblity:"", 
        location:"", 
        jobProfileCTC:"", 
        jobType:"", 
        workOption:"", 
        experienceLevel:"", 
        deadline:"", 
        jobDescription:"",
    },
    status:'idle',
    error: null,
    viewedPost: null,
}

const jobSlice = createSlice({
    name:'job',
    initialState,
    reducers:{
        setFormField: (state, action) =>{
            const{field, value} = action.payload;
            state.form[field] = value;
        },
        resetForm: (state) =>{
            state.form = initialState.form;
        },
        addPost: (state, action) =>{
            state.list.push(action.payload);
        },
        setPost:(state, action) =>{
            state.list = action.payload
        },
        clearviewedPost: (state) =>{
            state.viewedPost = null;
        }
    },
    extraReducers: (builder) =>{
        builder
        .addCase(createPost.pending, (state) =>{
            state.status = 'loading';
            state.error = null;
        })
        .addCase(createPost.fulfilled, (state, action) =>{
            state.status = 'succeeded';
            state.error = null;
        })
        .addCase(createPost.rejected, (state, action) =>{
            state.status = 'failed';
            state.error = action.payload;
        })
        .addCase(getAllPost.fulfilled, (state, action) =>{
            state.status = 'succeeded';
            state.list = action.payload
        })
        .addCase(getAllPost.rejected, (state, action) =>{
            state.status = 'failed';
            state.error = action.payload
        })
        .addCase(updatePost.pending, (state) =>{
            state.status = 'loading';
            state.error = null;
        })
        .addCase(updatePost.fulfilled, (state, action) =>{
            state.status = 'succeeded';
            state.error = null;
        })
        .addCase(updatePost.rejected, (state, action) =>{
            state.status = 'failed';
            state.error = action.payload;
        })
        .addCase(deletePost.fulfilled, (state, action) =>{
            state.list = state.list.filter(job => job._id !== action.payload);
        })
    }
})

export const {setFormField, resetForm, addPost, setPost, clearviewedPost} = jobSlice;
export default jobSlice.reducer;