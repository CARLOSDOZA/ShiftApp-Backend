exports.getShifts = async (req, res, next) => {
    try {
        const [rows] = await pool.query('SELECT * FROM `tblShifts`')
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).send('Error al obtener los turnos');
    }
    
}

exports.getShift = async (req, res, next) => {
    shiftId = req.params.shiftId;
    try {
        const [rows] = await pool.query('SELECT * FROM `tblShifts` WHERE `IdShift` = ?', shiftId);
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).send('Error al obtener el turnos');
    }
}

exports.createShift = (req, res, next) => {
    const fecha = req.body.fecha;

    res.status(201).json({
        message: 'Shift created successfully!',
        post: {fecha: new Date().toISOString(),
        }
    });
}

exports.putShift = (req, res, next) => {

}