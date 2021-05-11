var numberOfDrumsButtons = document.querySelectorAll('.drum').length;

function clickTheDrums() {
  alert('I was clicked!');
}

for (var i = 0; i < numberOfDrumsButtons; i++) {
  document
    .querySelectorAll('.drum')
    [i].addEventListener('click', clickTheDrums);
}
