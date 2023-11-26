import UpdateMedicDetails from '../services/user/medicals/medical-details.js';
import ScheduleMedicine from '../services/user/medicals/schedule-medicine.js';
import CreateReminder from '../services/user/medicals/reminder.js';
import GetAllUserMedicines from '../services/user/medicals/med-list.js';
import { SuccessResponse, ErrorResponse } from '../utils/responseHandler.js';

const ScheduleMedicineController = async (req, res) => {
    const { id } = req.user;
    const data = req.body;

    try {
        const medicine = await ScheduleMedicine(id, data);
        SuccessResponse(res, 'Medicine scheduled successfully', medicine);
    } catch (error) {
        ErrorResponse(res, error.message);
    }
};

const UpdateMedicDetailsController = async (req, res) => {
    const { id } = req.user;
    const data = req.body;

    try {
        const user = await UpdateMedicDetails(id, data);
        SuccessResponse(res, 'Medic details updated successfully', user);
    } catch (error) {
        ErrorResponse(res, error.message);
    }
};

const CreateReminderController = async (req, res) => {
    const { id } = req.user;
    const { medicineId } = req.params;
    const data = req.body;

    try {
        const reminder = await CreateReminder(id, medicineId, data);
        SuccessResponse(res, 'Reminder created successfully', reminder);
    } catch (error) {
        ErrorResponse(res, error.message);
    }
};

const GetAllUserMedicinesController = async (req, res) => {
    const { id } = req.user;

    try {
        const medicines = await GetAllUserMedicines(id);
        SuccessResponse(res, 'All medicines fetched successfully', medicines);
    } catch (error) {
        ErrorResponse(res, error.message);
    }
}


export {
    ScheduleMedicineController,
    UpdateMedicDetailsController,
    CreateReminderController,
    GetAllUserMedicinesController,
};
