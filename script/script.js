function turn_graph(id){
    var image = document.getElementById(id);

    if (image.style.display == "block")
        image.style.display = "none";
    else
        image.style.display = "block";
}

function notify(type) {
    if (type == 'diagnosis')
        alert('Диагноз отправлен!')
    else if (type == 'therapy')
        alert('Терапия назначена!')
}