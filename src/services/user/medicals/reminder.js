import Reminder from '../../../models/reminder.js';
import Medicine from '../../../models/medicine.js';

const CreateReminder = async (userId, data) => {
    try {
        const medicine = await Medicine.findOne({
            user: userId,
            _id: data.medicine,
        });

        if (!medicine) {
            throw new Error('Medicine not found');
        }

        const reminder = await Reminder.create({ ...data });

        return reminder;
    } catch (error) {
        throw error;
    }
};

export default CreateReminder;