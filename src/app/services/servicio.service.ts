import { Injectable } from '@angular/core';
import { Post } from '../Post';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private arrPosts: Post[];
  private arrCategories: string[];

  constructor() {
    this.arrPosts = [
      {
        titulo: 'Museo del Prado',
        texto: 'El Museo Nacional del Prado, en Madrid, España, es uno de los más importantes del mundo, así como uno de los más visitados (el decimoctavo en 2013 entre los museos de arte),​ y está considerada la institución cultural más importante de España, según el Observatorio de la Cultura de 2019, estudio realizado entre varios centenares de profesionales del sector.8 Singularmente rico en cuadros de maestros europeos de los siglos XVI al XIX, según el historiador del arte e hispanista Jonathan Brown «pocos se atreverían a poner en duda que es el museo más importante del mundo en pintura europea».',
        autor: 'Miguel Falomir',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Museo_del_Prado_2016_%2825185969599%29.jpg/280px-Museo_del_Prado_2016_%2825185969599%29.jpg',
        fecha: new Date,
        categoria: 'Museos destacados'
      },
      {
        titulo: 'Museo Reina Sofía',
        texto: 'En la colección permanente del museo destaca un núcleo de obras de grandes artistas españoles del siglo XX, especialmente Pablo Picasso, Salvador Dalí y Joan Miró, representados ampliamente y con algunas de sus mejores obras. Son muy relevantes también las colecciones de arte surrealista (con obras de Francis Picabia, René Magritte, Óscar Domínguez o Yves Tanguy, además de los ya citados Miró y Dalí), del cubismo (que a la colección Picasso añade nombres como Juan Gris, María Blanchard, Georges Braque, Robert Delaunay, Fernand Léger o Albert Gleizes), y la presencia de artistas de la Nueva Figuración, como Francis Bacon o Antonio Saura. ',
        autor: 'Borja Villel',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Madrid_-_Museo_Nacional_Centro_de_Arte_Reina_Sof%C3%ADa_%28MNCARS%29_03.JPG/280px-Madrid_-_Museo_Nacional_Centro_de_Arte_Reina_Sof%C3%ADa_%28MNCARS%29_03.JPG',
        fecha: new Date,
        categoria: 'Museos destacados'
      },
      {
        titulo: 'Las mejores churrerías',
        texto: 'No hace falta que vuelvas de fiesta en modo zombie y como si no hubieses comido durante años para que unos churros con chocolate te sepan a gloria. Eso sí, buenos no están en cualquier lugar, porque los hay en versión porra o en churro, pero también los hay aceitosos o que parecen fabricados con chicle, pero para que no te encuentres con algunos de estos y aumentes de peso en vano, nosotros te decimos dónde te puedes comer los mejores churros en Madrid.',
        autor: 'Bloguero anónimo',
        imagen: 'https://aws.traveler.es/prod/designs/v1/assets/745x471/117463.jpg',
        fecha: new Date,
        categoria: 'Comida típica'
      },
      {
        titulo: 'Cocido madrileño',
        texto: 'El cocido madrileño es uno de los platos más representativos de la cocina de Madrid. Consiste en un guiso cuyo ingrediente principal son los garbanzos y los secundarios, aunque con gran protagonismo, diversas verduras, carnes y tocino de cerdo con algún embutido. Su origen es humilde y era consumido inicialmente por clases más bajas, llegando poco a poco a la alta sociedad debido a su inclusión en los menús de los restaurantes. Comparte origen con el "cocido montañés" o el cocido maragato, entre otros cocidos y potajes que se realizan en toda la geografía española, y algunos autores lo consideran una evolución del árabe cuscús, otros de la olla podrida y otros de la adafina hebrea y culetraba. La popularidad de esta receta se ha extendido desde Madrid al resto de España. El garbanzo fue introducido en España en la época de Cartago y posteriormente utilizado en los cocidos sefarditas de la edad medieval.',
        autor: 'Bloguero anónimo',
        imagen: 'https://i.blogs.es/31e3ce/cocido-madrileno/840_560.jpg',
        fecha: new Date,
        categoria: 'Comida típica'
      },
      {
        titulo: 'Parque del Retiro',
        texto: 'El parque del Retiro o parque del Buen Retiro, popularmente conocido como el Retiro, es un jardín histórico y parque público situado en Madrid (España). Considerado como una de las principales atracciones turísticas de la ciudad, alberga numerosos conjuntos arquitectónicos, escultóricos y paisajísticos de los siglos XVII a XXI, entre los que destacan el Monumento a Alfonso XII, el Palacio de Cristal, el Estanque Grande, el Parterre, la Puerta de Felipe IV, el Real Observatorio Astronómico y la fuente de la Alcachofa; e incluso anteriores, como la ermita de San Pelayo y San Isidoro, de origen románico. ',
        autor: 'Miguel Falomir',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Palacio_de_Cristal.jpg/266px-Palacio_de_Cristal.jpg',
        fecha: new Date,
        categoria: 'Lugares a visitar'
      },
      {
        titulo: 'Templo de Debod',
        texto: 'El Templo de Debod es un edificio del antiguo Egipto localizado actualmente en la ciudad española de Madrid. Está situado al oeste de la plaza de España, junto al paseo del Pintor Rosales (parque del Oeste), en un alto donde se encontraba el Cuartel de la Montaña. Al ser trasladado a España, se situó de manera que conservase aproximadamente la misma orientación que en su lugar de origen, de este a oeste. ',
        autor: 'Borja Villel',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Templo_de_Debod_Madrid.JPG/245px-Templo_de_Debod_Madrid.JPG',
        fecha: new Date,
        categoria: 'Lugares a visitar'
      },
    ];
    this.arrCategories = ['', 'Comida típica', 'Lugares a visitar', 'Museos destacados'];
  }

  getCategories(): string[] {
    return this.arrCategories;
  }

  getAllPosts(): Post[] {
    return this.arrPosts;
  }

  getByCategory(pCategory): Promise<Post[]> {
    if (pCategory === '') {
      return Promise.resolve(this.arrPosts);
    } else {
      return Promise.resolve(this.arrPosts.filter(post => post.categoria === pCategory));
    }

  }

  addPost(pPost: Post): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      this.arrPosts.push(pPost);
      console.log(this.arrPosts)
      resolve(this.arrPosts)
    })
  }




}
