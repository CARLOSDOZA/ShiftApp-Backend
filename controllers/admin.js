const ShiftModel = require('../models/shift');

exports.getShifts = async (req, res, next) => {

    try {
        const shifts = await ShiftModel.getShifts();
        res.status(200).json(shifts);
    } catch (err) {
        res.status(500).send('Error al obtener los turnos');
    }

}

exports.getShift = async (req, res, next) => {
    const shiftId = req.params.shiftId;
    try {
        const shift = await ShiftModel.getShiftById(shiftId);

        if (!shift) {
            return res.status(404).json({ error: 'Turno no encontrado' });
        }

        res.status(200).json(shift);

    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener el turno');
    }
}

exports.createShift = async (req, res, next) => {
    const shiftData = req.body; // Suponiendo que los datos del turno se envían en el cuerpo de la solicitud

    try {
        const newShift = await ShiftModel.createShift(shiftData);
        res.status(201).json(newShift);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al crear el turno');
    }
}

exports.updateShift = async (req, res, next) => {
    const shiftId = req.params.id; // Suponiendo que el ID del turno se pasa como parámetro en la URL
    const shiftData = req.body; // Suponiendo que los datos actualizados del turno se envían en el cuerpo de la solicitud

    try {
        const updatedShift = await ShiftModel.updateShift(shiftId, shiftData);
        res.status(200).json(updatedShift);
    } catch (err) {
        console.error(err);
        if (err.message === 'Turno no encontrado') {
            return res.status(404).json({ error: 'Turno no encontrado' });
        }
        res.status(500).send('Error al actualizar el turno');
    }
}

exports.deleteShift = async (req, res, next) => {
    const shiftId = req.params.id; // Suponiendo que el ID del turno se pasa como parámetro en la URL

    try {
        const updatedShiftList = await ShiftModel.deleteShift(shiftId);
        res.status(204).json(updatedShiftList);
    } catch (err) {
        console.error(err);
        if (err.message === 'Turno no encontrado') {
            return res.status(404).json({ error: 'Turno no encontrado' });
        }
        res.status(500).send('Error al actualizar el turno');
    }
}

