// schedule-controller.js

const Schedule = require('../models/scheduleSchema.js');

const createSchedule = async (req, res) => {
    try {
        const { subject, teacher, dayOfWeek, startTime, endTime } = req.body;

        const schedule = new Schedule({
            subject,
            teacher,
            dayOfWeek,
            startTime,
            endTime
        });

        const result = await schedule.save();
        res.send(result);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getScheduleByTeacher = async (req, res) => {
    try {
        const schedules = await Schedule.find({ teacher: req.params.id })
            .populate('subject', 'subName')
            .populate('teacher', 'name');

        if (schedules.length > 0) {
            res.send(schedules);
        } else {
            res.send({ message: 'No schedules found' });
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

const getScheduleBySubject = async (req, res) => {
    try {
        const schedules = await Schedule.find({ subject: req.params.id })
            .populate('subject', 'subName')
            .populate('teacher', 'name');

        if (schedules.length > 0) {
            res.send(schedules);
        } else {
            res.send({ message: 'No schedules found' });
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteSchedule = async (req, res) => {
    try {
        const result = await Schedule.findByIdAndDelete(req.params.id);
        res.send(result);
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = { createSchedule, getScheduleByTeacher, getScheduleBySubject, deleteSchedule };
