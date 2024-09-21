import { createServer } from "http";
import next from "next";
import { Server } from "socket.io";
import docker from "./docker";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;

const app = next({
    dev: dev,
    hostname: hostname,
    port: port
})

const handler = app.getRequestHandler();

app.prepare().then(() => {
    const httpServer = createServer(handler);

    const io = new Server(httpServer);

    io.on("connection", (socket) => {
        console.log("Connected msg from server: ", socket.id);

        socket.on("containerId", async (containerId) => {
            console.log("Container ID received: ", containerId);
            let container: any;

            try {
                container = docker.getContainer(containerId);

                // Execute a shell in the container
                const exec: any = await container.exec({
                    Cmd: ["/bin/bash"],
                    AttachStdin: true,
                    AttachStdout: true,
                    AttachStderr: true,
                    Tty: true,
                });

                const stream: any = await new Promise((resolve, reject) => {
                    exec.start({ hijack: true, stdin: true }, (err: any, stream: any) => {
                        if (err) return reject(err);
                        resolve(stream);
                    });
                });

                socket.on("input", (data) => {
                    stream.write(data);
                    // console.log("input received from client: ", data);
                });

                stream.on("data", (data: string) => {
                    socket.emit("output", `${data}`);
                });

                stream.on("end", () => {
                    socket.disconnect();
                });
            } catch (error) {
                console.log("Error:", error);

                // if (container) {
                //     try {
                //         await container.stop();
                //         await container.remove();
                //     } catch (cleanupErr) {
                //         console.error("Error cleaning up container:", cleanupErr);
                //     }
                // }
            }

            socket.on("disconnect", async () => {
                console.log("user disconnected: ", socket.id);
                // if (container) {
                //     try {
                //         console.log("Stopping and removing container: ", containerId);
                //         await container.stop();
                //         await container.remove();
                //     } catch (error) {
                //         console.error("Error cleaning up container:", error);
                //     }
                // }
            })

        })
    })

    io.on("disconnect", () => {
        console.log("Disconnection")
    })

    httpServer
        .once("error", (err) => {
            console.error(err);
            process.exit(1);
        })
        .listen(port, () => {
            console.log(`> Ready on http://${hostname}:${port}`);
        });
})