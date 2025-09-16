import express from "express";
import 'dotenv/config'
import { Ollama } from "@langchain/ollama";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const model = new Ollama({
    model: process.env.OLLAMA_MODEL
});
app.get("/health", (req, res, next) => {
    res.send({ message: "Server is healthy...!" });
})

app.post("/ask", async (req, res, next) => {
    try {
        const question = req.body.question;
        console.log(question)
        if (!question) {
            res.status(400).json({ message: "Send your question...!" });
        }
        const response = await model.invoke(question);
        res.send({ response })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Please try again after some time...!" })
    }
})

app.post("/ask-stream", async (req, res) => {
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Transfer-Encoding", "chunked");

    const question = req.body.question;
    const stream = await model.stream(question);

    for await (const chunk of stream) {
        res.write(chunk);
    }
    res.end();
});

app.listen(process.env.PORT, () => {
    console.log("Server is running on PORT 3001");
})