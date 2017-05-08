$(document).ready(function(){
    //
    var numPokemon = prompt("How many pokemons");
    GetThePokemons(numPokemon);

})
$("#container").on("click", ".poke-btn", function(){
    MorePokeInfo($(this).attr("data-id"))
})

function GetThePokemons(numPokemon){
    for(var i = 1; i <= numPokemon; i++){
        $.get("http://pokeapi.co/api/v2/pokemon/" + i, function(res){
            RenderThePokemon(res.sprites.front_default, res.id);
        })
    }
}

function RenderThePokemon(src, id){
    var somebutton = document.createElement('button');
    somebutton.setAttribute("class", "poke-btn");
    somebutton.setAttribute("data-id", id);
    // var myImg = document.createElement("img");
    // myImg.setAttribute("src", src);
    $(somebutton).append("<img src='" + src + "' alt=''>");
    $('#container').append(somebutton);
}

function MorePokeInfo(id){
    $.get("http://pokeapi.co/api/v2/pokemon/" + id, function(res){
        // console.log(res);
        // build an h1 (name)
        $("#more-poke-info").append("<h1>"+ res.name + "</h1>");
        // build an image
        $("#more-poke-info").append("<img src='" + res.sprites.front_default + "' alt=''>");
        // build an ul from array (moves)
        for(var i=0; i< res.types.length; i++){
        $("#types").append("<li>"+ res["types"][i]["type"]["name"] + "</li>");
        }
        // build an h2 (weight)
        $("#weight").append("<li>"+ res.weight + "</li>");
        $("#height").append("<li>"+ res.height + "</li>");
        SetMoves(res.moves);
    })
}

function SetMoves(moves){
    // create an ul
    // loop through moves
        // crate lis
        // set inner text to move
        for(var i=0; i< moves.length; i++){
        $("#moves").append("<li>"+ moves[i]["move"]["name"] + "</li>");
        }
}
