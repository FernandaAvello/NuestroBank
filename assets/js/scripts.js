const getMessage = () => {
  let totalDebt = parseInt(document.getElementById('total-debt').value)
  let interest = parseInt(document.getElementById('interest').value)
  let cuots = parseInt(document.getElementById('quantity-cuots').value)
  let cuotValue = (totalDebt + (totalDebt * (interest/100))) / cuots
  let chileanMoney = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
  })

  let message = document.getElementById('message')
  message.innerHTML = `¡NO TE PREOCUPES! PUEDES PAGARLO EN ${cuots} CUOTAS DE ${chileanMoney.format(cuotValue)} `
  console.log(cuots, cuotValue, totalDebt)
  if (isNaN(cuots) || isNaN(cuotValue) || isNaN(interest))
  {
    message.innerHTML = 'INGRESA LOS DATOS SOLICITADOS ARRIBA'
  }
}

const getFormData = () => {
  let formName = document.getElementById('form-name').value
  let formLastName = document.getElementById ('form-lastname').value
  let formEmail = document.getElementById('form-email').value
  let formSel = document.getElementById('form-select')
  let formSelectText = formSel.options[formSel.selectedIndex].text
  let formMessage = document.getElementById('form-message').value

  alert(`DE: ${formName} ${formLastName} (${formEmail})\n ASUNTO: ${formSelectText}\n MENSAJE: ${formMessage}`)
}
