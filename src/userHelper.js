const { User } = require('./models'); // Adjust the path as necessary

function fetchAllUsers() {
  return new Promise((resolve => {
    resolve(User.findAll());
  }))
}


async function UserHelper() {
  try {
    const users = await fetchAllUsers();
    const parsedUser = JSON.parse(JSON.stringify(users));

    if (Array.isArray(parsedUser)) {
      parsedUser.sort((a, b) => b.score - a.score);  
    } else {
      throw new TypeError('Parsed user data is not an array');
    }
    return parsedUser.slice(0, 10);
  } catch (error) {
    console.error('Error in UserHelper:', error);
    throw error;
  }
}

module.exports = UserHelper;