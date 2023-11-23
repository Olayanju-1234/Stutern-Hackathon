import UpdateUser from "../services/user/update.js";

const UpdateUserController = async (req, res) => {
    const { id } = req.user;
    const data = req.body;

    console.log(id, data);

    try {
        const user = await UpdateUser(id, data);
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
    UpdateUserController,
}