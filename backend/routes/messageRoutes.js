const express = require("express");
const {
  allMessages,
  sendMessage,
} = require("../controllers/messageControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/:chatId").get(protect, allMessages); // phải log thì mới gửi được tin nhắn
router.route("/").post(protect, sendMessage);

module.exports = router;
