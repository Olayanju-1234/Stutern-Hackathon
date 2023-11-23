import Medicine from "../../../models/medicine.js";

const ScheduleMedicine = async (userId, data) => {
    try {
        const medicine = await Medicine.create({
            ...data,
            user: userId,
        });

        return medicine;
    } catch (error) {
        throw error;
    }
};

export default ScheduleMedicine;
