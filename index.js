const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const html = `
        <h1>Hello World!</h1>
        <h2>Commits Log</h2>
        <p>[1]: Added a <b>CI/CD</b> pipeline:<br />
        Now every change is actually committed to DockerHub and locally managed by Watchtower.</p>
        <p>[2]: Fixed small bugs.</p>
    `;
    res.send(html);
});

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});