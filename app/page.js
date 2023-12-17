import TicketCard from "./(components)/TicketCard"

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/tickets", {
      cache: "no-cache"
    });

    return res.json();
  } catch (error) {
    console.warn("Faild to get tickets", error);
  }
}


async function Dashboard() {

  const { tickets } = await getTickets();

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category))
  ]

  return (
    <div className="p-5">
      <div>
        {tickets && uniqueCategories?.map((uniqueCategory, i) => (
          <div key={i} className="mb-4">
            <h2>{uniqueCategory}</h2>
            <div className="lg:grid grid-cols-2 xl:grid-cols-4">
              {tickets.filter((ticket) => ticket.category === uniqueCategory).map((filteredTicket, _i) => (
                <TicketCard key={_i} id={_i} ticket={filteredTicket} />
              ))}
            </div>
          </div>
        ))}

      </div>

    </div>
  )
}

export default Dashboard