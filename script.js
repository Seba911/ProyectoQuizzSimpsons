function pushNewPlayerInTopFive() {
    if (jugadorNuevo[0].puntajeFinal >= arrayTopFive[0].puntajeFinal) {
        arrayTopFive.unshift(jugadorNuevo[0]);
        arrayTopFive.pop();
        mostrarTopFive(true);
        showDiv("divHeader");
        Swal.fire({
            title: '🏆🥇Saliste 1°!🥇🏆 ',
            html:
                'Sos el más simpsonmaniaco del Quizz!<br />' +
                `Tu puntaje final fue <b>${puntaje} puntos.</b>`,
            confirmButtonText:
                'YUHUU!',
            imageUrl: './images/primerLugar.gif',
            imageAlt: 'primerLugar',
            imageWidth: 300,
            imageHeight: 200,
        })
        acomodarDivIntentosPuntaje(),
        hideDiv("divPreguntas"),
        showDivPlayAgain("divPlayAgain"),
        cargarLocalStorage(arrayTopFive)

    } else if (arrayTopFive[0].puntajeFinal >= jugadorNuevo[0].puntajeFinal && jugadorNuevo[0].puntajeFinal >= arrayTopFive[1].puntajeFinal) {
        arrayTopFive.splice(1, 0, jugadorNuevo[0]);
        arrayTopFive.pop();
        mostrarTopFive(true);
        showDiv("divHeader");
        Swal.fire({
            title: '🥈Saliste 2°!🥈',
            html:
                'Ese que salió primero sí que te bailo sabroso.<br />' +
                `Tu puntaje final fue <b>${puntaje} puntos.</b>`,
            confirmButtonText:
                'YUHUU!',
            imageUrl: './images/segundoLugar.gif',
            imageAlt: 'segundoLugar',
            imageWidth: 300,
            imageHeight: 200,
        })
        acomodarDivIntentosPuntaje(),
        hideDiv("divPreguntas"),
        showDivPlayAgain("divPlayAgain"),
        cargarLocalStorage(arrayTopFive)

    } else if (arrayTopFive[1].puntajeFinal >= jugadorNuevo[0].puntajeFinal && jugadorNuevo[0].puntajeFinal >= arrayTopFive[2].puntajeFinal) {
        arrayTopFive.splice(2, 0, jugadorNuevo[0]);
        arrayTopFive.pop();
        mostrarTopFive(true);
        showDiv("divHeader");
        Swal.fire({
            title: '🥉Saliste 3°!🥉',
            html:
                `Tu puntaje final fue <b>${puntaje} puntos.</b>`,
            confirmButtonText:
                'YUHUU!',
            imageUrl: './images/tercerLugar.gif',
            imageAlt: 'tercerLugar',
            imageWidth: 300,
            imageHeight: 200,
        })
        acomodarDivIntentosPuntaje(),
        hideDiv("divPreguntas"),
        showDivPlayAgain("divPlayAgain"),
        cargarLocalStorage(arrayTopFive)

    } else if (arrayTopFive[2].puntajeFinal >= jugadorNuevo[0].puntajeFinal && jugadorNuevo[0].puntajeFinal >= arrayTopFive[3].puntajeFinal) {
        arrayTopFive.splice(3, 0, jugadorNuevo[0]);
        arrayTopFive.pop();
        mostrarTopFive(true);
        showDiv("divHeader");
        Swal.fire({
            title: '🎖Saliste 4°!🎖  ',
            html:
                'No es verguenza caer ante el mejor.<br />' +
                `Tu puntaje final fue <b>${puntaje} puntos.</b>`,
            confirmButtonText:
                'YUHUU!',
            imageUrl: './images/cuartoLugar.gif',
            imageAlt: 'cuartoLugar',
            imageWidth: 300,
            imageHeight: 200,
        })
        acomodarDivIntentosPuntaje(),
        showDivPlayAgain("divPlayAgain"),
        hideDiv("divPreguntas"),
        cargarLocalStorage(arrayTopFive)

    } else if (arrayTopFive[3].puntajeFinal >= jugadorNuevo[0].puntajeFinal && jugadorNuevo[0].puntajeFinal >= arrayTopFive[4].puntajeFinal) {
        arrayTopFive.splice(4, 0, jugadorNuevo[0]);
        arrayTopFive.pop();
        mostrarTopFive(true);
        showDiv("divHeader");
        Swal.fire({
            title: '🎖Saliste 5°!🎖  ',
            html:
                'Por lo menos no se puede caer más bajo..!<br />' +
                `Tu puntaje final fue <b>${puntaje} puntos.</b>`,
            confirmButtonText:
                'YUHUU!',
            imageUrl: './images/quintoLugar.gif',
            imageAlt: 'quintoLugar',
            imageWidth: 300,
            imageHeight: 200,
        })
        acomodarDivIntentosPuntaje(),
        showDivPlayAgain("divPlayAgain"),
        hideDiv("divPreguntas"),
        cargarLocalStorage(arrayTopFive)

    } else (
        acomodarDivIntentosPuntaje(),
        hideDiv("divPreguntas"),
        showDivPlayAgain("divPlayAgain"),
        showDiv("divHeader"),
        Swal.fire({
            title: 'Oh no! ',
            html:
                `<b>${puntaje} puntos</b> no son suficientes para entrar en la cumbancha.<br />` +
                `<b>Gracias, vuelvan prontos!</b>`,
            confirmButtonText:
                'PERO..!',
            imageUrl: './images/graciasVuelvaPronto.jpg',
            imageAlt: 'primerLugar',
            imageWidth: 300,
            imageHeight: 200,
        })        
    )

}

