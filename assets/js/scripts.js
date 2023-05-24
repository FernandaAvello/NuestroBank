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
}
