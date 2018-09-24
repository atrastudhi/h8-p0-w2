//1

var rows1 = 5
while(rows1 > 0) {
  console.log('*')
  rows1--
}

//2

var bintang = 6;

for(var kolom = 0; kolom < bintang; kolom++) {
  var jumlah='';
   for(var baris = 0; baris < bintang; baris++) {
    jumlah += '*';
  } console.log(jumlah)
} 

//3

var bintang = 6;

for(var kolom = 0; kolom < bintang; kolom++) {
  var jumlah='';
   for(var baris = 0; baris <= kolom; baris++) {
    jumlah += '*';
  } console.log(jumlah)
}  
