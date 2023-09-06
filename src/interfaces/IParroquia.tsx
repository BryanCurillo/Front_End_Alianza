import { ICanton } from "./ICanton";

export interface IParroquia {
    idParroquia: number;
    parroquiaNombre: string;
    idCanton: ICanton; // Hacemos idCanton opcional

}
