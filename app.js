// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

        function agregarAmigo() {
            const input = document.getElementById('amigo');
            const nombre = input.value.trim();

            if (nombre && !amigos.includes(nombre)) {
                amigos.push(nombre);
                actualizarLista();
                input.value = ''; // Limpiar el campo de entrada
            } else {
                alert('Por favor ingrese un nombre válido o el nombre ya existe.');
            }
        }

        function actualizarLista() {
            const lista = document.getElementById('listaAmigos');
            lista.innerHTML = ''; // Limpiar la lista actual

            amigos.forEach(amigo => {
                const li = document.createElement('li');
                li.textContent = amigo;
                lista.appendChild(li);
            });
        }

        function sortearAmigo() {
            if (amigos.length < 2) {
                alert('Se necesitan al menos 2 amigos para realizar el sorteo.');
                return;
            }

            const resultados = {};
            const amigosSorteados = [...amigos]; // Copia de la lista de amigos
            shuffle(amigosSorteados); // Mezclar la lista

            for (let i = 0; i < amigos.length; i++) {
                resultados[amigos[i]] = amigosSorteados[i];
            }

            mostrarResultados(resultados);
        }

        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]]; // Intercambiar elementos
            }
            return array;
        }

        function mostrarResultados(resultados) {
            const listaResultados = document.getElementById('resultado');
            listaResultados.innerHTML = ''; // Limpiar resultados anteriores

            for (const [amigo, amigoSecreto] of Object.entries(resultados)) {
                const li = document.createElement('li');
                li.textContent = `${amigo} -> ${amigoSecreto}`;
                listaResultados.appendChild(li);
            }
        }


