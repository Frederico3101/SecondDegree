function calcular() {
  var aa = window.document.getElementById('a')
  var bb = window.document.getElementById('b')
  var cc = window.document.getElementById('c')
  var res = window.document.getElementById('res')
  var res2 = window.document.getElementById('res2')
  var az = Number(aa.value)
  var bz = Number(bb.value)
  var cz = Number(cc.value)
  var delta = bz * bz - 4 * az * cz
  if (delta < 0) {
    res.innerHTML = 'Não há raízes para essa equação.'
  } else {
    var d = Math.sqrt(delta)
    var x1 = ((bz * -1 + d) / 2) * az
    var x2 = ((bz * -1 - d) / 2) * az
    var xv = ((bz * -1) / 2) * az
    var yv = ((delta * -1) / 4) * az

    if (aa.value.length == 0 || bb.value.length == 0 || cc.value.length == 0) {
      window.alert('[ERRO] Verifique os dados.')
    } else if (bb.value.length == 0 && cc.value.length == 0) {
      window.alert('[ERRO] Verifique os dados.')
    }

    if (az == 0 || az.value.length == 0) {
      res2.innerHTML =
        'Se o coeficiente a for 0, não será uma equação do 2º grau.'
    } else if (az > 0) {
      res2.innerHTML = 'Função quadrática com concavidade virada para cima'
      res3.innerHTML = `O valor de Xv é de ${xv} e o valor de Yv é de ${yv}`
      if (d == 0) {
        res.innerHTML = `A equação ${az}x² + ${bz}x + ${cz} possui raiz <strong>${x1}<strong>`
      } else {
        res.innerHTML = `A equação ${az}x² + ${bz}x + ${cz} possui raízes <strong>${x1} e ${x2}<strong/>`
      }
    } else if (az < 0 && bz.value.length != 0 && cz.value.length != 0) {
      res2.innerHTML = 'Função quadrática com concavidade virada para baixo'
      res3.innerHTML = `O valor de Xv é de ${xv} e o valor de Yv é de ${yv}`
      if (d == 0) {
        res.innerHTML = `A equação ${az}x² + ${bz}x + ${cz} possui raiz <strong>${x1}<strong>`
      } else {
        res.innerHTML = `A equação ${az}x² + ${bz}x + ${cz} possui raízes <strong>${x1} e ${x2}<strong/>`
      }
    }
  }
}
