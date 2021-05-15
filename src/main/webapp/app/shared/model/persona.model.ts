import { Moment } from 'moment';
import { Sexo } from 'app/shared/model/enumerations/sexo.model';

export interface IPersona {
  id?: number;
  nombre?: string;
  sexo?: Sexo;
  edad?: number;
  peso?: number;
  altura?: number;
  imc?: number;
  fecha?: Moment;
}

export class Persona implements IPersona {
  constructor(
    public id?: number,
    public nombre?: string,
    public sexo?: Sexo,
    public edad?: number,
    public peso?: number,
    public altura?: number,
    public imc?: number,
    public fecha?: Moment
  ) {}
}
