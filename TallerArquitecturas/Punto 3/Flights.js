// Flight search service
const FlightSearchService = {
    searchFlights: function(params) {
      // Simulation of flight search using the provided parameters
      console.log("Searching for flights with the following parameters:", params);
      // Flight search code here
      const flights = []; // Suppose we get a list of flights
      return flights;
    }
  };
  
  // Seat reservation service
  const SeatReservationService = {
    reserveSeats: function(flightId, seats, userId) {
      // Simulation of seat reservation for a specific flight and user
      console.log("Reserving seats for flight", flightId, "Seats:", seats, "User:", userId);
      // Seat reservation code here
      const reservationId = "ABC123"; // Suppose we generate a reservation ID
      return reservationId;
    }
  };
  
  // Example of using the services
  const params = {
    origin: "Medellin",
    destination: "Cali",
    date: "2024-05-12",
    passengers: 2
  };
  
  const flights = FlightSearchService.searchFlights(params);
  console.log("Flights found:", flights);
  
  if (flights.length > 0) {
    const selectedFlightId = flights[0].id; // Suppose we select the first flight from the list
    const selectedSeats = ["A1", "A2"]; // Suppose we select these seats
    const userId = "user123"; // ID of the user making the reservation
  
    const reservationId = SeatReservationService.reserveSeats(selectedFlightId, selectedSeats, userId);
    console.log("Reservation successfully made. Reservation ID:", reservationId);
  } else {
    console.log("No flights found matching the criteria.");
  }
  