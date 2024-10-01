import { Client, Account, ID } from "appwrite";
import Conf from "../conf/conf.js";

class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client.setEndpoint(Conf.AppwriteURL).setProject(Conf.AppwriteProjectID);
        this.account = new Account(this.client);
    }

    async createAccount({ email, name, password }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // Call Login Method
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (e) {
            console.log(e);
            throw e; // Rethrow the error for further handling
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (e) {
            console.log(e);
            throw e; // Rethrow the error for further handling
        }
    }

    async curUser() {
        try {
            return await this.account.get();
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (e) {
            console.log(e);
            throw e; // Rethrow the error for further handling
        }
    }
}

const authService = new AuthService();

export default authService;