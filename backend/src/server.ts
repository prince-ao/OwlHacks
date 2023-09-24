import express from "express";
import cors from "cors";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import pdf from "pdf-parse";

const app = express();
const PORT = 3005;
const client = new S3Client({ region: "us-east-2" });

app.use(cors());

app.get("/get-pdf", async (req, res) => {
  const { book, category } = req.query as { book: string; category: string };
  const command = new GetObjectCommand({
    Bucket: `owlhacks`,
    Key: `pdfs/${category}/${book}`,
  });
  const response = await client.send(command);
  const arrayResponse = await response.Body?.transformToByteArray();
  const pdfData = await pdf(arrayResponse as Buffer);

  return res.status(200).contentType("application/json").send(pdfData);
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
