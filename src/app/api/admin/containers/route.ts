import { deleteAllContainers, getContainers } from "@/config/docker";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    const containers = await getContainers();

    return NextResponse.json({
        message: 'Hello, World!',
        containers
    });
}

export async function DELETE() {

    const del = await deleteAllContainers();
    return NextResponse.json({
        message: 'Hello, World!',
        delete: del
    });
}