function stackPuntaje(ultimoPuntaje, respuestaCorrecta, doble, tryingIntentos) {
    if (doble === false && tryingIntentos === 3) {
        ultimoPuntaje = (ultimoPuntaje + respuestaCorrecta)
    } else if (doble === true && tryingIntentos === 3) {
        ultimoPuntaje = (ultimoPuntaje + respuestaCorrecta) * 2
    } else if (doble === true && tryingIntentos === 2) {
        ultimoPuntaje = (ultimoPuntaje + respuestaCorrecta) * 2 - 25
    } else if (doble === true && tryingIntentos === 1) {
        ultimoPuntaje = (ultimoPuntaje + respuestaCorrecta) * 2 - 25
    } else if (tryingIntentos === 2) {
        ultimoPuntaje = (ultimoPuntaje + respuestaCorrecta) - 25
    } else if (tryingIntentos === 1) {
        ultimoPuntaje = (ultimoPuntaje + respuestaCorrecta) - 35
    } else if (tryingIntentos === 1 && ultimoPuntaje < 0) {
        ultimoPuntaje
    } else {
        ultimoPuntaje
    }

    puntaje = ultimoPuntaje // puntaje se guarda y cambia su valor
    jugadorNuevo[0].puntajeFinal = ultimoPuntaje
    duplicarPuntaje = false // duplicarPuntaje pasa a false en caso que una respuesta tenga el duplicarPuntaje en true
    intentos = tryingIntentos // intentos se guarda y cambia su valor a los intentos de fallo que tendria para las proximas preguntas
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function hideDiv(id_div) {
    document.getElementById(id_div).className = "d-none"

}

function showDiv(id_div) {
    document.getElementById(id_div).className = `d-flex justify-content-around text-center align-items-center bgGradientAlpha`
}

function showDivPlayAgain(id_div) {
    document.getElementById(id_div).className = `d-block`
    containerPlayAgainCumbancha.style = "position:absolute; display:flex;flex-wrap:wrap; justify-content: center "
}

function cargarLocalStorage(top5) {
    localStorage.setItem("jugadoresTop5", JSON.stringify(top5))
}

function mostrarTopFive(refreshTopFive) {
    if (refreshTopFive === true) {
        const oldLi = document.querySelector('#topFive');
        removeAllChildNodes(oldLi);
        arrayTopFive.forEach( (top5, puesto) => { 
            let li = document.createElement("li")
            // li.innerHTML = `<b>${puesto + 1}</b>° ${top5.nombreJugador}: ${top5.puntajeFinal} pts.${arrMedallas[puesto]??""}`;
            if(puesto +1 === 1){
                li.innerHTML = `<div class="scaleTop" style="text-align:left; background-color:white; padding:10px 0px 10px 0px; margin-bottom:5px; border-radius: 5px">
                                    <span style="background: linear-gradient(45deg, rgba(162,100,0,1) 0%, rgba(255,188,0,1) 46%, rgba(255,240,177,1) 100%); padding:11px; border-radius:5px">
                                    <b style="color:white">${puesto + 1}°</b>
                                    </span> 
                                    <span style="margin-left:9px">${top5.nombreJugador}: ${top5.puntajeFinal} pts.${arrMedallas[puesto]??""}</span>
                                </div>`
            } else if(puesto + 1 === 2){
                li.innerHTML = `<div class="scaleTop" style="text-align:left; background-color:white; padding:10px 0px 10px 0px; margin-bottom:5px; border-radius: 5px">
                                    <span style="background: linear-gradient(45deg, rgba(101,101,101,1) 0%, rgba(167,167,167,1) 44%, rgba(235,235,235,1) 100%); padding:11px; border-radius:5px">
                                    <b style="color:white">${puesto + 1}°</b>
                                    </span> 
                                    <span style="margin-left:9px">${top5.nombreJugador}: ${top5.puntajeFinal} pts.${arrMedallas[puesto]??""}</span>
                                </div>`
            } else if (puesto + 1 === 3){
                li.innerHTML = `<div class="scaleTop" style="text-align:left; background-color:white; padding:10px 0px 10px 0px; margin-bottom:5px; border-radius: 5px">
                                    <span style="background: linear-gradient(45deg, rgba(71,42,0,1) 0%, rgba(215,101,0,1) 49%, rgba(255,224,193,1) 100%); padding:11px; border-radius:5px">
                                    <b style="color:white">${puesto + 1}°</b>
                                    </span> 
                                    <span style="margin-left:9px">${top5.nombreJugador}: ${top5.puntajeFinal} pts.${arrMedallas[puesto]??""}</span>
                                </div>`
            } else {
                li.innerHTML = `<div class="scaleTop" style="text-align:left; background-color:white; padding:10px 0px 10px 0px; margin-bottom:5px; border-radius: 5px">
                                    <span style="background-color:#e1e1e1; padding:11px; border-radius:5px">
                                    <b style="color:#000000">${puesto + 1}°</b>
                                    </span> 
                                    <span style="margin-left:9px">${top5.nombreJugador}: ${top5.puntajeFinal} pts.${arrMedallas[puesto]??""}</span>
                                </div>`
            }
            li.style.display = ""
            liTopFive.append(li)

        })
    } else {
        arrayTopFive.forEach( (top5, puesto) => { 
            let li = document.createElement("li")
            // li.innerHTML = `<b>${puesto + 1}</b>° ${top5.nombreJugador}: ${top5.puntajeFinal} pts.${arrMedallas[puesto]??""}`;
            if(puesto +1 === 1){
                li.innerHTML = `<div class="scaleTop" style="text-align:left; background-color:white; padding:10px 0px 10px 0px; margin-bottom:5px; border-radius: 5px">
                                    <span style="background: linear-gradient(45deg, rgba(162,100,0,1) 0%, rgba(255,188,0,1) 46%, rgba(255,240,177,1) 100%); padding:11px; border-radius:5px">
                                    <b style="color:white">${puesto + 1}°</b>
                                    </span> 
                                    <span style="margin-left:9px">${top5.nombreJugador}: ${top5.puntajeFinal} pts.${arrMedallas[puesto]??""}</span>
                                </div>`
            } else if(puesto + 1 === 2){
                li.innerHTML = `<div class="scaleTop" style="text-align:left; background-color:white; padding:10px 0px 10px 0px; margin-bottom:5px; border-radius: 5px">
                                    <span style="background: linear-gradient(45deg, rgba(101,101,101,1) 0%, rgba(167,167,167,1) 44%, rgba(235,235,235,1) 100%); padding:11px; border-radius:5px">
                                    <b style="color:white">${puesto + 1}°</b>
                                    </span> 
                                    <span style="margin-left:9px">${top5.nombreJugador}: ${top5.puntajeFinal} pts.${arrMedallas[puesto]??""}</span>
                                </div>`
            } else if (puesto + 1 === 3){
                li.innerHTML = `<div class="scaleTop" style="text-align:left; background-color:white; padding:10px 0px 10px 0px; margin-bottom:5px; border-radius: 5px">
                                    <span style="background: linear-gradient(45deg, rgba(71,42,0,1) 0%, rgba(215,101,0,1) 49%, rgba(255,224,193,1) 100%); padding:11px; border-radius:5px">
                                    <b style="color:white">${puesto + 1}°</b>
                                    </span> 
                                    <span style="margin-left:9px">${top5.nombreJugador}: ${top5.puntajeFinal} pts.${arrMedallas[puesto]??""}</span>
                                </div>`
            } else {
                li.innerHTML = `<div class="scaleTop" style="text-align:left; background-color:white; padding:10px 0px 10px 0px; margin-bottom:5px; border-radius: 5px">
                                    <span style="background-color:#e1e1e1; padding:11px; border-radius:5px">
                                    <b style="color:#000000">${puesto + 1}°</b>
                                    </span> 
                                    <span style="margin-left:9px">${top5.nombreJugador}: ${top5.puntajeFinal} pts.${arrMedallas[puesto]??""}</span>
                                </div>`
            }
            li.style.display = ""
            liTopFive.append(li)

        })
    }
}

function nuevoJugador() {
    let arrNuevoJugador

    let nuevoJugador = document.getElementById("nuevoJugador")

    if (nuevoJugador.value == null || nuevoJugador.value == "") {
        Swal.fire({
            title: 'Ingrese su nombre',
            text:'Sin nombre no nos iremos en la cumbancha',
            confirmButtonText:
                'Di-je..SU-BA!',
            imageUrl: './images/dijeSuba.webp',
            imageAlt: 'dijeSuba',
            imageWidth: 300,
            imageHeight: 200,
        })
        // showModalAlerts("Sin nombre no hay cumbancha")
    } else if(nuevoJugador.value.length > 18){
        Swal.fire({
            title: 'Nombre muy largo',
            text:'Los dedos que uso para tipear son demasiado gruesos. Para obtener una barra especial oprima todas las teclas con la palma.',
            confirmButtonText:
                'WAAA..!!😱',
            imageUrl: './images/dedosGruesos.webp',
            imageAlt: 'nombreLargo',
            imageWidth: 300,
            imageHeight: 200,
        })
    } else if(nuevoJugador.value.includes("<") || nuevoJugador.value.includes(">") ){
        Swal.fire({
            title: 'Hacker',
            text:'Ha tratado de mandar un <script> aunque no quiera confesarlo. Un autopatrulla va a ir en este momento a su casa. Mientras tanto puede tratar de seguir jugando poniendo su nombre.',
            confirmButtonText:
                'PORQUEE..?!',
            imageUrl: './images/hackerImg.jpg',
            imageAlt: 'hack',
            imageWidth: 300,
            imageHeight: 200,
        })
    } else {
        hideDiv("divShowForm")
        hideDiv("divHeader")
        nuevoJugador = new newPlayer(nuevoJugador.value, puntaje)
        arrNuevoJugador = nuevoJugador
        jugadorNuevo.push(arrNuevoJugador)
    }
    return arrNuevoJugador
}

function localStorageOrNot() {
    if (listaEnLocalStorageTop5) {
        arrayTopFive = listaEnLocalStorageTop5
        mostrarTopFive(true)
    } else {
        arrayTopFive.push(playerOneInTopFive, playerTwoInTopFive, playerThreeInTopFive, playerFourInTopFive, playerFiveInTopFive)
        mostrarTopFive(false)

    }
}

function elegirPersonaje(idPersonajeElegido,urlImgPersonaje) {
    let personajeElegido = document.getElementById(idPersonajeElegido)
    let personajeSelected = document.getElementById("personajeSelected")
    
    hideDiv("divElegirPersonaje")
    showDiv("divPersonajeSeleccionado")
    personajeSelected.innerHTML = `<div style="background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgb(100, 154, 255) 100%); border-radius:9px">
                                    <img src="${urlImgPersonaje}" style="position:relative;height:128px;top: -10px;bottom: 0px;transform: scale(1.16);"/>
                                   </div>
                                   <div style="margin-top:10px">
                                   <h4>Elegiste a <span style="font-weight:700; color:rgba(255,209,0,1)">${personajeElegido.value}</span></h4>
                                   </div>`
    arrPersonajeElegido.push(personajeElegido.value)
}

function createButtonContainer(buttonType, buttonColor, option) {
    buttonType.className = `btn ${buttonColor} appearEffect`
    buttonType.style.padding = "15px 50px 15px 50px"
    buttonType.style.fontSize = "1.4em"
    buttonType.value = `${option}`
    buttonType.innerText = `${option}`
}

function removeButtonsAndQuestion(createButtonA, createButtonB, createButtonC, createButtonD, createQuestion, questionNumber) {
    createButtonA.remove()
    createButtonB.remove()
    createButtonC.remove()
    createButtonD.remove()
    createQuestion.remove()
    questionNumber.remove()
}

// En esta funcion se pasan todos los parametros para validar las respuestas y tambien se crean los botones correspondientes a los que
// se les pasa por medio de los parametros varios de sus valores
function quizzForm(questionID, question, answer, opcionA, opcionB, opcionC, opcionD, duplica, arrayLength) {
    intentos_HTML.textContent = `Intentos: ${intentos}`
    puntaje_HTML.textContent = `Puntaje: ${jugadorNuevo[0].puntajeFinal}`

    let createQuestion = document.createElement("h3")
    createQuestion.className = "appearEffect text-white"
    createQuestion.textContent = `${question}`

    let questionNumber = document.createElement("h6")
    questionNumber.textContent = `PREGUNTA ${questionID} DE ${arrayLength}`
    questionNumber.className = "text-white my-4"

    let createButtonA = document.createElement("button")
    createButtonContainer(createButtonA, "btn-primary", opcionA)

    let createButtonB = document.createElement("button")
    createButtonContainer(createButtonB, "btn-success", opcionB)

    let createButtonC = document.createElement("button")
    createButtonContainer(createButtonC, "btn-danger", opcionC)

    let createButtonD = document.createElement("button")
    createButtonContainer(createButtonD, "btn-warning", opcionD)

    let valueOpcionA = opcionA_HTML.appendChild(createButtonA)
    let valueOpcionB = opcionB_HTML.appendChild(createButtonB)
    let valueOpcionC = opcionC_HTML.appendChild(createButtonC)
    let valueOpcionD = opcionD_HTML.appendChild(createButtonD)
    question_HTML.appendChild(createQuestion)
    questionNumber_HTML.appendChild(questionNumber)


    valueOpcionA.onclick = () => {
        correctOrNot(answer, valueOpcionA.value, duplica)
        intentos_HTML.textContent = `Intentos: ${intentos}`
        puntaje_HTML.textContent = `Puntaje: ${jugadorNuevo[0].puntajeFinal}`
        removeButtonsAndQuestion(createButtonA, createButtonB, createButtonC, createButtonD, createQuestion, questionNumber)
        goNextQuestion(questionID + 1)
    }
    valueOpcionB.onclick = () => {
        correctOrNot(answer, valueOpcionB.value, duplica)
        intentos_HTML.textContent = `Intentos: ${intentos}`
        puntaje_HTML.textContent = `Puntaje: ${jugadorNuevo[0].puntajeFinal}`
        removeButtonsAndQuestion(createButtonA, createButtonB, createButtonC, createButtonD, createQuestion, questionNumber)
        goNextQuestion(questionID + 1)
    }
    valueOpcionC.onclick = () => {
        correctOrNot(answer, valueOpcionC.value, duplica)
        intentos_HTML.textContent = `Intentos: ${intentos}`
        puntaje_HTML.textContent = `Puntaje: ${jugadorNuevo[0].puntajeFinal}`
        removeButtonsAndQuestion(createButtonA, createButtonB, createButtonC, createButtonD, createQuestion, questionNumber)
        goNextQuestion(questionID + 1)
    }
    valueOpcionD.onclick = () => {
        correctOrNot(answer, valueOpcionD.value, duplica)
        intentos_HTML.textContent = `Intentos: ${intentos}`
        puntaje_HTML.textContent = `Puntaje: ${jugadorNuevo[0].puntajeFinal}`
        removeButtonsAndQuestion(createButtonA, createButtonB, createButtonC, createButtonD, createQuestion, questionNumber)
        goNextQuestion(questionID + 1)
    }

}

// Ésta funcion hace que pase de una pregunta a otra
function goNextQuestion(id) {
    if (arrPersonajeElegido[0] === "Homero") {
        if (id === 2) {
            getPreguntas(1,"./preguntasHomero.json")
        } else if (id === 3) {
            getPreguntas(2,"./preguntasHomero.json")
        } else if (id === 4) {
            getPreguntas(3,"./preguntasHomero.json")
        } else {
            pushNewPlayerInTopFive()
        }

    } else if (arrPersonajeElegido[0] === "Milhouse") {
        if (id === 2) {
            getPreguntas(1, "./preguntasMilhouse.json")
        } else if (id === 3) {
            getPreguntas(2, "./preguntasMilhouse.json")
        } else if (id === 4) {
            getPreguntas(3, "./preguntasMilhouse.json")
        } else {
            pushNewPlayerInTopFive()
        }

    } else if (arrPersonajeElegido[0] === "Random") {
        if (id === 2) {
            getPreguntas(1, "./preguntasRandom.json")

        } else if (id === 3) {
            getPreguntas(2, "./preguntasRandom.json")

        } else if (id === 4) {
            getPreguntas(3, "./preguntasRandom.json")

        } else {
            pushNewPlayerInTopFive()
        }
    }
}

function toggleUlLi(){
    if (liTopFive.style.opacity === "0") {
        liTopFive.style.opacity = "1";
        liTopFive.style.transition = "all .5s ease"
        toggleUl.style.paddingTop= "0px"
        toggleUl.style.animation= "cumbanchaMove 2s infinite ease"
        liTopFive.style.transform= "scale(1)";
        liTopFive.style.bottom= "0px";
    } else {
        liTopFive.style.transform= "scale(0)";
        liTopFive.style.opacity = "0";
        toggleUl.style.paddingTop = "100px"
        toggleUl.style.animation= "cumbanchaWiggle 2.5s linear infinite"
        liTopFive.style.bottom= "150px";
      }
}

function acomodarDivIntentosPuntaje(){
    divIntentosPuntaje.style.top=""
    divIntentosPuntaje.style.bottom="1px"
    divIntentosPuntaje.style.borderRadius="25px 25px 0px 0px"
    divIntentosPuntaje.style.boxShadow="5px 0px 7px rgb(82, 82, 82)"
}

const getPreguntas= async (i, dataJson) => {
    let response = await fetch(dataJson)
    let data = await response.json()
    quizzForm(data[i].id,
        data[i].question,
        data[i].answer,
        data[i].op_A,
        data[i].op_B,
        data[i].op_C,
        data[i].op_D,
        data[i].duplicaAnswer,
        data.length
        )
}

function showHearts(intentosHearts, heart1, heart2, heart3) {
    heart1.style.display = "block"
    heart2.style.display = "block"
    heart3.style.display = "block"
    intentosHearts.style.display = "block"
}

function changeHeartColor(heart) {
    heart.style.filter = "grayscale(90%)"
    heart.style.transition = ".5s ease"
}

function correctOrNot(answer, value, duplica) {
    if (answer !== value) {
        intentos--
        if (intentos == 2) {
            Toastify({
                text: "❌DOH!❌",
                duration: 500,
                position:"center",
                gravity: "bottom",
                positionLeft: false,
              }).showToast();
            changeHeartColor(heart3)

        } else if (intentos == 1) {
            Toastify({
                text: "❌DOH!❌",
                duration: 500,
                position:"center",
                gravity: "bottom",
                positionLeft: false,
              }).showToast();
            changeHeartColor(heart2)

        }
        showDivPlayAgain("divPlayAgain")
        if (intentos === 0) {
            Swal.fire({
                title: 'Has perdido!',
                html:
                    'Eres expulsado de la sociedad de simpsonmaniacos para siempre! <br />' +
                    'Y como humillacion final, tendrás que irte de quizz jalando tras de ti, la piedra de la verguenza! <br />' +
                    `Tu puntaje final fue <b>${puntaje} puntos</b> `,
                text: "",
                imageUrl: './images/gifPiedraVerguenza.gif',
                imageAlt: 'Custom image',
            })
            acomodarDivIntentosPuntaje()
            showDiv("divIntentosPuntaje"),
            hideDiv("divPreguntas"),
            showDiv("divHeader")
            showDivPlayAgain("divPlayAgain"),
            changeHeartColor(heart1)
        }

    } else {
        Toastify({
            text: "✔️YUHUU!✔️",
            duration: 500,
            position:"center",
            gravity: "bottom",
            positionLeft: false,
          }).showToast();
        duplicarPuntaje = duplica
        stackPuntaje(puntaje, respuestaCorrecta, duplicarPuntaje, intentos)
        jugadorNuevo[0].puntajeFinal = puntaje
    }
    return intentos
}


class newPlayer {
    constructor(nombreJugador, puntajeFinal) {
        this.nombreJugador = nombreJugador
        this.puntajeFinal = puntajeFinal
    }
}

const playerOneInTopFive = new newPlayer("Jorge", 590)
const playerTwoInTopFive = new newPlayer("Alejandra", 550)
const playerThreeInTopFive = new newPlayer("Mariana", 500)
const playerFourInTopFive = new newPlayer("Agustin", 400)
const playerFiveInTopFive = new newPlayer("Ramiro", 355)

let arrMedallas =["🥇","🥈","🥉"]
let arrayTopFive = []
const jugadorNuevo = []
const arrPersonajeElegido = []

let puntaje = 0 // Puntaje Inicial
let intentos = 3 // 3 Intentos iniciales 
let respuestaCorrecta = 50 // Puntaje por default por cada respuesta correcta. Este valor varia segun la cantidad de intentos que el jugador tenga, a traves de la funcion stackPuntaje()
let duplicarPuntaje = false // Duplica puntaje por seteo en cada respuesta que vienen del json. Si son true, duplica, en false da el puntaje por respuesta correcta que corresponda

const ingresarQuizz = document.querySelector("#ingresarQuizz")

const personaje1 = document.querySelector("#personaje1")
const personaje2 = document.querySelector("#personaje2")
const personaje4 = document.querySelector("#personaje4")
const personajeSelected = document.querySelector("#personajeSelected")
const cambiarPersonajeBoton = document.querySelector("#cambiarPersonaje")
const comenzarQuizz = document.querySelector("#comenzarQuizz")
const questionNumber_HTML = document.getElementById("questionNumber")
const question_HTML = document.getElementById("question")
const opcionA_HTML = document.getElementById("opcionA")
const opcionB_HTML = document.getElementById("opcionB")
const opcionC_HTML = document.getElementById("opcionC")
const opcionD_HTML = document.getElementById("opcionD")
const intentos_HTML = document.getElementById("intentos")
const puntaje_HTML = document.getElementById("puntaje")

const liTopFive = document.getElementById("topFive")
const nadieQuiereMilhouse = document.getElementById("nadieQuiereMilhouse")
const toggleUl = document.getElementById("toggleUl")
const divIntentosPuntaje = document.getElementById("divIntentosPuntaje")

const heart1 = document.getElementById("heart1")
const heart2 = document.getElementById("heart2")
const heart3 = document.getElementById("heart3")
const intentosHearts = document.getElementById("intentosHearts")

const playAgain = document.getElementById("playAgain")
const messagePlayAgain = document.getElementById("messagePlayAgain")

const noPlay = document.getElementById("noPlay")
const containerPlayAgainCumbancha = document.getElementById("containerPlayAgainCumbancha")


let listaEnLocalStorageTop5 = JSON.parse(localStorage.getItem("jugadoresTop5"))

// Al iniciar el programa se llama a la funcion localStorageOrNot(), la cual verifica si hay una lista de jugadores en el localStorage
// En caso que no haya, crea la lista por jugadores que vienen por defecto 
localStorageOrNot()

ingresarQuizz.onclick = (e) => {
    e.preventDefault();
    let nombreJugador = document.getElementById("nombreJugador")
    let nameJugador = nuevoJugador()
    nameJugador == null || nameJugador == "" ? "" : showDiv("divElegirPersonaje");
    nombreJugador.innerHTML = `<h3>Hola ${nameJugador.nombreJugador}</h3>`

}

personaje1.onclick = () => {
    elegirPersonaje("personaje1","./images/perfilHomero.png")
}

personaje2.onclick = () => {
    elegirPersonaje("personaje2","./images/perfilMilhouse.png")
}

personaje4.onclick = () => {
    elegirPersonaje("personaje4","./images/perfilRandom.png")
}

cambiarPersonajeBoton.onclick = () => {
    hideDiv("divPersonajeSeleccionado")
    showDiv("divElegirPersonaje")
    arrPersonajeElegido.pop()
}

personaje2.onmouseover = () => {
    nadieQuiereMilhouse.innerHTML="¿Enserio vas a elegir a Milhouse?"
}
personaje2.onmouseleave = () => {
    nadieQuiereMilhouse.innerHTML="(NADIE QUIERE A MILHOUSE)"
}

toggleUl.onclick = () =>{
    toggleUlLi()
}

comenzarQuizz.onclick = () => {
    hideDiv("divPersonajeSeleccionado")
    showDiv("divPreguntas")
    showDiv("divIntentosPuntaje")
    showHearts(intentosHearts, heart1, heart2, heart3)
    if (arrPersonajeElegido[0] === "Homero") {
        getPreguntas(0, "./preguntasHomero.json")

    } else if (arrPersonajeElegido[0] === "Milhouse") {
        getPreguntas(0, "./preguntasMilhouse.json")

    } else if (arrPersonajeElegido[0] === "Random") {
        getPreguntas(0, "./preguntasRandom.json")
    }
}

playAgain.onclick = () =>{
    location.reload()
}

noPlay.onclick = () => {
    messagePlayAgain.innerText="Elegiste..No"
}



