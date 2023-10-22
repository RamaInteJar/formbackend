const FacaultModel = require('../model/Faculty.model');

module.exports = {
  createRequest: async (req, res) => {
    const newRequest = new FacaultModel(req.body);

    try {
      await newRequest.save();
      res.status(201).json({ message: 'Submitted successful' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateRequest: async (req, res) => {
    try {
      //Get requestId from query params
      const requestId = req.query.id;

      //query to model, get request instance
      const request_qs = await FacaultModel.findByIdAndUpdate(
        requestId,
        {
          $set: req.body,
        },
        { new: true }
      );

      if (!request_qs) {
        return res.status(404).json({ message: 'Item does not found' });
      }

      res.status(200).json({ message: 'Item Updated sucesssful' });
    } catch (error) {
      res.status(500).json({ message: message.error });
    }
  },

  deleteRequest: async (req, res) => {
    try {
      //Get requestId from query params
      const requestId = req.query.id;

      //query to model, get request instance
      const request_qs = await FacaultModel.findByIdAndDelete(requestId);

      if (!request_qs) {
        return res.status(404).json({ message: 'Item does not found' });
      }

      res.status(200).json({ message: 'Item Deleted sucesssful' });
    } catch (error) {
      res.status(500).json({ message: message.error });
    }
  },

  getAllRequest: async (req, res) => {
    try {
      const request_qs = await FacaultModel.find();

      if (!request_qs) {
        return res.status(404).json({ message: 'Item does not found' });
      }

      res.status(200).json(request_qs);
    } catch (error) {
      res.status(500).json({ message: message.error });
    }
  },
  getItemRequest: async (req, res) => {
    try {
      //Get requestId from query params
      const requestId = req.query.id;

      //query to model, get request instance
      const request_qs = await FacaultModel.findById(requestId);

      if (!request_qs) {
        return res.status(404).json({ message: 'Item does not found' });
      }

      res.status(200).json(request_qs);
    } catch (error) {
      res.status(500).json({ message: message.error });
    }
  },
};
