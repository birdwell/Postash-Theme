path = window.location.pathname.split('/');
page = path[path.length - 1];

if(page == 'music'){
  document.body.className = 'music';
} else if(window.location.pathname == '/'){
  document.body.className = 'home';
} else if(path[path.length - 2] == 'post'){
  document.body.className = 'post';
}
