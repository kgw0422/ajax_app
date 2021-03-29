function post(){
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    const formData = new formData(form);  
    const XHR = new XMLHttpRequest();
    XMR.open("POST", "/posts", true);
    XMR.responseType = "json";
    XMR.send(formData);
  });
}

window.addEventListener('load', post);