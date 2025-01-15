"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    maxFileSize: 5 * 1024 * 1024,
    allowedFileTypes: ["image/jpeg", "image/png", "video/mp4"],
    storageBucket: process.env.STORAGE_BUCKET || "your-default-bucket.appspot.com",
};
//# sourceMappingURL=config.js.map