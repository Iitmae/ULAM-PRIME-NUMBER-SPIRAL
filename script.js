// function isPrime(num) {
//   if (num <= 1) {
//       return false;
//   }
//   for (let i = 2; i * i <= num; i++) {
//       if (num % i === 0) {
//           return false;
//       }
//   }
//   return true;
// }

// function generateUlamSpiral(size) {
//   let spiral = [];
//   for (let i = 0; i < size; i++) {
//       spiral[i] = [];
//       for (let j = 0; j < size; j++) {
//           spiral[i][j] = 0;
//       }
//   }
  
//   let x = Math.floor(size / 2);
//   let y = Math.floor(size / 2);
//   let dx = 1;
//   let dy = 0;
//   let segmentLength = 1;
//   let segmentPassed = 0;
//   let currentNum = 1;

//   while (currentNum <= size * size) {
//       if (isPrime(currentNum)) {
//           spiral[y][x] = currentNum;
//       }

//       x += dx;
//       y += dy;
//       segmentPassed++;

//       if (segmentPassed === segmentLength) {
//           segmentPassed = 0;

//           let temp = dx;
//           dx = -dy;
//           dy = temp;

//           if (dy === 0) {
//               segmentLength++;
//           }
//       }

//       currentNum++;
//   }

//   return spiral;
// }

// function renderSpiral(spiral) {
//   let table = document.getElementById('spiral');
//   for (let i = 0; i < spiral.length; i++) {
//       let row = document.createElement('tr');
//       for (let j = 0; j < spiral[i].length; j++) {
//           let cell = document.createElement('td');
//           cell.textContent = spiral[i][j];

//           if (isPrime(spiral[i][j])) {
//               cell.classList.add('prime');
//           }

//           row.appendChild(cell);
//       }
//       table.appendChild(row);
//   }
// }

// // Change the size of the spiral as needed
// const spiralSize = 11;

// const ulamSpiral = generateUlamSpiral(spiralSize);
// renderSpiral(ulamSpiral);

function isPrime(num) {
  if (num <= 1) {
      return false;
  }
  for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
          return false;
      }
  }
  return true;
}

function generateUlamSpiral(maxNumber) {
  const size = Math.ceil(Math.sqrt(maxNumber));
  let spiral = [];
  for (let i = 0; i < size; i++) {
      spiral[i] = [];
      for (let j = 0; j < size; j++) {
          spiral[i][j] = 0;
      }
  }
  
  let x = Math.floor(size / 2);
  let y = Math.floor(size / 2);
  let dx = 1;
  let dy = 0;
  let segmentLength = 1;
  let segmentPassed = 0;
  let currentNum = 1;

  while (currentNum <= maxNumber) {
      if (isPrime(currentNum)) {
          spiral[y][x] = currentNum;
      }

      x += dx;
      y += dy;
      segmentPassed++;

      if (segmentPassed === segmentLength) {
          segmentPassed = 0;

          let temp = dx;
          dx = -dy;
          dy = temp;

          if (dy === 0) {
              segmentLength++;
          }
      }

      currentNum++;
  }

  return spiral;
}

function renderSpiral(spiral) {
  let table = document.getElementById('spiral');
  table.innerHTML = '';
  for (let i = 0; i < spiral.length; i++) {
      let row = document.createElement('tr');
      for (let j = 0; j < spiral[i].length; j++) {
          let cell = document.createElement('td');
          cell.textContent = spiral[i][j];

          if (isPrime(spiral[i][j])) {
              cell.classList.add('prime');
          }

          row.appendChild(cell);
      }
      table.appendChild(row);
  }
}

const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const maxNumberInput = document.getElementById('maxNumber');
  const maxNumber = parseInt(maxNumberInput.value);
  if (isNaN(maxNumber) || maxNumber < 1) {
      alert('Please enter a valid positive number.');
      return;
  }
  const ulamSpiral = generateUlamSpiral(maxNumber);
  renderSpiral(ulamSpiral);
});
