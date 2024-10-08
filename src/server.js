import http from 'http';
import https from 'https';
const port = 10001;

http.createServer(function (req, res) {
  console.log("request: ", req.method, req.url, req.headers);
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });
  req.on('end', () => {
    console.log("body: ", body);
    const jsonBody = JSON.parse(body);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    if (req.url === "/message") {
      sendSlackMessage({ text: `replying message back to <@${jsonBody.user}>` });
      res.end(JSON.stringify({
        status: 'success',
      }));
    } else {
      res.end("{}");
    }
  });
}).listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  sendSlackMessage({ text: `Jagoship ONLINE on: ${new Date().toISOString()}` });
});

const sendSlackMessage = (message) => {
  const options = {
    hostname: 'hooks.slack.com',
    port: 443,
    path: '/services/TLVS8SASF/B07G0G8QFHV/JpSm4clXeiHGeCPGcHSOssSv',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const req = https.request(options, (res) => {
    console.log('response statusCode:', res.statusCode);
    console.log('response headers:', res.headers);
    res.setEncoding('utf8');
    res.on('data', (data) => {
      console.log("response data:", data);
    });
  });

  req.on('error', (e) => {
    console.error(e);
  });
  req.write(JSON.stringify(message));
  req.end();
};