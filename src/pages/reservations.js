const reservationFormHTML = `
<form>
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input required type="text" class="form-control" id="name" aria-describedby="emailHelp" minlength="8">
  </div>
  <div class="mb-3">
    <label for="mail" class="form-label">E-mail</label>
    <input required type="email" class="form-control" id="mail" aria-describedby="emailHelp" minlength="8">
  </div>
  <div class="mb-3">
    <label for="branch" class="form-label">Branch</label>
    <select required class="form-select" aria-label="Default select example">
      <option value="vancouver">Vancouver</option>
      <option value="toronto">Toronto</option>
      <option value="newYork">New York</option>
      <option value="losAngeles">L.A.</option>
    </select>
  </div>
  <div class="mb-3">
    <label for="date-time" class="form-label">Date and Time</label>
    <div class="d-flex">
      <input required type="date" class="form-control me-1" id="date">
      <input required type="time" class="form-control" id="time">
    </div>
  </div>
  <div class="mb-3 form-check">
    <input required type="checkbox" class="form-check-input" id="conditions">
    <label class="form-check-label" for="conditions">I accept terms and conditions</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form> 
`;

const displayReservationForm = (zone) => {
  const reservationForm = document.createElement('div');
  reservationForm.classList.add('reservationForm');
  reservationForm.innerHTML = reservationFormHTML;
  zone.appendChild(reservationForm);

  const mail = document.getElementById('mail');

  mail.addEventListener('input', () => {
    if (mail.validity.typeMismatch) {
      mail.setCustomValidity('I am expecting an e-mail adress');
    } else {
      mail.setCustomValidity('');
    }
  });
};

export default displayReservationForm;