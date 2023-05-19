import React, { useState } from 'react';


const JuegoCompletar = () => {
  const [oracion, setOracion] = useState('');
  const [opciones, setOpciones] = useState([]);
  const [palabraFaltante, setPalabraFaltante] = useState('');
  const [opcionCorrecta, setOpcionCorrecta] = useState('');
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState('');

  const oraciones = [
    'El _____ es un animal mamífero que vive en las selvas.',
    'El _____ es una bebida caliente que se suele tomar en el desayuno.',
    'La _____ es el idioma oficial de Brasil.',
    'El _____ es un instrumento musical de cuerda.',
  ];

  const palabras = [
    [
      '/src/img/descarga (1).jpg',
      '/src/img/images (1).jpg',
      '/src/img/sign-language-hands-gesture-heart-love-line-and-fill-icon-free-vector.jpg',
      '/src/img/images (1).jpg'
    ],
    [
      '',
      '',
      '',
      ''
    ],
    [
      '',
      '',
      '',
      ''
    ],
    [
      '',
      '',
      '',
      ''
    ],
  ];

  const generarOracion = () => {
    const indice = Math.floor(Math.random() * oraciones.length);
    const oracionSeleccionada = oraciones[indice];
    const opcionesSeleccionadas = palabras[indice];
    const palabraFaltanteSeleccionada = oracionSeleccionada.split('_____')[0];
    const opcionCorrectaSeleccionada = opcionesSeleccionadas[0];

    setOracion(oracionSeleccionada);
    setOpciones(opcionesSeleccionadas);
    setPalabraFaltante(palabraFaltanteSeleccionada);
    setOpcionCorrecta(opcionCorrectaSeleccionada);
    setRespuestaSeleccionada('');
  };

  const verificarRespuesta = () => {
    if (respuestaSeleccionada === opcionCorrecta) {
      alert('¡Respuesta correcta!');
      generarOracion();
    } else {
      alert('Respuesta incorrecta. Inténtalo de nuevo.');
    }
  };

  return (
    <div>
      <h1>Juego de completar</h1>
      <p>{oracion.replace('_____', '__________')}</p>
      <div>
        {opciones.map((opcion, index) => (
          <button key={index} onClick={() => setRespuestaSeleccionada(opcion)}>
            <img src={opcion} alt={`Opción ${index + 1}`} />
          </button>
        ))}
      </div>
      <button onClick={verificarRespuesta}>Verificar</button>
      <button onClick={generarOracion}>Siguiente</button>
    </div>
  );
};

export default JuegoCompletar;