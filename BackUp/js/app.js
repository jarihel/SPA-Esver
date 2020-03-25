let diseñador = '\nDISEÑADOR:\n///////////////////////////////////////////////////////' +
    '\n//  _   _   _                                   ___  //' +
    '\n// ||X  X|--||  ||XXX|XX ||--  XX  ||   ||   -- X || //' +
    '\n// || XX||||||  ||---|| X|||| XXXX ||   ||   ||  X   //' +
    '\n// ||   |||||XXX||XXX||  X|||XX  XX||XXX||XXX||||_X  //' +
    '\n//                                                   //' +
    '\n///////////////////////////////////////////////////////';
console.log(diseñador);

/////////////////////////////////////////////////////////
///   _    _         ___                          ___  //
///  |\\  //|--||  ||""" \\ ||--  /\  ||   ||   --\  | //
///  ||\\//||||||  ||---||\\|||| //\\ ||   ||   || \\  //
///  ||    |||||___||___|| \||||//  \\||___||___|||__\ //
///                                                    //
/////////////////////////////////////////////////////////          

let sidebar = document.getElementById("sidebar");
let links2 = document.querySelectorAll('a2');
let links3 = document.querySelectorAll('a3');
let empresa = document.getElementById("empresa");
let boton = document.getElementById("btn");
let home = document.getElementById('esver');


let i;


function contenido(url, metodo) {
    let http_metodo = metodo || 'get';
    let xhr = new XMLHttpRequest();
    xhr.open(http_metodo, url);
    xhr.send();
    return xhr;
}

function contain() {
    return sidebar.classList.contains('servicios') ||
        sidebar.classList.contains('abrir') ||
        sidebar.classList.contains('clientes') ||
        sidebar.classList.contains('covertura') ||
        sidebar.classList.contains('contacto');
}

function info(element) {
    element.addEventListener('click', e => {
        e.preventDefault();
        let id = element.id;
        let archivo = `contenido/${id}.html`
        let xhr = contenido(archivo);
        xhr.addEventListener('load', () => {
            setTimeout(() => {
                if (xhr.status == 200) {
                    sidebar.innerHTML = xhr.response;
                }
            }, 0);
        })
    })
}
links2.forEach(link => {
    info(link);
});
links3.forEach(link => {
    info(link);
});

empresa.addEventListener('click', e => {
    let bolean = contain();
    console.log(`entra ${bolean}`);
    if (bolean) {
        sidebar.className = `sidebar`;
        bolean = contain();
    }
})

function createbar(id) {
    let bolean = contain();
    if (i === id) {
        console.log(`entra ${bolean}`);
        if (bolean) {
            sidebar.className = `sidebar`;
            bolean = contain();
        } else {
            console.log(sidebar.classList);
            sidebar.className = `sidebar ${id}`;
            i = id;
        };

    } else {
        console.log(sidebar.classList);
        sidebar.className = `sidebar ${id}`;
        i = id;
    }
    console.log(`sale ${bolean}`);
}
links2.forEach((link) => {
    link.addEventListener('click', e => {
        console.log(link.id);
        createbar('abrir');
    })
})

links3.forEach((link) => {
    link.addEventListener('click', e => {
        console.log(link.id);
        createbar(link.id);
    })
})

home.addEventListener('click', e => {
    window.location.reload();
})