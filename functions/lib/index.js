"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateImage = exports.updateVideo = exports.deletePackage = exports.updatePackage = void 0;
const https_1 = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
// Initialize Firebase Admin
admin.initializeApp();
// Package Management
exports.updatePackage = (0, https_1.onCall)(async (request) => {
    if (!request.auth) {
        throw new https_1.HttpsError("unauthenticated", "User must be authenticated");
    }
    const { category, packageData } = request.data;
    if (!category || !packageData || !packageData.name) {
        throw new https_1.HttpsError("invalid-argument", "Missing required fields");
    }
    try {
        await admin
            .firestore()
            .collection("PackageDescriptions")
            .doc(category)
            .set({
            [packageData.name]: packageData,
        }, { merge: true });
        return { success: true, message: "Package updated successfully" };
    }
    catch (error) {
        console.error("Update package error:", error);
        throw new https_1.HttpsError("internal", "Failed to update package");
    }
});
exports.deletePackage = (0, https_1.onCall)(async (request) => {
    if (!request.auth) {
        throw new https_1.HttpsError("unauthenticated", "User must be authenticated");
    }
    const { category, packageName } = request.data;
    if (!category || !packageName) {
        throw new https_1.HttpsError("invalid-argument", "Missing required fields");
    }
    try {
        await admin
            .firestore()
            .collection("PackageDescriptions")
            .doc(category)
            .update({
            [packageName]: admin.firestore.FieldValue.delete(),
        });
        return { success: true, message: "Package deleted successfully" };
    }
    catch (error) {
        console.error("Delete package error:", error);
        throw new https_1.HttpsError("internal", "Failed to delete package");
    }
});
exports.updateVideo = (0, https_1.onCall)(async (request) => {
    if (!request.auth) {
        throw new https_1.HttpsError("unauthenticated", "User must be authenticated");
    }
    const { category, videoData } = request.data;
    if (!category || !videoData || !videoData.id) {
        throw new https_1.HttpsError("invalid-argument", "Missing required fields");
    }
    try {
        await admin
            .firestore()
            .collection("Videos")
            .doc(category)
            .set({
            [videoData.id]: videoData,
        }, { merge: true });
        return { success: true, message: "Video updated successfully" };
    }
    catch (error) {
        console.error("Update video error:", error);
        throw new https_1.HttpsError("internal", "Failed to update video");
    }
});
exports.updateImage = (0, https_1.onCall)(async (request) => {
    if (!request.auth) {
        throw new https_1.HttpsError("unauthenticated", "User must be authenticated");
    }
    const { path, newPath } = request.data;
    if (!path || !newPath) {
        throw new https_1.HttpsError("invalid-argument", "Missing required fields");
    }
    try {
        const bucket = admin.storage().bucket();
        await bucket.file(path).move(newPath);
        return { success: true, message: "Image updated successfully" };
    }
    catch (error) {
        console.error("Update image error:", error);
        throw new https_1.HttpsError("internal", "Failed to update image");
    }
});
//# sourceMappingURL=index.js.map