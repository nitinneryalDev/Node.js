const data = require("./data.js");
const http = require("http");

function serverResponse(req, res) {
  res.writeHeader(200, { contenttype: "application\json" });
  res.write(JSON.stringify(data));
  res.end();
}

http.createServer(serverResponse).listen(5000);
