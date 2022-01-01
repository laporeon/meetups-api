const Event = require("../models/Event");

class EventController {
  async create(req, res) {
    try {
      const {
        name,
        description,
        location,
        vacancy_limit,
        starts_at,
        finishes_at,
      } = req.body;

      const newEvent = await Event.create({
        name,
        description,
        location,
        vacancy_limit,
        starts_at,
        finishes_at,
      });

      return res.status(201).json(newEvent);
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = new EventController();
