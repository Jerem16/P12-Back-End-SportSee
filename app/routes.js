const express = require("express");
const idx = require("idx");

const router = express.Router();

const {
    getAllUserIds,
    getUserById,
    getUserActivityById,
    getUserAverageSession,
    getUserPerformance,
} = require("./models");

const { handleNoUserData } = require("./middleware");

router.get("/users", (req, res) => {
    const allUserIds = getAllUserIds();
    if (!allUserIds || allUserIds.length === 0) {
        return res.status(404).json({ message: "No users found" });
    }
    return res.status(200).json(allUserIds);
});

router.get("/user/:id", (req, res) => {
    const userId = idx(req, (_) => _.params.id);
    const userData = getUserById(Number(userId));

    return handleNoUserData(res, userData);
});

router.get("/user/:id/activity", (req, res) => {
    const userId = idx(req, (_) => _.params.id);
    const userData = getUserActivityById(Number(userId));

    return handleNoUserData(res, userData);
});

router.get("/user/:id/average-sessions", (req, res) => {
    const userId = idx(req, (_) => _.params.id);
    const userData = getUserAverageSession(Number(userId));

    return handleNoUserData(res, userData);
});

router.get("/user/:id/performance", (req, res) => {
    const userId = idx(req, (_) => _.params.id);
    const userData = getUserPerformance(Number(userId));

    return handleNoUserData(res, userData);
});

module.exports = router;
