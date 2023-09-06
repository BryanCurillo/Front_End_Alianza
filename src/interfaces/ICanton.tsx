import { IProvincia } from './IProvincia'; // Asegúrate de importar la clase Provincia desde el archivo correcto

export interface ICanton {
    idCanton: number;
    cantonNombre: string;
    idProvincia: IProvincia; // Hacemos idProvincia opcional

}
