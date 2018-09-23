1//

console.log('LOOPING PERTAMA')
var flag = 2
while(flag < 21) {
  console.log(flag + ' - I love conding')
  flag += 2;
}
console.log('LOOPING KEDUA')
while(flag > 1) {
  flag -= 2;
  console.log(flag + ' - I will become fullstack developer')
}

2//

console.log('LOOPING PERTAMA')
for(var flag = 1; flag < 21; flag++) {
  console.log(flag + ' - I love coding')
}
console.log('LOOPING KEDUA')
for(var flag = 20; flag > 0; flag--) {
  console.log(flag + ' - I will become fullstack developer')
}

3//

for(var flag = 1; flag < 101; flag++) {
    if(flag % 2===0)
      console.log('GENAP');
    else
      console.log('GANJIL');
  }

// KELIPATAN 3

for(var flag = 1; flag < 100; flag += 2) {
    if(flag % 3===0) {
      console.log(flag + ' KELIPATAN 3')
    }
  }

// KELIPATAN 6

for(var flag = 1; flag < 100; flag +=5) {
    if(flag % 6===0) {
      console.log(flag + ' KELIPATAN 6')
    }
}

// KELIPATAN 9

for(var flag = 1; flag < 100; flag +=9) {
    if(flag % 10===0) {
      console.log(flag + ' KELIPATAN 10')
    }
}

