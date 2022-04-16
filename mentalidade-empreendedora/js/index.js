const expand = (ev) => {

    console.log(ev.target)


    ev.target.localName == 'li' ? (
        ev.target.parentElement.classList.toggle("actual"),
        ev.target.parentElement.lastElementChild.classList.toggle("expand"))
        :
        (ev.target.parentElement.classList.toggle("actual"),
            ev.target.parentElement.lastElementChild.classList.toggle("expand")
        )

    const removeClass = ev.target.parentElement.classList.contains("actual")
    const removePaiClass = ev.target.parentElement.classList.contains("actual")

    console.log("depois: " + removeClass)
    removeClass || removePaiClass ? document.querySelectorAll(".actual + p").forEach(list => list.classList.remove('not-visible'))
        : (
            document.querySelectorAll(`ul p`).forEach(texto => texto.classList.add('not-visible')),
            document.querySelectorAll(`li img`).forEach(expand => expand.classList.remove('expand')),
            document.querySelectorAll(`li`).forEach(expand => expand.classList.remove('actual'))
        )
}

const inicar = () => {

    document.querySelectorAll(`ul p`).forEach(texto => texto.classList.add('not-visible'));
    document.querySelectorAll(`li img`).forEach(expand => expand.classList.remove('expand'));
    document.querySelectorAll(`li`).forEach(expand => {
        expand.classList.remove('actual');
        expand.setAttribute('onclick', "expand(event)");
    });
}

inicar()
