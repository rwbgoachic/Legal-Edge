import express from 'express';
import dotenv from 'dotenv';

// Initialize environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware for JSON parsing
app.use(express.json());

// Base route
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

// Compliance documentation endpoint
app.get('/compliance/soc2', (req, res) => {
  res.json({ message: 'SOC 2 documentation endpoint' });
});

// IOLTA sync endpoint
app.post('/api/iolta/sync', (req, res) => {
  res.json({ message: 'IOLTA sync endpoint' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});