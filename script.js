// Efe's Tailoring Studio - booking, size guide and saved garments

function sendBookingRequest(booking) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(booking);
    }, 1500);
  });
}

function bookFitting() {
  const garment = document.getElementById('bookGarment').value;
  const name = document.getElementById('bookName').value.trim();
  const phone = document.getElementById('bookPhone').value.trim();
  const day = document.getElementById('bookDay').value.trim();
  const errorEl = document.getElementById('bookError');

  errorEl.textContent = '';

  if (name === '') {
    errorEl.textContent = 'Please enter your name.';
    return;
  }

  const booking = { garment: garment, name: name, phone: phone, day: day };

  sendBookingRequest(booking).then(function () {
    const msg = document.createElement('p');
    msg.className = 'booking-confirm';
    msg.textContent = 'Booking confirmed. See you soon!';
    document.getElementById('bookMessages').appendChild(msg);
  });
}

function toggleSizeGuide() {
  const content = document.getElementById('sizeGuideContent');
  content.classList.toggle('open');
}
