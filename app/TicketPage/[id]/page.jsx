import TicketForm from "@/app/(components)/TicketForm"

async function TicketPage({ params }) {

    const EDITMODE = params.id === "new" ? false : true;

    let updateTicketData = {};

    const getTicketById = async (id) => {
        try {
            const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
                cache: "no-store",
            });
            if (!res.ok) {
                throw new Error("Failed to fetch ticket")
            }

            return res.json();
        } catch (error) {
            console.log(error);
        }
    }

    if (EDITMODE) {
        updateTicketData = await getTicketById(params.id);
        updateTicketData = updateTicketData.ticket;
    } else {
        updateTicketData = {
            _id: "new"
        }
    }

    return (
        <div>
            <TicketForm ticket={updateTicketData} />
        </div>
    )
}

export default TicketPage