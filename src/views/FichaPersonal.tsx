// src/components/RegistroForm.tsx
import React, { useState } from 'react';
import '../styles/Fichas.css'

import { IRangoEdad } from '../interfaces/IRangoEdad';
import { IFichaPersonal } from '../interfaces/IFichaPersonal';
import { FichaPersonalService } from '../services/FichaPersonalService';
import { IEtnia } from '../interfaces/IEtnia';
import { IParroquia } from '../interfaces/IParroquia';
import swal from "sweetalert";

import { Fieldset } from "primereact/fieldset";
import { Card } from "primereact/card";
import cardHeader from "../shared/CardHeader";
import { Calendar } from "primereact/calendar";


const FichaPersonal: React.FC = () => {

    const fichaPersonalService = new FichaPersonalService();

    const [formData, setFormData] = useState<IFichaPersonal>({
        // idFichaPersonal: 0,
        foto: '',
        apellidos: '',
        nombres: '',
        ciIdentidad: '',
        nacionalidad: '',
        fechaNacimiento: '',
        rangoEdad: null,
        genero: '',
        etnia: null,
        parroquia: null,
        zona: '',
        barrioSector: '',
        direccion: '',
        referencia: '',
        coordenadaX: 0,
        coordenadaY: 0
    });


    const rangosEdad: IRangoEdad[] = [{ idRangoEdad: 1, limInferior: 12, limSuperior: 20 }, { idRangoEdad: 2, limInferior: 21, limSuperior: 40 }];
    const etnias: IEtnia[] = [{ idEtnia: 1, etniaNombre: 'Mestizo' }, { idEtnia: 2, etniaNombre: 'Montuvio' }]
    const parroquias: IParroquia[] = [{ idParroquia: 1, parroquiaNombre: 'Bellavista', idCanton: { idCanton: 1, cantonNombre: 'Cuenca', idProvincia: { idProvincia: 1, provinciaNombre: 'Azuay' } } }]


    const resetForm = () => {
        setFormData({
            // idFichaPersonal: 0,
            foto: '',
            apellidos: '',
            nombres: '',
            ciIdentidad: '',
            nacionalidad: '',
            fechaNacimiento: '',
            rangoEdad: null,
            genero: '',
            etnia: null,
            parroquia: null,
            zona: '',
            barrioSector: '',
            direccion: '',
            referencia: '',
            coordenadaX: 0,
            coordenadaY: 0
        });

    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fichaPersonalService
            .save(formData)
            .then((response) => {
                resetForm();
                swal("Publicacion", "Datos Guardados Correctamente", "success");


            })
            .catch((error) => {
                console.error("Error al enviar el formulario:", error);
            });


        // Aquí puedes enviar los datos del formulario al servidor o realizar otras acciones
        console.log('Datos enviados:', { formData });
    };

    return (
        <>
            <Fieldset className="fgrid col-fixed ">

                <Card
                    header={cardHeader}
                    className="border-solid border-red-800 border-3 flex-1 flex-wrap"
                    style={{ width: "1000px", marginLeft: "90px", marginTop: "15px", height: "1125px" }}
                >

                    <div
                        className="h1-rem"
                        style={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <h1 className="text-4xl font-smibold lg:md-2   max-h-full min-w-min">
                            Ficha de Personal
                        </h1>
                    </div>
                    <div className='container'>

                        {/* <header className="title">
                        Ficha Personal
                    </header> */}
                        {/* <div className="form"> */}

                        <form onSubmit={handleSubmit} className='form' encType="multipart/form-data">
                            <div className='column'>
                                <div className='input-box'>

                                    <label className="font-medium w-auto min-w-min" htmlFor="cedula;">Cedula:</label>
                                    <input
                                        className="input"
                                        type="text"
                                        id="cedula"
                                        value={formData.ciIdentidad}
                                        onChange={(e) => setFormData({ ...formData, ciIdentidad: e.target.value })}
                                        required
                                    />
                                    <span className="input-border"></span>

                                </div>


                                <div className="inputContainer">
                                    <label className="font-medium w-auto min-w-min" htmlFor="foto;">Foto:</label>

                                    <input type="file" accept="image/*" ></input>


                                </div>
                            </div>



                            <div className='column'>

                                <div className='input-box'>

                                    <label className="font-medium w-auto min-w-min" htmlFor="nombres">Nombres:</label>
                                    <input
                                        className="input"

                                        type="text"
                                        id="nombre"
                                        value={formData.nombres}
                                        placeholder='Ingrese sus nombres'
                                        onChange={(e) => setFormData({ ...formData, nombres: e.target.value })}
                                        required
                                    />
                                    <span className="input-border"></span>

                                </div>

                                <div className='input-box'>
                                    <label className="font-medium w-auto min-w-min" htmlFor="apellidos">Apellidos:</label>
                                    <input
                                        className="input"
                                        type="text"
                                        id="nombre"
                                        value={formData.apellidos}
                                        onChange={(e) => setFormData({ ...formData, apellidos: e.target.value })}
                                        required
                                    />
                                    <span className="input-border"></span>

                                </div>

                            </div>



                            <div className="column">

                                <div className='input-box'>
                                    <label className="font-medium w-auto min-w-min" htmlFor="nacionalidad">Nacionalidad:</label>
                                    <input
                                        className="input"
                                        type="text"
                                        id="nacionalidad"
                                        value={formData.nacionalidad}
                                        onChange={(e) => setFormData({ ...formData, nacionalidad: e.target.value })}
                                        required
                                    />
                                    <span className="input-border"></span>

                                </div>

                                <div className='input-box'>
                                    <label className="font-medium w-auto min-w-min" htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>


                                    <Calendar
                                        className="text-2xl"
                                        id="fechaNacimiento"
                                        name="fechaNacimiento"
                                        placeholder="Ingrese la fecha de nacimiento"
                                        required
                                        dateFormat="yy-mm-dd" // Cambiar el formato a ISO 8601
                                        showIcon
                                        maxDate={new Date()}
                                        onChange={(e) => {
                                            const selectedDate =
                                                e.value instanceof Date ? e.value : null;
                                            const formattedDate = selectedDate
                                                ? selectedDate.toISOString().split("T")[0] // Formatear a ISO 8601
                                                : "";
                                            setFormData({
                                                ...formData,
                                                fechaNacimiento: formattedDate,
                                            });
                                        }}
                                        value={
                                            formData.fechaNacimiento
                                                ? new Date(formData.fechaNacimiento)
                                                : null
                                        }
                                    />


                                    {/* <input
                                        className="input"

                                        type="date"
                                        id="fechaNacimiento"
                                        value={formData.fechaNacimiento ? formData.fechaNacimiento.toISOString().substr(0, 10) : ''}
                                        onChange={(e) => setFormData({ ...formData, fechaNacimiento: new Date(e.target.value) })}
                                        required
                                    /> */}
                                    <span className="input-border"></span>

                                </div>
                            </div>
                            <div className="column">

                                <div className="gender-box">
                                    <label className="font-medium w-auto min-w-min" htmlFor='genero'>Genero:</label>

                                    <div className='gender-option'>
                                        <div className='gender'>

                                            <input
                                                className="input"
                                                type="radio"
                                                id="genMasculino"
                                                name="masculino"
                                                value="Masculino"
                                                checked={formData.genero === 'Masculino'}
                                                onChange={(e) => setFormData({ ...formData, genero: e.target.value })}

                                            />
                                            <label htmlFor="genMasculino">Masculino</label>
                                            <span className="input-border"></span>


                                            <input
                                                className="input"
                                                type="radio"
                                                id="genFemenino"
                                                name="femenino"
                                                value="Femenino"
                                                checked={formData.genero === 'Femenino'}
                                                onChange={(e) => setFormData({ ...formData, genero: e.target.value })}

                                            />
                                            <label htmlFor="genFemenino">Femenino</label>
                                            <span className="input-border"></span>

                                        </div>
                                    </div>

                                </div >
                                <div className='input-box'>
                                    <label className="font-medium w-auto min-w-min" htmlFor="rangoEdad">Rango de Edad:</label>
                                    <div className="select-box">

                                        <select id="rangoEdad" value={formData.rangoEdad?.idRangoEdad} onChange={(e) => setFormData({ ...formData, rangoEdad: { idRangoEdad: parseInt(e.target.value), limInferior: 18, limSuperior: 30 } })}
                                            required>
                                            <option value={0} selected>Seleccione una opción</option>
                                            {rangosEdad.map((rango, index) => (
                                                <option key={index} value={rango.idRangoEdad}>{rango.limInferior} - {rango.limSuperior}</option>
                                            ))}

                                        </select>
                                    </div>

                                </div>





                            </div>

                            <div className='input-box'>
                                <label className="font-medium w-auto min-w-min" htmlFor="etnia">Etnia:</label>
                                <div className="select-box">

                                    <select id="etnia" value={formData.etnia?.idEtnia} onChange={(e) => setFormData({ ...formData, etnia: { idEtnia: parseInt(e.target.value), etniaNombre: '' } })}
                                        required>
                                        <option value={0} selected>Seleccione una opción</option>
                                        {etnias.map((etnia, index) => (
                                            <option key={index} value={etnia.idEtnia}>{etnia.etniaNombre} </option>
                                        ))}

                                    </select>
                                </div>

                            </div>


                            <div className='input-box'>
                                <label className="font-medium w-auto min-w-min" htmlFor="direccion">Dirección:</label>
                                <input
                                    className="input"
                                    type="text"
                                    id="direccion"
                                    value={formData.direccion}
                                    onChange={(e) => setFormData({ ...formData, direccion: e.target.value })}
                                    required
                                />
                                <span className="input-border"></span>

                            </div>
                            <div className="column">

                                <div className='input-box'>
                                    <label className="font-medium w-auto min-w-min" htmlFor="parroquia">Parroquia:</label>
                                    <div className="select-box">

                                        <select id="parroquia" value={formData.parroquia?.idParroquia} onChange={(e) => setFormData({
                                            ...formData, parroquia: {
                                                idParroquia: parseInt(e.target.value), parroquiaNombre: '',
                                                idCanton: {
                                                    idCanton: 0, cantonNombre: '',
                                                    idProvincia: {
                                                        idProvincia: 0, provinciaNombre: ''
                                                    }
                                                }




                                            }
                                        })}//(Parroquia:)}
                                            required>
                                            <option value={0} selected>Seleccione una opción</option>
                                            {parroquias.map((parroquia, index) => (
                                                <option key={index} value={parroquia.idParroquia}>{parroquia.parroquiaNombre} </option>
                                            ))}

                                        </select>
                                    </div>

                                </div>


                                <div className='input-box' >
                                    <label className="font-medium w-auto min-w-min" htmlFor="barrio">Barrio/Sector:</label>
                                    <input
                                        className="input"
                                        type="text"
                                        id="barrio"
                                        value={formData.barrioSector}
                                        onChange={(e) => setFormData({ ...formData, barrioSector: e.target.value })}
                                        required
                                    />
                                    <span className="input-border"></span>

                                </div>

                            </div>

                            <div className="column">

                                <div className="gender-box">
                                    <label className="font-medium w-auto min-w-min" htmlFor='zona'>Zona:</label>

                                    <div className='gender-option'>
                                        <div className='gender'>

                                            <input
                                                type="radio"
                                                id="zonaUrbana"
                                                name="zona"
                                                value="Urbana"
                                                checked={formData.zona === 'Urbana'}
                                                onChange={(e) => setFormData({ ...formData, zona: e.target.value })}
                                                required
                                            />
                                            <label htmlFor="zonaUrbana">Urbana</label>
                                            <input
                                                type="radio"
                                                id="zonaRural"
                                                name="zona"
                                                value="Rural"
                                                checked={formData.zona === 'Rural'}
                                                onChange={(e) => setFormData({ ...formData, zona: e.target.value })}
                                                required
                                            />
                                            <label htmlFor="zonaRural">Rural</label>
                                        </div>
                                    </div>

                                </div >



                                <div className='input-box'>
                                    <label className="font-medium w-auto min-w-min" htmlFor="referencia">Referencia:</label>
                                    <input
                                        className="input"
                                        type="text"
                                        id="referencia"
                                        value={formData.referencia}
                                        onChange={(e) => setFormData({ ...formData, referencia: e.target.value })}
                                        required
                                    />
                                    <span className="input-border"></span>

                                </div>

                            </div>

                            <div className="column">

                                <div className='input-box'>
                                    <label className="font-medium w-auto min-w-min" htmlFor="coordenadaX">Coordenada en X:</label>
                                    <input
                                        className="input"
                                        type="text"
                                        id="coordenadaX"
                                        value={formData.coordenadaX}
                                        onChange={(e) => setFormData({ ...formData, coordenadaX: parseFloat(e.target.value) })}
                                        required
                                    />
                                    <span className="input-border"></span>

                                </div>

                                <div className='input-box'>
                                    <label className="font-medium w-auto min-w-min" htmlFor="coordenadaY">Coordenada en Y:</label>
                                    <input
                                        className="input"
                                        type="text"
                                        id="coordenadaY"
                                        value={formData.coordenadaY}
                                        onChange={(e) => setFormData({ ...formData, coordenadaY: parseFloat(e.target.value) })}
                                        required
                                    />
                                    <span className="input-border"></span>

                                </div>
                            </div>

                            <div className='btnSend'>
                                <button type="submit" className='btn'>Registrarse</button>
                            </div>
                        </form>
                        {/* </div> */}
                    </div >
                </Card>
            </Fieldset>
        </>
    );
};

export default FichaPersonal;
