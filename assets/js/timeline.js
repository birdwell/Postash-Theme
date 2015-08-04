path = window.location.pathname.split('/');
page = path[path.length - 1];
if(page == 'music'){
  document.body.className = 'music';
}else if(page == 'bio'){
  document.body.className = 'bio';
}
