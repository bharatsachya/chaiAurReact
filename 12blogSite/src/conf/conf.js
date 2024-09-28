const Conf = {
   AppwriteURL:String(import.meta.env.VITE_APPWRITE_URL),
    AppwriteProjectID:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    AppwriteDatabaseID:String(import.meta.env.AppwriteDatabaseID),
    AppwriteCollectionID:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    AppwriteBucketID:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default Conf