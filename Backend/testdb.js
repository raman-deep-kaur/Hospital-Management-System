import dns from 'dns';
dns.setServers(['8.8.8.8', '1.1.1.1']);

import { config } from "dotenv";
config({ path: "./config/config.env" });
import { dbConnection } from "./database/dbConnection.js";
dbConnection();
