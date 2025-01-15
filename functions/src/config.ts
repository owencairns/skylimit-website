export const config = {
  maxFileSize: 5 * 1024 * 1024, // 5MB
  allowedFileTypes: ["image/jpeg", "image/png", "video/mp4"],
  storageBucket:
    process.env.STORAGE_BUCKET || "your-default-bucket.appspot.com",
};
