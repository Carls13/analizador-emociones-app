interface EmotionsInterface {
  happy: {
    title: string,
    image: any,
    description: string[]
  },
  sad: {
    title: string,
    image: any,
    description: string[]
  },
  angry: {
    title: string,
    image: any,
    description: string[]
  },
  ps: {
    title: string,
    image: any,
    description: string[]
  },
  disgust: {
    title: string,
    image: any,
    description: string[]
  },
  fear: {
    title: string,
    image: any,
    description: string[]
  },
  neutral: {
    title: string,
    image: any,
    description: string[]
  },
}



export const EMOTIONS: EmotionsInterface  = {
  happy: {
    title: "Felicidad",
    image: require("./../assets/images/happiness.png"),
    description: [
      "La felicidad es una emoción positiva que se manifiesta cuando una persona experimenta satisfacción, bienestar o alegría. Esta emoción puede surgir de momentos placenteros, logros personales o incluso del simple hecho de sentirse en armonía con la vida. Es importante entender que la felicidad, aunque se desee permanente, es generalmente transitoria y puede fluctuar dependiendo de las circunstancias internas y externas. A nivel biológico, la felicidad está relacionada con la liberación de neurotransmisores como la dopamina y la serotonina, que contribuyen al bienestar general.",
      "Desde una perspectiva psicológica, la felicidad puede tener múltiples dimensiones, incluyendo la felicidad hedónica, basada en el placer, y la felicidad eudaimónica, que tiene más que ver con la realización personal y el sentido de propósito. Entender estas diferencias puede ayudar a identificar qué tipo de felicidad está experimentando el paciente y cómo potenciarla. Es posible que algunos pacientes experimenten felicidad pero aún sientan vacíos o frustraciones en otras áreas, lo que puede ser un buen tema para explorar en la terapia.",
      "Para el terapeuta, es importante fortalecer esta emoción, ayudando al paciente a identificar las fuentes de su felicidad y cómo cultivarla de manera más constante. Se puede profundizar en técnicas como el mindfulness, la gratitud y el establecimiento de metas realistas y significativas. Además, el terapeuta puede trabajar con el paciente para usar esta emoción positiva como un recurso para afrontar mejor los desafíos y momentos difíciles."
    ]
  },
  sad: {
    title: "Tristeza",
    image: require("./../assets/images/sad.png"),
    description: [
      "La tristeza es una emoción profunda que se experimenta en respuesta a situaciones de pérdida, decepción o dolor emocional. A menudo es vista como una emoción negativa, pero cumple una función adaptativa importante, ya que nos invita a reflexionar sobre lo que hemos perdido o lo que ha causado el malestar. La tristeza puede variar en intensidad y duración, desde una leve melancolía hasta un estado más pronunciado que se podría acercar a la depresión. Es clave que el terapeuta diferencie entre tristeza temporal y signos de un trastorno del estado de ánimo.",
      "Cuando una persona está triste, puede experimentar una disminución en su energía, deseo de socializar o capacidad para disfrutar de actividades que antes le eran placenteras. En este estado, es común que el individuo se retraiga, lo cual puede ser un mecanismo de defensa para procesar el dolor de manera interna. Sin embargo, si este retraimiento se prolonga, puede ser útil investigar si hay otras emociones subyacentes, como la culpa o el miedo, que puedan estar amplificando la tristeza.",
      "El terapeuta debe crear un espacio seguro para que el paciente exprese esta emoción sin sentirse juzgado. Acompañar al paciente a través de su tristeza puede incluir ayudarle a validar su dolor, identificar el significado detrás de su malestar y encontrar formas constructivas de afrontarlo. Estrategias como la terapia cognitivo-conductual o el enfoque en el autocuidado emocional pueden ser herramientas valiosas para facilitar la recuperación emocional."
    ]
  },
  angry: {
    title: "Ira",
    image: require("./../assets/images/anger.png"),
    description: [
      "La ira es una emoción intensa que surge cuando una persona siente que sus derechos, límites o expectativas han sido vulnerados. Aunque puede parecer destructiva, la ira tiene una función protectora, ayudando a las personas a identificar situaciones que perciben como injustas o amenazantes. No obstante, si no se maneja adecuadamente, puede llevar a comportamientos impulsivos o dañinos, tanto para uno mismo como para los demás. Es importante que el paciente aprenda a reconocer sus detonantes y a gestionar esta emoción de manera saludable.",
      "Esta emoción está ligada a una activación fisiológica importante, como el aumento de la frecuencia cardíaca y la tensión muscular. A menudo, la ira es una respuesta inmediata ante el estrés, el miedo o la frustración acumulada. Para muchos pacientes, la ira puede enmascarar otras emociones más vulnerables, como la tristeza o el miedo, lo que hace crucial que el terapeuta explore más allá de la superficie para identificar las causas profundas de esta emoción.",
      "El terapeuta puede trabajar con el paciente en técnicas de manejo de la ira, como la identificación temprana de los signos físicos y emocionales de esta emoción, y el uso de herramientas como la respiración profunda o la distracción positiva. También es clave explorar la narrativa personal del paciente en torno a la ira y ayudarlo a desarrollar una mayor autoconciencia, de manera que pueda enfrentar las situaciones desafiantes de forma más equilibrada y constructiva."
    ]
  },
  ps: {
    title: "Sorpresa",
    image: require("./../assets/images/disgust.png"),
    description: [
      "La sorpresa es una emoción breve pero poderosa que ocurre cuando una persona enfrenta algo inesperado. Esta emoción puede ser tanto positiva como negativa, dependiendo de la naturaleza del evento que la desencadena. En términos evolutivos, la sorpresa cumple una función importante al interrumpir el pensamiento y dirigir toda la atención hacia la nueva información que ha surgido, lo que permite una reevaluación rápida del entorno. Este proceso de reevaluación puede desencadenar otras emociones, como alegría, miedo o disgusto, dependiendo del contexto.",
      "A nivel fisiológico, la sorpresa puede incluir reacciones como el aumento del ritmo cardíaco, la dilatación de las pupilas y la tensión muscular. Psicológicamente, la sorpresa tiene la capacidad de alterar el estado emocional de una persona de manera súbita, lo que puede provocar confusión temporal o incluso sensación de vulnerabilidad. Sin embargo, no todas las sorpresas son negativas; algunas pueden ser el catalizador de cambios positivos o de oportunidades de crecimiento.",
      "Para el terapeuta, la sorpresa puede ser una puerta de entrada para explorar cómo el paciente reacciona ante lo inesperado y qué tipo de mecanismos de afrontamiento tiene. Trabajar en la flexibilidad cognitiva y emocional puede ayudar al paciente a enfrentar mejor lo impredecible, mientras que también se puede explorar si la sorpresa está conectada con expectativas no cumplidas o con la percepción de control sobre su vida. Esto puede ayudar a mejorar la resiliencia del paciente ante futuras sorpresas."
    ]
  },
  disgust: {
    title: "Disgusto",
    image: require("./../assets/images/disgust.png"),
    description: [
      "El disgusto es una emoción visceral que se desencadena cuando una persona encuentra algo repulsivo o moralmente inaceptable. Evolutivamente, el disgusto surgió como una respuesta para protegernos de alimentos o sustancias que podían ser dañinas, pero en los seres humanos también puede extenderse a aspectos sociales o éticos. El disgusto tiene un componente fisiológico claro, como la contracción facial y la retirada del estímulo ofensivo, y puede estar profundamente ligado a las creencias y valores del individuo.",
      "Cuando el disgusto es provocado por factores no físicos, como comportamientos o ideas, puede señalar una reacción emocional hacia algo que va en contra de los principios del paciente. Es importante que el terapeuta ayude al paciente a explorar si el disgusto es una respuesta desproporcionada o si tiene raíces en experiencias pasadas que no han sido completamente procesadas. En algunos casos, el disgusto puede estar relacionado con prejuicios o con la intolerancia hacia la diferencia.",
      "El terapeuta puede trabajar con el paciente para desentrañar las causas del disgusto y ayudarle a comprender si esta emoción está interfiriendo en su vida cotidiana o en sus relaciones interpersonales. En caso de que el disgusto esté relacionado con experiencias traumáticas, el enfoque terapéutico debe ser especialmente cuidadoso, utilizando técnicas de desensibilización o exposición controlada para ayudar al paciente a confrontar su malestar de manera segura y gradual."
    ]
  },
  fear: {
    title: "Miedo",
    image: require("./../assets/images/fear.png"),
    description: [
      "El miedo es una emoción básica que actúa como un mecanismo de defensa ante situaciones que se perciben como amenazantes. Aunque puede ser incómodo, el miedo tiene un valor adaptativo, ya que nos alerta sobre peligros potenciales y nos prepara para reaccionar de manera protectora. Sin embargo, cuando el miedo se vuelve desproporcionado o constante, puede interferir significativamente en la vida cotidiana y convertirse en un factor limitante, como en el caso de las fobias o la ansiedad generalizada.",
      "A nivel fisiológico, el miedo activa la respuesta de lucha o huida, liberando adrenalina y aumentando el ritmo cardíaco, lo que prepara al cuerpo para enfrentar la amenaza o escapar de ella. Psicológicamente, el miedo puede estar vinculado a experiencias pasadas de trauma o a creencias irracionales que amplifican el riesgo percibido. Explorar estas fuentes puede ser crucial para ayudar al paciente a distinguir entre miedos reales y aquellos que son producto de su imaginación o de una interpretación distorsionada de la realidad.",
      "El terapeuta debe abordar el miedo con una combinación de empatía y técnica. Trabajar en la identificación y comprensión de los detonantes del miedo puede ser el primer paso. Luego, el uso de técnicas como la exposición gradual, la reestructuración cognitiva y la relajación progresiva puede ser fundamental para ayudar al paciente a manejar su miedo. Además, se puede fomentar la autocompasión y la aceptación del miedo como una emoción natural, pero manejable."
    ]
  },
  neutral: {
    title: "Neutral",
    image: require("./../assets/images/neutral.png"),
    description: [
      "La neutralidad emocional se caracteriza por la ausencia de emociones intensas, reflejando un estado de calma o equilibrio. En lugar de ser un signo de apatía o desconexión, este estado puede indicar que el paciente está en un momento de estabilidad emocional o que está en el proceso de integrar sus experiencias de manera reflexiva. La neutralidad puede ser un espacio valioso para la introspección, permitiendo al paciente observar sus pensamientos y emociones sin sentirse abrumado por ellos.",
      "Es posible que algunos pacientes experimenten la neutralidad como un descanso después de emociones intensas, mientras que otros puedan interpretarla como una desconexión emocional. En ambos casos, es importante que el terapeuta ayude al paciente a identificar si este estado es saludable o si puede estar enmascarando una dificultad para conectar con sus emociones. En un contexto terapéutico, la neutralidad puede ser vista como una oportunidad para evaluar el estado general del bienestar emocional del paciente.",
      "Para el terapeuta, este estado de neutralidad puede ser útil para hacer una pausa y revisar el progreso del paciente en su proceso terapéutico. Preguntar al paciente sobre cómo percibe su propia neutralidad puede revelar información clave sobre sus patrones emocionales y sobre cómo maneja las transiciones entre emociones intensas. Además, es un buen momento para introducir técnicas de mindfulness, que ayudan a mantener esta sensación de calma y equilibrio a lo largo del tiempo."]
  }
};