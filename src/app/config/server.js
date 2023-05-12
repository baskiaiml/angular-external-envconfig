const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// Load external file
const externalFileContent = fs.readFileSync('/app/config/envconfig.json', 'utf8');

// Serve built Angular files
app.use(express.static(path.join(__dirname, 'angular-external-envconfig/')));

// Serve external file content
app.get('/app/config/envconfig.json', (req, res) => {
  if (req.url === '/app/config/envconfig.json') {
    res.send(externalFileContent);
  }else{
    res.sendFile(path.join(__dirname, 'angular-external-envconfig/index.html'));
  }

});

// Serve Angular application
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));

