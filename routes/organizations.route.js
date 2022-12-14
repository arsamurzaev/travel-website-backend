const {
  organizationController,
} = require("../controllers/organizations.controller");
const { Router } = require("express");

const router = Router();

router.get("/organization", organizationController.getAllOrganization);
router.post("/organization", organizationController.createOrganization);
router.patch("/organization/:id", organizationController.updateOrganization);
router.delete("/organization/:id", organizationController.deleteOrganization);

module.exports = router;
