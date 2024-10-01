import { Client, Databases,ID,Storage} from "appwrite";
import Conf from "../conf/conf.js";
import { Query } from "appwrite";
class BLogService{
    client = new Client()
    databases;
    bucket;

    constructor(){
        this.client.setEndpoint(Conf.AppwriteURL).setProject(Conf.AppwriteProjectID)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async postMethod({title,status,content,featuredImage,userID,slug}){
        try{
            return await this.databases.createDocument(Conf.AppwriteDatabaseID,Conf.AppwriteCollectionID,slug,{title,status,content,featuredImage,userID})
        }
        catch(e){
            console.log(e)
        }
    }
    
    async updateMethod({title,status,content,featuredImage,userID,slug}){
        try{
            return await this.databases.updateDocument(Conf.AppwriteDatabaseID,Conf.AppwriteCollectionID,slug,{title,status,content,featuredImage})
        }
        catch(e){
            console.log(e)
        }
    }

    async listMethod(queries=[Query.equal("status", ["active"])]){
       try{
            return await this.databases.listDocuments(
                Conf.AppwriteDatabaseID,
                Conf.AppwriteCollectionID,
                queries,
            )
       }
       catch(e){
              console.log(e)
       }
    }

    async getMethod(documentID){
        try{
            return await this.databases.getDocument(
                Conf.AppwriteDatabaseID,
                Conf.AppwriteCollectionID,
                documentID
            )
        }
        catch(e){
            console.log(e)
        }
    }

    async deleteMethod(){
        try{
            await this.databases.deleteDocument(
                Conf.AppwriteDatabaseID,
                Conf.AppwriteCollectionID,
                documentID
            )
            return true;
        }
        catch(e){
            console.log(e);
            return false;
        }
    }


    //file upload
    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                Conf.AppwriteBucketID,
                ID.unique(),
                file
            )
        }
        catch(e){
            console.log(e)
        }
    }

    async deleteFile(fileID){
        try{
           await this.bucket.deleteFile(
                Conf.AppwriteBucketID,
                fileID
            )
            return true
        }
        catch(e){
            console.log(e)
            return false
        }
    }

    getFilePreview(fileID){
        try{
            return this.bucket.getFilePreview(
                Conf.AppwriteBucketID,
                fileID
            )
        }
        catch(e){
            console.log(e)
        }
    }
}

const blogService = new BLogService();

export default blogService;
