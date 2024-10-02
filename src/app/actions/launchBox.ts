"use server";

import { createContainer } from "@/config/docker";
import { NEXTAUTH_CONFIG } from "@/lib/auth";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export async function launchBox(imgName: string, cmd: string) {
    const session = await getServerSession(NEXTAUTH_CONFIG);
    // console.log(session);
    let containerId;

    if (session) {
      try {
        const techStack = await prisma.techStack.findFirst({
          where: {
            imageName: imgName,
          },
        });

        if (!techStack) {
          console.log("Tech Stack not found");
          return;
        }

        // console.log("TechStack: ", techStack);

        const container = await createContainer(imgName);
        containerId = container.Id;

        // add data in container table =>

        if (session?.userId) {
            // console.log("user: ", session.userId);
          const createContainer = await prisma.container.create({
            data: {
              userId: session?.userId,
              techStackId: techStack?.id,
              status: 'CREATED',
              containerName: container.Name,
              containerId: containerId,
            },
          });
        }
      } catch (e) {
        console.log("Unable to launch Container: ", e);
        return;
      }
      if (containerId) {
        redirect(`/playground/${containerId}`);
        return;
      }
    } else {
      console.log("No user logged in");
    }
  }