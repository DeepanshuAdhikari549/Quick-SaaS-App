import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { clerkMiddleware, requireAuth } from '@clerk/express'
import aiRouter from './routes/aiRoutes.js';
import connectCloudinary from './configs/cloudinary.js';
import userRouter from './routes/userRoutes.js';

const app = express()

// Check for required environment variables
if (!process.env.CLERK_SECRET_KEY || !process.env.DATABASE_URL) {
  console.error('\n❌ ERROR: Missing required environment variables (CLERK_SECRET_KEY or DATABASE_URL).');
  console.error('Please configure your .env file according to the .env.example.\n');
  // Continuing might cause app crash later, but we provide this clear warning.
}

await connectCloudinary()

app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())

app.get('/', (req, res) => res.send('Server is Live!'));

app.use(requireAuth());

app.use('/api/ai', aiRouter);

app.use('/api/user', userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
})