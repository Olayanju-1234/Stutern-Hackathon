import MedicDetails from '../../../models/medicdetails.js';

const UpdateMedicDetails = async (userId, data) => {
    try {
        let medicDetails = await MedicDetails.findOne({ user: userId });

        if (!medicDetails) {
            medicDetails = await MedicDetails.create({ user: userId, ...data });
        }

        medicDetails.set(data);

        await medicDetails.save();

        return medicDetails;
    } catch (error) {
        throw error;
    }
};

export default UpdateMedicDetails;