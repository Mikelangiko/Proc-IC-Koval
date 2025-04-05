import { Pencil } from './oliv';
import { Marker } from './flom';
import { Brush } from './brush';
export class clas_do {
  public static getPaint(
    type: string,
    color: string,
    length: number,
    spec: any
  ) {
    if (type == 'Pencil') return new Pencil(type, color, length, spec);
    else if (type == 'Marker') return new Marker(type, color, length, spec);
    else if (type == 'Brush') return new Brush(type, color, length, spec);
    else throw new Error('fakap');
  }
}
