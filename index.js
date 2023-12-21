const List = document.getElementsByTagName("LI");
var i;
for (i = 0; i < List.length; i++) {
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("Remove");
  span.className = "Remove";
  span.appendChild(txt);
  List[i].appendChild(span);
}

const Remove= document.getElementsByClassName("Remove");
var i;
for (i = 0; i < Remove.length; i++) {
  Remove[i].onclick = function() {
    const div = this.parentElement;
    div.style.display = "none";
  }
}


const ULlist = document.querySelector('ul');
ULlist.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


function newElement() {
    const li = document.createElement("li");
    const inputValue = document.getElementById("INPUT").value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You need to write something!");
    } else {
      document.getElementById("TODO").appendChild(li);
    }
    document.getElementById("INPUT").value = "";
  
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("Remove");
  span.className = "Remove";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < Remove.length; i++) {
    Remove[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
