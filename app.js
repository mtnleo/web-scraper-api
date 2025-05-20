import express from 'express';
import cors from 'cors';

const app = express();


// ------------------ Middleware ------------------ \\
app.use(cors())
app.use(express.json())

// ------------------ GET ------------------ \\
app.get("/", async(req, res) => {
    res.send("Working");
})


// ------------------ Error Handling ------------------ \\

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!', err);

});

// -------------------- Listen -------------------- \\

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});