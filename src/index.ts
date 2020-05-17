import http from "http";

const server = http.createServer((req, res) => {
  res.end("Hello World!!");
});

server.listen(
  parseInt(process.env.SERVER_PORT),
  process.env.SERVER_HOST,
  () => {
    console.log(
      `Server started in http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}...`
    );
  }
);
