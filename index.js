function change() {
        let redSquareDiv = document.querySelector('.redSquare');
        let newRedSquare = document.createElement('div');
        newRedSquare.classList.add('red-square');
        redSquareDiv.appendChild(newRedSquare);
      }