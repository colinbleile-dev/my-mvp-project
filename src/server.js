const express = require('express');
const authRoutes = require('./routes/authRoutes');
const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);
app.get('/', (req, res) => res.send('Skill Swap API is running!'));
const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'test') app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
module.exports = app;
