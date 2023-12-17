import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    try {
        const { id } = params;

        const ticket = await Ticket.findById(id)
        return NextResponse.json({ ticket }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error.message, error }, { status: 500 });
    }

}

export async function DELETE(req, { params }) {
    try {
        const { id } = params;
        await Ticket.findByIdAndDelete(id);

        return NextResponse.json({ message: "Ticket Deleted" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error.message, error }, { status: 500 });
    }
}