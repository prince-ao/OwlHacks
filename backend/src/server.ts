import express from "express";
import cors from "cors";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import pdf from "pdf-parse";
import { createClient } from 'redis';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = 3005;
const s3Client = new S3Client({ region: "us-east-2" });

// Using redis to connect with Auth0 to cache user data for more centralized database access.
const redisClient = createClient({
    password: process.env.REDIS_CLOUD_PASSWORD,
    socket: {
        host: process.env.REDIS_CLOUD_URL,
        port: process.env.REDIS_CLOUD_PORT
    }
});

// Add a new route to get user data
app.post('/api/get-user-data', (req, res) => {
  const userId = req.body.userId;
  redisClient.get('user_data:' + userId, (err, reply) => {
    const userData = JSON.parse(reply);
    res.send(userData);
  });
});

app.use(cors());

app.get("/get-pdf", async (req, res) => {
  const { book, category } = req.query as { book: string; category: string };
  const command = new GetObjectCommand({
    Bucket: `owlhacks`,
    Key: `pdfs/${category}/${book}`,
  });
  const response = await s3Client.send(command);
  const arrayResponse = await response.Body?.transformToByteArray();
  const pdfData = await pdf(arrayResponse as Buffer);

  return res.status(200).contentType("application/json").send(pdfData);
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
