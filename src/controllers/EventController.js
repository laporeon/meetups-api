const Event = require("../models/Event");

class EventController {
  async list(req, res) {
    try {
      const events = await Event.findAll({});

      if (events.length <= 0)
        return res.status(404).json({ error: "No events were found." });

      return res.status(200).json(events);
    } catch (error) {
      return res.status(404).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
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

  async update(req, res) {
    try {
      const { location } = req.body;
      const { id } = req.params;

      const event = await Event.findByPk(id);

      if (!event) return res.status(404).json({ error: "Event not found." });

      const eventUpdated = await event.update(
        {
          location,
        },
        {
          where: {
            id,
          },
        }
      );

      return res.status(200).json(eventUpdated);
    } catch (error) {
      return res.status(404).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const event = await Event.findByPk(id);
      if (!event) return res.status(404).json({ error: "Event not found." });

      await Event.destroy({
        where: {
          id,
        },
      });
      return res.status(200).send();
    } catch (error) {
      return res.status(404).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

module.exports = new EventController();
