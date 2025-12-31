// Example Server Setup (index.js)
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Use Render's port or default to 3000

app.get('/', (req, res) => {
  res.send('Server is Live!');
});

app.get('/user/information',(req,res)=>{
  res.send('server for the backend Test');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
