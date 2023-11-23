import User from "../../models/user.js";

const UpdateUser = async (userId, data) => {
    try {
        const user = await User.findById({ _id: userId });

        if (!user) {
            throw new Error("User not found");
        }

        const { email, ...rest } = data;

        if (email) {
            throw new Error("Email cannot be updated");
        }

        // Update user
        user.set(rest);

        // Save the updated user
        await user.save();

        return user;
    } catch (error) {
        throw error;
    }
};

export default UpdateUser;
