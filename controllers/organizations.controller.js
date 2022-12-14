const Organization = require('../models/Organization.model');

module.exports.organizationController = {
    getAllOrganization: async (req, res) => {
    try {
        const organizations = await Organization.find();
        res.json(organizations);
    } catch (error) {
        res.json({ error: error.message })
    }
},
    createOrganization: async (req, res) => {
        try {
            const {
                login,
                password,
                requisites,
                contacts,
            } = req.body;
            const organization = await Organization.create({
                login,
                password,
                requisites,
                contacts,
            });
            res.status(200).json(organization);
        } catch (error) {
            res.json({ error: error.message });
        }
    },
    updateOrganization: async (req, res) => {
        try {
            const { login, password, requisites, contacts } = req.body;
            const organization = await Organization.findByIdAndUpdate(req.params.id, {
                login,
                password,
                requisites,
                contacts,
            },
            { new: true })
            
            res.status(200).json(organization);
        } catch (error) {
            res.json({ error: error.message });
        }
    },
    deleteOrganization: async (req, res) => {
        try {
            const organization = await Organization.findByIdAndDelete(req.params.id);
            res.json(organization);
        } catch (error) {
            res.json({ error: error.message })
        }
    }
};