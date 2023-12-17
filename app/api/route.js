import Ticket from "../(models)/Ticket";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        //* Get the ticket data from the request body
        const body = await req.json();
        const ticketData = body.ticket;
        //* Create a new ticket
        await Ticket.create(ticketData);
        //* Return a success message
        return NextResponse.json({ message: "Ticket created successfully" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: error.message, error }, { status: 500 });
    }
}