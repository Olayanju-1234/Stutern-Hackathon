import Reminder from '../../../models/reminder.js';
import Medicine from '../../../models/medicine.js';

const CreateReminder = async (userId, medicineId, data) => {
    try {
        const medicine = await Medicine.findOne({ _id: medicineId, user: userId });

        if (!medicine) {
            throw new Error('Medicine not found');
        }

        const reminder = (await Reminder.create({ ...data, medicine: medicineId })).populate('medicine');

        return reminder;
    } catch (error) {
        throw error;
    }
};

export default CreateReminder;