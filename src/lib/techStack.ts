interface TechStack {
    name: string;
    description: string;
    cmd: string;
    image: string;
    // color: string;
}

export const techStacks: TechStack[] = [
    {
        name: "Node.js",
        description: "Run Node.js applications and manage server-side JavaScript on Ubuntu with VS Code. Ideal for creating scalable web services, RESTful APIs, and microservices.",
        cmd: "",
        image: "/ubuntu-nodejs.png",
    },
    {
        name: "VS Code",
        description: "Open Visual Studio Code to work on your coding projects on Ubuntu. This lightweight, powerful editor supports extensions, debugging, and Git integration for efficient development.",
        cmd: "",
        image: "/vscode.png",
    },
    {
        name: "Web Development",
        description: "Execute web development tasks in Python using VS Code on your Ubuntu setup. Perfect for front-end and back-end development using HTML, CSS, JavaScript, and Python frameworks like Django and Flask.",
        cmd: "",
        image: "/webdev.png",
    },
];
