const Job = require("../Model/NewJobModel");

exports.createJob = async (req, res) => {
    try {
        const { minimumSalary, maximumSalary, applicationDeadline } = req.body;

        if (minimumSalary > maximumSalary) {
            return res.status(400).json({
                success: false,
                message: "Minimum salary cannot be greater than maximum salary"
            });
        }
        let status;
        if (applicationDeadline && new Date(applicationDeadline) < new Date()) {
            status = "Expired";
        }
        const job = new Job({ ...req.body, status });
        await job.save();

        res.status(201).json({
            success: true,
            message: "Job created successfully",
            data: job
        });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};
// Get All Jobs
exports.getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json({ success: true, data: jobs });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// Get Job by ID
exports.getJobById = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) {
            return res.status(404).json({
                success: false,
                message: "Job not found"
            });
        }
        res.status(200).json({ success: true, data: job });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// Update Job
exports.updateJob = async (req, res) => {
    try {
        const { minimumSalary, maximumSalary, applicationDeadline } = req.body || {};

        if (minimumSalary > maximumSalary) {
            return res.status(400).json({
                success: false,
                message: "Minimum salary cannot be greater than maximum salary"
            });
        }
        let status;
        if (applicationDeadline) {
            status = new Date(applicationDeadline) >= new Date() ? "Active" : "Expired";
        }

        const updateData = status ? { ...req.body, status } : req.body;

        const job = await Job.findByIdAndUpdate(req.params.id, updateData, {
            new: true,
            runValidators: true
        });

        if (!job) {
            return res.status(404).json({
                success: false,
                message: "Job not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Job updated successfully",
            data: job
        });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};
exports.deleteJob = async (req, res) => {
    try {
        const job = await Job.findByIdAndDelete(req.params.id);
        if (!job) {
            return res.status(404).json({
                success: false,
                message: "Job not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Job deleted successfully"
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
