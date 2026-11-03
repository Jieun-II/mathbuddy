function check() {
  let answer = document.getElementById("answer").value;
  let result = document.getElementById("result");
 
  if (answer == 56) {
    result.textContent = "Correct!";
  } else {
    result.textContent = "Try again";
  }
}
