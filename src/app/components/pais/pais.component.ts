import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css'],
})
export class PaisComponent {
  rutaActual!: string;

  paises: any = {
    peru: {
      texto:
        '-	Perú es un país de Sudamérica que abarca una sección del bosque del Amazonas y Machu Picchu, una antigua ciudad inca en las alturas de los Andes. La región en torno a Machu Picchu, incluido el Valle Sagrado, el Camino del Inca y la ciudad colonial de Cuzco, es rica en sitios arqueológicos. El Perú es uno de los países más variados del mundo. Un país multicultural, lleno de tradiciones, una laureada gastronomía y vastas reservas naturales.',
    },
    chile: {
      texto:
        '- Chile es un país largo y angosto que se extiende por el borde occidental de Sudamérica, con más de 6,000 km de costa en el océano Pacífico. Santiago, su capital, se ubica en un valle rodeado de los Andes y la cordillera de la Costa. En la Plaza de Armas de la ciudad, bordeada de palmeras, se encuentra la catedral neoclásica y el Museo de Historia Nacional. El enorme Parque Metropolitano cuenta con piscinas, un jardín botánico y un zoológico',
    },
    uruguay: {
      texto:
        '-	Uruguay es un país de Sudamérica conocido por su interior verde y costa bordeada de playas. La capital, Montevideo, se ubica en torno a la plaza Independencia, donde alguna vez hubo una ciudadela española. Esta lleva a la Ciudad Vieja, casas coloniales y el Mercado del Puerto con muchos restaurantes de carnes. La Rambla es un paseo costero con puestos de pescados, muelles y parques.',
    },
  };

  constructor(private router: Router) {
    this.rutaActual = this.router.url.substring(6);
  }
}
