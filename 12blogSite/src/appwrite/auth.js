import { Client, Account, ID } from "appwrite";
import Conf from "../conf/conf.js";
class AuthService{
    client = new Client();
    account;
   constructor(){
    this.client.setEndpoint(Conf.AppwriteURL).setProject(Conf.AppwriteProjectID)
    this.account = new Account(this.client)
   }
   async createAccount({email,name,password}){
      try{
           const userAccount = await this.client.account.create(ID.unique(),email,password,name)
           if(userAccount){
              // Call Login Method
              return this.login({email,password})
           }
           else{
            return userAccount;
           }
      }
      catch(e){
          console.log(e)
      }
   }
   async login({email,password}){
     try{
        return await this.account.createEmailPasswordSession(email,password)

     }
     catch(e){
         console.log(e)
     }
   }
   async curUser(){
        try{
            return await this.account.get()
        }
        catch(e){
            console.log(e)
        }
        return null;
   }

   async logout(){
       try{
           return await this.account.deleteSessions()
       }
       catch(e){
           console.log(e)
       }
   }

   async passwordRecovery({email,URL}){
     try{
        return await this.account.createRecovery(email,URL)
     }
     catch(e){
        console.log(e)
     }
   }
   async updatePassword({password,repassword}){
    const urlParams = new URLSearchParams(window.location.search);
    const secret = urlParams.get('secret');
    const userId = urlParams.get('userId');
      try{
        return this.account.updateRecovery(userId,secret,password,repassword)
      }
      catch(e){
           console.log(e)
      }
   }
}


const authService  = new AuthService();

export default authService