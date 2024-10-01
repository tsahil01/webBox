"use server";

import { NEXTAUTH_CONFIG } from "@/lib/auth";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export async function validateUser(containerId: string) {
    console.log("containerId ", containerId)
    const session = await getServerSession(NEXTAUTH_CONFIG);
    if (!session) redirect('/');

    try {
        const contaierExist = await prisma.container.findFirst({
            where: {
                containerId,
                userId: session.userId
            }
        })
        if (contaierExist) return true;
    } catch (e) {
        return false;
    }

}