const { v4: uuidv4 } = require('uuid');

const users = [];

// Function to get all users
const getUsers = (req, res) => {
    try {
        // Check if there are users in the database
        if (users.length === 0) {
          // Return an empty array if there are no users
        //   console.log("here")
          return res.status(200).json([]);
        }
    
        // Otherwise, return the list of users
        return res.status(200).json(users);
      } catch (error) {
        console.error(error);
        // Handle other errors gracefully
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getUserById = (req, res) => {
  const userId = req.params.userId;
  const user = users.find((u) => u.id === userId);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

const createUser = (req, res) => {
  const { username, age, hobbies } = req.body;

  if (!username || !age) {
    res.status(400).json({ message: 'Username and age are required fields' });
    return;
  }

  const newUser = {
    id: uuidv4(),
    username,
    age,
    hobbies: hobbies || [],
  };

  users.push(newUser);

  res.status(201).json(newUser);
};

const updateUser = (req, res) => {
  const userId = req.params.userId;
  const { username, age, hobbies } = req.body;

  if (!username || !age) {
    res.status(400).json({ message: 'Username and age are required fields' });
    return;
  }

  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex !== -1) {
    users[userIndex] = { id: userId, username, age, hobbies: hobbies || [] };
    res.status(200).json(users[userIndex]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

const deleteUser = (req, res) => {
  const userId = req.params.userId;
  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
