var qoute = [
    {   'qoute':" Do not take life too seriously. You will not get out alive." ,
        'Auther':"--Elbert Hubbard"
    },
    {   'qoute':" 'The best revenge is massive success' " ,
        'Auther':"--Frank Sinatra"
    },
    {   'qoute':" Do not take life too seriously. You will not get out alive." ,
        'Auther':"--Elbert Hubbard"
    },
    {   'qoute':" You miss 100% of the shots you don't take. " ,
        'Auther':"--Wayne Gretzy"
    },
]

function getQutes(){
    var num = Math.floor(Math.random()*qoute.length)
    console.log(num)
    document.getElementById("quoteOutput").innerHTML = qoute [num].qoute
    document.getElementById("authorOutput").innerHTML = qoute [num].Auther
}