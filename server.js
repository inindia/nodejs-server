/*
Repository: nodejs-server
Description: A customizable Node.js server implementation using the Express framework. Provides a foundation for serving web applications, APIs, or static files.

Instructions:
1. Clone or fork this repository.
2. Install required packages: npm install express.
3. Customize server options.
4. Run server: node server.js.
5. Access server via appropriate URL.
6. Customize and extend for your needs.

Note: Keep sensitive info secure. Use responsibly and follow security best practices.

*/

const express = require('express');
const app = express();

// Custom Configuration Options
const PORT = 3000; // Replace with desired port number for your server

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
