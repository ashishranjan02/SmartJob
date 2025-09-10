import recruiter from "../Model/Recruiter.Model.js";


export const createRecruiter = async (req, res) => {
    console.log("Req body:", req.body);
    console.log("Req file:", req.file);

    try {
        const {
            firstName, lastName, gender, email, phoneNo,
            currentLocation, description, totalExperience,
            level, status} = req.body;

        // 1. Required fields check
        if (!firstName || !lastName || !gender || !email || !phoneNo ||
            !currentLocation || !description || !totalExperience ||
            !level || !status) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // 3. Duplicate check
        const existingRecruiter = await recruiter.findOne({ email });
        if (existingRecruiter) {
            return res.status(409).json({ message: "Recruiter already exists" });
        }

        // 4. Profile photo (safe check)
        const recruiterImage = req.file?.recruiterImage?.[0]?.path;

        // 6. Save recruiter
        const saveRecruiter = new recruiter({
            firstName, lastName, gender, email, phoneNo,
            currentLocation, description, totalExperience,
            level, recruiterImage, status
        });

        await saveRecruiter.save();

        res.status(201).json({ message: "Register Successfully" });
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

export const getAllRecruiter = async(req, res) => {
    try{
        const allRecruiter = await recruiter.find()
        res.status(200).json(allRecruiter)

        if(!allRecruiter){
            res.status(400).json({message:'Recruiter not Found'})
        }
    }
    catch (error){
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

export const getRecruiterById = async(req, res) =>{
  const {recruiterId} = req.params;
  
  if(!recruiterId){
    return res.status(400).json({message: "Recruiter ID is required"});
  }
  try{
    const viewRecruiter = await recruiter.findOne({recruiterId});
    res.status(200).json(viewRecruiter)

    if(!viewRecruiter){
      return res.status(400).json({message: 'Recruiter not find with recruiterId'})
    }
  }
  catch(error){
    console.error(error)
    res.status(500).json({message: error.message})

  }
  
}

export const updateRecruiter = async (req, res) => {
  const { recruiterId } = req.params;
  try {
    const updateData = { ...req.body };
    if (req.file) { 
      updateData.recruiterImage = req.file.path;
    }

    const existingRecruiter = await recruiter.findOneAndUpdate({ recruiterId }, updateData,
      { new: true, runValidators: true }
    )

    if (!existingRecruiter) {
      return res.status(404).json({ message: "Recruiter not found" });
    }

    res.status(200).json({ message: "Recruiter updated successfully", recruiter: existingRecruiter });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};


export const updateRecruiterStatus = async (req, res) => {

  const { recruiterId } = req.params;
  const { status } = req.body; 

  if (!status) {
    return res.status(400).json({ message: "Status is required" });
  }

  let updateFields = { status: status.charAt(0).toUpperCase() + status.slice(1).toLowerCase() };

  switch (status.toLowerCase()) {
    case "active":
      updateFields = { ...updateFields, activeRecruiter: true, deactiveRecruiter: false, blockedRecruiter: false };
      break;
    case "deactive":
      updateFields = { ...updateFields, activeRecruiter: false, deactiveRecruiter: true, blockedRecruiter: false };
      break;
    case "blocked":
      updateFields = { ...updateFields, activeRecruiter: false, deactiveRecruiter: false, blockedRecruiter: true };
      break;
    default:
      return res.status(400).json({ message: "Invalid status type" });
  }

  try {
    const updateStatus = await recruiter.findOneAndUpdate(
      { recruiterId },
      updateFields,
      { new: true, runValidators: true }
    );

    if (!updateStatus) {
      return res.status(404).json({ message: "Recruiter not found" });
    }

    return res.status(200).json({message: "Recruiter status updated successfully", data: updateStatus});
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};


export const getAllRecruiterCount = async (req, res) => {
  try {
    const totalCount = await recruiter.countDocuments();
    res.status(200).json({message:"Total Recruiter", Count: totalCount});
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({message: error.message});
  }
};

export const getActiveRecruiterCount = async(req, res) =>{
  try{
      const activeRecruiter = await recruiter.countDocuments({activeRecruiter: true})
      return res.status(200).json({message: "Active Recruiter", Count: activeRecruiter })
  }
  catch (error) {
    console.error(error);
    res.status(500).json({message: error.message});
  }
}

export const getDectiveRecruiterCount = async(req, res) =>{
  try{
      const deactiveRecruiter = await recruiter.countDocuments({deactiveRecruiter: true})
      return res.status(200).json({message: "Deactive Recruiter", Count: deactiveRecruiter })
  }
  catch (error) {
    console.error(error);
    res.status(500).json({message: error.message});
  }
}

export const getBlockedRecruiterCount = async(req, res) =>{
  try{
      const blockedRecruiter = await recruiter.countDocuments({blockedRecruiter: true})
      return res.status(200).json({message: "Blocked Recruiter", Count: blockedRecruiter })
  }
  catch (error) {
    console.error(error);
    res.status(500).json({message: error.message});
  }
}