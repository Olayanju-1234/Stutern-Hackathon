import UpdateMedicDetails from "../services/user/medicals/medical-details.js";

const UpdateMedicDetailsController = async (req, res) => {
    const { id } = req.user;
    const data = req.body;

    try {
        const user = await UpdateMedicDetails(id, data);
        res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: user
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

export {
    UpdateMedicDetailsController,
}
