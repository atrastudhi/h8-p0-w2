var tanggal = '6'
var bulan = '13'
var tahun = '1998'

switch(bulan) {
  case '1':
    renderDate('Januari')
    break;
  case '2':
    renderDate('Februari')
    break;
  case '3':
    renderDate('Maret')
    break;
  case '4':
    renderDate('April')
    break;
  case '5':
    renderDate('Mei')
    break;
  case '6':
    renderDate('Juni')
    break;
  case '7':
    renderDate('juli')
    break;
  case '8':
    renderDate('Agustus')
    break;
  case '9':
    renderDate('September')
    break;
  case '10':
    renderDate('Oktober')
    break;
  case '11':
    renderDate('November')
    break;
  case '12':
    renderDate('Desember')
    break;
  default:
    renderDate('invalid month')
}

function renderDate(month) {
  console.log(tanggal + ' ' + month + ' ' + tahun)
}