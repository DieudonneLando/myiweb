$(document).ready(function(){let e=(new Date).getHours(),t=e;$(".bg").css("background-image","url('./assets/imgs/"+t+".jpg')"),$("");let o="";$.ajax({type:"GET",url:"https://api.github.com/users/Ddieudonne",async:!1,success:function(e){o=e}}),$(".urlgithub").text("@"+o.name),$(".followsers").text("Followers "+o.followers),$(".following").text("following "+o.following),$(".from").text(o.location),$(".public_repos").text(o.public_repos);var s=[];$.ajax({type:"GET",url:"https://api.github.com/users/Ddieudonne/repos",async:!1,success:function(e){s=e}}),s.forEach(function(e){$(".row-centered").append("<a class='col-lg-2 cube'><strong>"+e.name+"</strong>"+e.description+"<br>"+e.language+"<br><br>"+new Date(e.created_at).toLocaleDateString("fr")+"</a>")})});