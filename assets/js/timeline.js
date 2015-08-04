path = window.location.pathname.split('/');
page = path[path.length - 1];
if(page == 'music'){
  document.body.className = 'music';
}else if(page == 'bio'){
  document.body.className = 'bio';
  c = document.getElementsByClassName('container');
  c.innerHtml = "<div class='avatar'><img src=“images/avatar.png' alt='Avatar'></div><div class='content'><h1 class='title”>Josh<br>Birdwell</h1><p>
                Put your short bio here.<br>
                Put where you're from here.
            </p>
            <ul class='social-icons'>
                <li><a class='twitter' href='#' title='Twitter'>Twitter</a></li>
                <li><a class='facebook' href='#' title='Facebook'>Facebook</a></li>
                <li><a class='instagram' href='#' title='Instagram'>Instagram</a></li>
            </ul>
            <p>
                Web Developer Intern at <a href=“www.nextthought.com”>NextThought</a><br>
            </p>
            <p>Want to chat? <a href=“mailto:joshdbirdwell@gmail.com'>Email me</a>.</p>
        </div>";
}
