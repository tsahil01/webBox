var Docker = require('dockerode');

const docker = new Docker({
    socketPath: '/var/run/docker.sock'
});

export async function getContainers() {
    const containers = await docker.listContainers({ all: true });

    return containers.map((container: any) => {
        return {
            id: container.Id,
            name: container.Names[0],
            image: container.Image,
            state: container.State,
            status: container.Status,
            ports: container.Ports
        };
    });
}

export async function deleteAllContainers() {
    const containers = await getContainers();
    
    const del = containers.forEach((container: any) => {
        const containerInstance = docker.getContainer(container.id);
        containerInstance.stop();
        containerInstance.remove();
    });
    console.log(del);
}