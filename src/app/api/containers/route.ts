import { deleteAllContainers, getContainers } from "@/config/docker";
import { NEXTAUTH_CONFIG } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const user = await getServerSession(NEXTAUTH_CONFIG);
    console.log(user);
    if (user === null || user === undefined || user.isAdmin === false) {
        return NextResponse.json({
            message: 'Unauthorized, You must be an admin to access this route.'
        });
    }

    const containers = await getContainers();

    return NextResponse.json({
        message: 'Hello, World!',
        user,
        containers
    });
}

export async function DELETE() {

    const user = await getServerSession(NEXTAUTH_CONFIG);
    if (user === null || user === undefined || user.isAdmin === false) {
        return NextResponse.json({
            message: 'Unauthorized, You must be an admin to access this route.'
        });
    }

    const del = await deleteAllContainers();
    return NextResponse.json({
        message: 'Hello, World!',
        del
    });
}