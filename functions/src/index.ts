import { onCall, HttpsError } from "firebase-functions/v2/https";
import * as admin from "firebase-admin";

// Initialize Firebase Admin
admin.initializeApp();

// Package Management
export const updatePackage = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "User must be authenticated");
  }

  const { category, packageData } = request.data;
  if (!category || !packageData || !packageData.name) {
    throw new HttpsError("invalid-argument", "Missing required fields");
  }

  try {
    await admin
      .firestore()
      .collection("PackageDescriptions")
      .doc(category)
      .set(
        {
          [packageData.name]: packageData,
        },
        { merge: true }
      );

    return { success: true, message: "Package updated successfully" };
  } catch (error) {
    console.error("Update package error:", error);
    throw new HttpsError("internal", "Failed to update package");
  }
});

export const deletePackage = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "User must be authenticated");
  }

  const { category, packageName } = request.data;
  if (!category || !packageName) {
    throw new HttpsError("invalid-argument", "Missing required fields");
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
  } catch (error) {
    console.error("Delete package error:", error);
    throw new HttpsError("internal", "Failed to delete package");
  }
});

export const updateVideo = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "User must be authenticated");
  }

  const { category, videoData } = request.data;
  if (!category || !videoData || !videoData.id) {
    throw new HttpsError("invalid-argument", "Missing required fields");
  }

  try {
    await admin
      .firestore()
      .collection("Videos")
      .doc(category)
      .set(
        {
          [videoData.id]: videoData,
        },
        { merge: true }
      );

    return { success: true, message: "Video updated successfully" };
  } catch (error) {
    console.error("Update video error:", error);
    throw new HttpsError("internal", "Failed to update video");
  }
});

export const updateImage = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "User must be authenticated");
  }

  const { path, newPath } = request.data;
  if (!path || !newPath) {
    throw new HttpsError("invalid-argument", "Missing required fields");
  }

  try {
    const bucket = admin.storage().bucket();
    await bucket.file(path).move(newPath);
    return { success: true, message: "Image updated successfully" };
  } catch (error) {
    console.error("Update image error:", error);
    throw new HttpsError("internal", "Failed to update image");
  }
});
