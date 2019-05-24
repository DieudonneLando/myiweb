$(document).ready(function () {

    let hour = new Date().getHours();
    let numberImg = hour;
    if (hour > 7 && hour <= 12) {
        $(".bg").css("background-image", "url('./assets/imgs/" + numberImg + ".jpg')");
    }
    else if (hour > 12 && hour < 18) {
        $(".bg").css("background-image", "url('./assets/imgs/" + numberImg + ".jpg')");
    }
    else {
        $(".bg").css("background-image", "url('./assets/imgs/" + numberImg + ".jpg')");
    }
    $('')

    let response = '';
    $.ajax({
        type: "GET",
        url: "https://api.github.com/users/Ddieudonne",
        async: false,
        success: function (text) {
            response = text;
        }
    });

    $('.urlgithub').text('@' + response.name);
    $('.followsers').text('Followers ' + response.followers);
    $('.following').text('following ' + response.following);
    $('.from').text(response.location);
    $('.public_repos').text(response.public_repos);

    var arrayRepos = [];

    $.ajax({
        type: "GET",
        url: "https://api.github.com/users/Ddieudonne/repos",
        async: false,
        success: function (arrayServer) {
            arrayRepos = arrayServer;
        }
    });

    arrayRepos.forEach(function (element) {
        $('.row-centered').append("<a class='col-lg-2 cube'>" + '<strong>' + element.name + '</strong>' + element.description + '<br>' + element.language + '<br>' + '<br>' + new Date(element.created_at).toLocaleDateString('fr') + "</a>")
    });

});