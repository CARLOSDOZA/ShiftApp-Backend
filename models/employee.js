const { Sequelize, DataTypes } = require('sequelize').Sequelize;
const sequelize = require("../config/database.js");

const Employee = sequelize.define('Employee', {
    IdEmployee: {
        type: Sequelize.INT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Dni: {
        type: Sequelize.INT,
    },
    Nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Cargo: {
        type: Sequelize.STRING,
        allowNull: false
    }
},
    {
        tableName: 'tblEmployee'
    }
);

const getEmployees = async () => {
    try {
        const Employees = await Employee.findAll();
        return Employees;
    }
    catch {
        console.error(err);
        throw err;
    }
};

const getShiftTypesById = async (EmployeeDni) => {
    try {
        const Employee = await Employee.findByPk(EmployeeDni);
        return Employee;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

module.exports = {
    getMedicalCenters,
    getShiftTypesById
}