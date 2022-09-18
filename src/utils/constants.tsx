export const whiteKeys = ['do', 're', 'mi', 'fa', 'sol', 'la', 'si'];
export const blackKeys = ['reB', 'miB', 'solB', 'laB', 'siB'];

export const solution = ['re', 'la', 'siB', 'sol', 'reB'];

export const puzzle = {
  eng: {
    title: '"A Tale of Birds Without a Voice"',
    stranzas: [
      'First flew the greedy Pelican, Eager for the reward, White wings flailing.',
      `Then came a silent Dove, Flying beyond the Pelican, As far as he
    could.`,
      `A Raven flies in, Flying higher than the Dove, Just to show
    that he can.`,
      `A Swan glides in,
    To find a peaceful spot,
    Next to another bird.`,
      `Finally out comes a Crow,
    Coming quickly to a stop,
    Yawning and then napping.`,
      `Who will show the way,
    Who will be the key,
    Who will lead to
    The silver reward.`,
    ],
  },
  spa: {
    title: '"Un cuento de pájaros sin voz"',
    stranzas: [
      `Primero voló el avaro pelícano,
      ansioso de ser recompensado,
      moviendo sus alas blancas.`,
      `Luego partió una silenciosa paloma,
      volando detrás del pelícano,
      aún más lejano.`,
      `Y ahora es un cuervo,
      volando más alto que la paloma,
      para demostrar que quiere y que puede.`,
      `Llega planeando un cisne,
      buscando un lugar tranquilo,
      al lado de un pájaro amigo.`,
      `Finalmente llega una corneja,
      deteniéndose hábil y rápidamente,
      para dar un bostezo y dormir una siesta.`,
      `¿Quién va a señalar el camino?
      ¿Quién será la clave?
      ¿A quién habrá que seguir hasta la recompensa de plata?`,
    ],
  },
};

export const headerInfo = {
  eng: {
    about: `What's this?`,
    puzzle: `Read Puzzle`,
    tips: `Tips`,
    language: `Language`,
  },
  spa: {
    about: `Acerca`,
    puzzle: `Leer Acertijo`,
    tips: `Tips`,
    language: `Idioma`,
  },
};

export const about = {
  eng: {
    title: 'About',
    info: (
      <h3>
        The{' '}
        <a href='https://silenthill.fandom.com/wiki/%22A_Tale_of_Birds_Without_a_Voice%22'>
          Silent Hill Piano Puzzle
        </a>{' '}
        is a puzzle featured in the first entry of the{' '}
        <a href='https://en.wikipedia.org/wiki/Silent_Hill'>Silent Hill</a>{' '}
        franchise.
      </h3>
    ),
    content: `The Piano Puzzle appears in Silent Hill, and is the second puzzle to
          appear in Midwich Elementary School after the Old Man's Hand puzzle.
          Harry Mason receives the Silver Medallion after successfully
          completing the piano puzzle.

          The center keys (seven whites, five blacks) are covered in blood.
          Harry must hit the right sequence of keys for the Silver Medallion to
          fall over — the last item needed to unlock the clock tower doors.`,
  },
  spa: {
    title: 'Acerca de...',
    info: (
      <h3>
        El{' '}
        <a href='https://silenthill.fandom.com/es/wiki/Un_cuento_de_p%C3%A1jaros_sin_voz'>
          Acertijo del Piano
        </a>{' '}
        es un acertijo que aparece en la primer entrega de la franquicia{' '}
        <a href='https://es.wikipedia.org/wiki/Silent_Hill_(franquicia)'>
          Silent Hill
        </a>
      </h3>
    ),
    content: `"Un cuento de pájaros sin voz" es una nota escrita con sangre que
          Harry Mason puede encontrar en la sala de música en el segundo piso de
          la escuela primaria Midwich. La nota ofrece pistas para lograr
          resolver el Puzzle del piano, el cual se encuentra en la misma sala.
          Al resolver el puzzle, el Medallón de plata caerá desde arriba de la nota 
          hacia el suelo, dándole a Harry la oportunidad de tomarlo; el mismo es necesario para abrir la puerta de la torre del reloj.`,
  },
};

export const tips = {
  eng: {
    title: 'Tips',
    warning: (
      <h3>
        These tips are <b>NOT</b> given when you encounter the puzzle. So if
        you'd like to stay true to the original experience, you might not want
        to read them.
      </h3>
    ),
    content: [
      'The birds are either black or white.',
      'Pay special attention to how the poem "places" the birds.',
      'The title is, perhaps, the biggest clue.',
    ],
  },
  spa: {
    title: 'Tips',
    warning: (
      <h3>
        Estos tips <b>NO</b> fueron dados originalmente al encontrar el puzzle.
        Si deseas experimentar el puzzle de manera original no deberías leerlos
      </h3>
    ),
    content: [
      'Los pájaros son blancos o negros.',
      'Presta atención cómo el poema "ubica" a los pájaros',
      'El título es, probablemente, la pista mas grande.',
    ],
  },
};

export const win = {
  eng: {
    title: 'Well done!',
    time: 'Time spent here',
    keys: 'Keys played',
  },
  spa: {
    title: 'Felicitaciones!',
    time: 'Estuviste aquí',
    keys: 'Tocaste las siguientes teclas',
  },
};
