import Medicine from '../../../models/medicine.js';

const GetAllUserMedicines = async (userId) => {
    try {
        const medicines = await Medicine.find({ user: userId });

        return medicines;
    } catch (error) {
        throw error;
    }
};

export default GetAllUserMedicines;
