const Item = require('../models/itemModel');

const itemController = {
    getAllItems: async (req, res) => {
        try {
            const items = await Item.find();
            res.json(items);
        } catch (error) {
            console.error('Error getting items: ', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    addItem: async (req, res) => {
        try {
            const newItem = new Item(req.body);
            await newItem.save();
            res.json(newItem);
        } catch (error) {
            console.error('Error adding item: ', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};

module.exports = itemController;
