const { Sequelize, DataTypes } = require('sequelize').Sequelize;
const sequelize = require("../config/database.js");

const Shift = sequelize.define('Shift', {
    IdShift: {
        type: Sequelize.STRING,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Date: {
        type: Sequelize.DATE,
        allowNull: false
    }
},
    {
        tableName: 'tblShift'
    }
);

const getShifts = async () => {
    try {
        const shifts = await Shift.findAll();
        return shifts;
    }
    catch {
        console.error(err);
        throw err;
    }
};

const getShiftById = async (shiftId) => {
    try {
        const shift = await Shift.findByPk(shiftId);
        return shift;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const createShift = async (shiftData) => {
    try {
        const newShift = await Shift.create(shiftData);
        return newShift;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const updateShift = async (shiftId, shiftData) => {
    try {
        const shift = await Shift.findByPk(shiftId);

        if (!shift) {
            throw new Error('Turno no encontrado');
        }

        await shift.update(shiftData);
        return shift;

    } catch (err) {
        console.error(err);
        throw err;
    }

}

const deleteShift = async (shiftId) => {
    try {
        const shift = await Shift.findByPk(shiftId);

        if (!shift) {
            throw new Error('Turno no encontrado');
        }

        // Eliminar el turno de la base de datos
        await shift.destroy();

        // Obtener la lista actualizada de turnos después de la eliminación
        const updatedShifts = await Shift.findAll();

        return updatedShifts;

    } catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports = {
    getShifts,
    getShiftById,
    createShift,
    updateShift,
    deleteShift
}
