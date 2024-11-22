// script.js
document.getElementById('AccomodationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Collect form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const checkin = document.getElementById('checkin').value;
  const checkout = document.getElementById('checkout').value;
  const roomType = document.getElementById('roomType').value;
  const guests = document.getElementById('guests').value;
  const requests = document.getElementById('requests').value;

  // Check if the check-out date is after the check-in date
  if (new Date(checkin) >= new Date(checkout)) {
    alert("Check-out date must be after the check-in date.");
    return;
  }

  // Create an object to hold the booking details
  const bookingDetails = {
    name,
    email,
    checkIn: checkin,
    checkOut: checkout,
    roomType,
    guests,
    requests
  };

  // Save booking data to sessionStorage
  sessionStorage.setItem('room-preview', JSON.stringify(bookingDetails));

  // Show success alert
  alert("Hotel booked successfully! Thank you for your reservation.");

  // Optionally, reset the form after submission
  document.getElementById('AccomodationForm').reset();

  // Redirect to the room preview page with room type as a query parameter
  window.location.href = `room-preview.html?roomType=${roomType}`;
});
