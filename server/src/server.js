const http = require("http");
const app = require("./app");

const PORT = process.env.PORT || 8000;
//fancy listener for our node build in server
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`${PORT}`);
});

