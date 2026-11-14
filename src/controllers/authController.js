const UserModel = require('../models/userModel');
const registerUser = (req, res) => {
  const { email, name } = req.body;
  if (!email) return res.status(400).json({ error: 'Email is required' });
  if (!email.endsWith('.edu')) return res.status(400).json({ error: 'Invalid email. Only .edu institutional emails are allowed for verification.' });
  if (UserModel.findByEmail(email)) return res.status(400).json({ error: 'Email is already registered.' });
  const user = UserModel.create({ email, name });
  return res.status(201).json({ message: 'User registered and verified successfully!', user });
};
module.exports = { registerUser };
