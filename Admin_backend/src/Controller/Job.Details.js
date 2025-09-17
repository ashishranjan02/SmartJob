import jobPost from "../Model/Job.Model.js";

export const createPost = async (req, res) => {
  try {
    const {
      companyName, jobTitle, department, requiredSkill, eligiblity,
      location, jobProfileCTC, jobType, workOption,
      experienceLevel, deadline, jobDescription
    } = req.body;

    // Validation
    if (!companyName || !jobTitle || !department || !requiredSkill || !eligiblity ||
        !location || !jobProfileCTC || !jobType || !workOption ||
        !experienceLevel || !deadline || !jobDescription) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Strip time for fair comparison
    const today = new Date();
    const deadlineDate = new Date(deadline);
    
    if (deadlineDate < today) {
      return res.status(400).json({ message: 'Apply date must be today or in the future' });
    }

    const existPost = await jobPost.findOne({ companyName, jobTitle, department, location });
    if (existPost) {
      return res.status(400).json({ message: 'JD Post already exists' });
    }

    // Save
    const createJd = new jobPost({
      companyName, jobTitle, department, requiredSkill, eligiblity,
      location, jobProfileCTC, jobType, workOption,
      experienceLevel, deadline: deadlineDate, jobDescription
    });

    const saveJd = await createJd.save();
    const status = saveJd.deadline < today ? "Expired" : "Active";

    return res.status(201).json({
      success: true,
      data: { ...saveJd._doc, status },
      message: "JD created successfully"
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};


export const getAllPost = async (req, res) => {
  try {
    const getAll = await jobPost.find();

    if (!getAll.length) {
      return res.status(404).json({ message: 'No job posts found' });
    }

    return res.status(200).json({
      success: true,
      data: getAll
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};


export const updateJob = async(req, res) => {
    try{
        const{deadline, companyName, jobTitle, department, location} = req.body;

        const updatePost = await jobPost.findByIdAndUpdate(req.params.id, req.body, 
           { new: true, runValidators:true}
        );

        if(!updatePost){
            return res.status(404).json({message: 'user not found'})
        }

        if(new Date(deadline) < new Date()){
            return res.status(400).json({message:'Apply date must be in range'})
        }

        const existPost = await jobPost.findOne({companyName, jobTitle, department, location})
            if(existPost){
                return res.status(400).json({message:'Jd Post is alreadyexist'})
            }

        const status = updatePost.deadline < new Date() ? "Expired" : "Active";
        res.status(200).json({message: 'user updated successfully', data:{...updatePost._doc, status}});
    }
    catch(error){
        console.error
        res.status(500).json({message: error.message})
    }
};

export const deletePost = async(req, res) =>{
    try{
        const deletePost = await jobPost.findByIdAndDelete(req.params.id);

        if(!deletePost){
            return res.status(404).json({message: 'user not found'})
        }

        res.status(200).json({message: 'user deleted successfully'})
    }
    catch (error){
        console.error
        res.status(500).json({message: error.message})
    }
};