import { createServer } from "node:http";

export const server = createServer((request, response) => {
    console.log(request.url)
    response.end("Hello, Glory!")
})

export default server;
