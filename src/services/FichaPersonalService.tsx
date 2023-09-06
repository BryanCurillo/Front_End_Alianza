import React, { useState } from 'react';
import axios, {AxiosInstance} from "axios";
import { IFichaPersonal } from '../interfaces/IFichaPersonal';

const API_BASE_URL = 'http://localhost:8080/fichaPersonal/';

export class FichaPersonalService {

    private api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: API_BASE_URL
        });
    }

    getAllCap() {
        //Método para listar todas los Usuarios
        return this.api.get("get").then((res) => res.data);
    }

    save(fichaPersonal: any) {
        console.log(fichaPersonal)
        return this.api.post("post", fichaPersonal).then((res) => res.data)
            .catch(error => {
                throw error
            })
    }

    updateFichaPersonal(id: number, fichaPersonal: IFichaPersonal) {
        return this.api.put(`put/${id}`, fichaPersonal).then((res) => res.data)
            .catch(error => {
                throw error
            })
    }

    deleteFichaPersonal(id: number) {
        return this.api.delete(`delete/${id}`).then((res) => res.data);
    }
}