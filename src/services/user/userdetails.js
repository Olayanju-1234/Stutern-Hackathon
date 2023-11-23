import User from "../../models/user.js";

const GetUserDetails = async (userId) => {
    try {
        const user = await User.findById(userId);

        if (!user) {
            throw new Error("User not found");
        }

        return user;
    }
    catch (error) {
        throw error;
    }
}

export default GetUserDetails;