$(document).ready(function () {
    $('#calculate').click(function () {
        var firstname = $('#firstname').val();
        var secondname = $('#secondname').val();
        // const apiUrl = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${secondname}&fname=${firstname}`;
        // const apiKey = '6af48843ccmsh3f32fb4bcc6421cp1b07a5jsn04112440c0c2';


        $.ajax({
            url: `https://love-calculator.p.rapidapi.com/getPercentage?sname=${secondname}&fname=${firstname}`,
            type: 'GET',
            headers: {
                'x-rapidapi-key': '6af48843ccmsh3f32fb4bcc6421cp1b07a5jsn04112440c0c2',
                'x-rapidapi-host': 'love-calculator.p.rapidapi.com'
            },
            success: function (response) {
                result = `
                <div class="container col-sm-3 py-5 px-5 rounded bg-dark bg-opacity-75">
                <h3>${firstname} & ${secondname}</h3>
                <img src="kawaii-girl-anime.gif" alt="Contoh GIF" class="img-cover" height="50px"> <br> 
                <button type="button" class="btn btn-danger">Percentage : ${response.percentage}%</button> <br> 
                <p>${response.result}</p> <br>
                <small>Powered by Muhammad Khairin</small>
                </div>
                `;
                $('#resultLove').html(result)
            }
        })
    })
})