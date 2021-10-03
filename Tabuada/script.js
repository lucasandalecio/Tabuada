function gerar() {
  let num = document.querySelector('input#txtn')
  let tab = document.querySelector('select#seltab')
  if (num.value.length == 0) {
    alert('Digite um número!')
  } else {
    var sel = Number(num.value)
    tab.innerHTML = ``
    for (let i = 1; i <= 10; i++) {
      let item = document.createElement('option')
      item.text = `${sel} x ${i} = ${i * sel}`
      item.value = `tab${i}`
      tab.appendChild(item)
    }
  }
}
