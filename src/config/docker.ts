"use server"

import Docker, { ContainerCreateOptions } from "dockerode";

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

    const del = await containers.forEach(async (container: any) => {
        const containerInstance = await docker.getContainer(container.id);
        const data = await containerInstance.inspect();
        if (data.State.Running) {
            await containerInstance.stop();
        }
        await containerInstance.remove();
    });
    console.log(del);
}

export async function createContainer(imageName: string, cmd?: string[]) {
    const containerCreateData: ContainerCreateOptions = {
        Image: imageName,
        Cmd: cmd,
        Tty: true,
        AttachStdin: true,
        AttachStdout: true,
        AttachStderr: true,
    }
    const newContainer = await docker.createContainer(containerCreateData);
    await newContainer.start();

    return await newContainer.id;
}