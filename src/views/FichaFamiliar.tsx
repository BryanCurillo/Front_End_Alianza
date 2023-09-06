import React, { useState } from 'react';
import '../styles/Fichas.css'
import { IFichaFamiliar } from '../interfaces/IFichaFamiliar';
import { ITipoFamilia } from '../interfaces/ITipoFamilia';
import { FichaFamiliarService } from '../services/FichaFamiliarService';
import swal from "sweetalert";


const FichaFamiliar: React.FC = () => {

    const fichaFamiliarService = new FichaFamiliarService();

    const [formData, setFormData] = useState<IFichaFamiliar>({
        idFichaFamiliar: 0,
        visitaDomiciliar: false,
        jefaturaFamiliar: '',
        numIntegrantes: 0,
        numAdultos: 0,
        numNNA: 0,
        numAdultosMayores: 0,
        beneficioAdicional: '',
        organizacionBeneficio: '',
        discapacidadIntegrantes: false,
        otrasSituaciones: '',
        tipoFamilia: null
    });


    const tiposFamilias: ITipoFamilia[] = [{ idTipoFamilia: 1, nombreTipo: 'Grande' }, { idTipoFamilia: 2, nombreTipo: 'Mediana' }];



    const resetForm = () => {
        setFormData({
            idFichaFamiliar: 0,
            visitaDomiciliar: false,
            jefaturaFamiliar: '',
            numIntegrantes: 0,
            numAdultos: 0,
            numNNA: 0,
            numAdultosMayores: 0,
            beneficioAdicional: '',
            organizacionBeneficio: '',
            discapacidadIntegrantes: false,
            otrasSituaciones: '',
            tipoFamilia: null
        });

      };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
       
        fichaFamiliarService
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



            <section className='container'>

                <header className="title">
                    Ficha Personal
                </header>
                {/* <div className="form"> */}

                <form onSubmit={handleSubmit} className='form'>
                    <div className='column'>
                        <div className="gender-box">
                            <label>Visita domiciliar:</label>

                            <div className='gender-option'>
                                <div className='gender'>

                                    <input
                                        className="input"
                                        type="radio"
                                        id="genSI"
                                        name="genSI"
                                        value="true"
                                        checked={formData.visitaDomiciliar === true}
                                        onChange={(e) => setFormData({ ...formData, visitaDomiciliar: true })}

                                    />
                                    <label htmlFor="genSI">SI</label>
                                    <span className="input-border"></span>


                                    <input
                                        className="input"
                                        type="radio"
                                        id="genNO"
                                        name="genNO"
                                        value="false"
                                        checked={formData.visitaDomiciliar === false}
                                        onChange={(e) => setFormData({ ...formData, visitaDomiciliar: false })}

                                    />
                                    <label htmlFor="genNO">NO</label>
                                    <span className="input-border"></span>

                                </div>
                            </div>

                        </div >

                        <div className='input-box'>
                            <label htmlFor="tipoFamilia">Tipo de familia:</label>
                            <div className="select-box">

                                <select id="parroquia" value={formData.tipoFamilia?.idTipoFamilia} onChange={(e) => setFormData({
                                    ...formData, tipoFamilia: {
                                        idTipoFamilia: parseInt(e.target.value), nombreTipo: ''
                                    }
                                })}//(Parroquia:)}
                                    required>
                                    <option value={0} selected>Seleccione una opción</option>
                                    {tiposFamilias.map((familia, index) => (
                                        <option key={index} value={familia.idTipoFamilia}>{familia.nombreTipo} </option>
                                    ))}

                                </select>
                            </div>

                        </div>
                    </div>

                    <div className='column'>

                        <div className='input-box'>

                            <label htmlFor="jefaturaFamiliar">Jefatura familiar:</label>
                            <input
                                className="input"

                                type="text"
                                id="jefaturaFamiliar"
                                value={formData.jefaturaFamiliar}
                                placeholder='Ingrese el nombre del jefe de la familia'
                                onChange={(e) => setFormData({ ...formData, jefaturaFamiliar: e.target.value })}
                                required
                            />
                            <span className="input-border"></span>

                        </div>

                        <div className='input-box'>
                            <label htmlFor="numIntegrantes">Numero de integrantes:</label>
                            <input
                                className="input"
                                type="number"
                                id="numIntegrantes"
                                value={formData.numIntegrantes}
                                placeholder='Numero de integrantes en el hogar'
                                onChange={(e) => setFormData({ ...formData, numIntegrantes: parseInt(e.target.value) })}
                                required
                            />
                            <span className="input-border"></span>

                        </div>

                    </div>



                    <div className="column">

                        <div className='input-box'>
                            <label htmlFor="numAdultos">Numero de adultos:</label>
                            <input
                                className="input"
                                type="number"
                                id="numAdultos"
                                value={formData.numAdultos}
                                placeholder='Numero de adultos en el hogar'
                                onChange={(e) => setFormData({ ...formData, numAdultos: parseInt(e.target.value) })}
                                required
                            />
                            <span className="input-border"></span>

                        </div>

                        <div className='input-box'>
                            <label htmlFor="numNNA">Numero de NNA:</label>
                            <input
                                className="input"
                                type="number"
                                id="numNNA"
                                value={formData.numNNA}
                                placeholder='Numero de niños, niñas y adolecentes en el hogar'
                                onChange={(e) => setFormData({ ...formData, numNNA: parseInt(e.target.value) })}
                                required
                            />
                            <span className="input-border"></span>

                        </div>
                    </div>
                    <div className="column">

                        <div className='input-box'>
                            <label htmlFor="numAdultosMayores">Numero adultos mayores:</label>
                            <input
                                className="input"
                                type="number"
                                id="numAdultosMayores"
                                value={formData.numAdultosMayores}
                                placeholder='Numero de adultos mayores en el hogar'
                                onChange={(e) => setFormData({ ...formData, numAdultosMayores: parseInt(e.target.value) })}
                                required
                            />
                            <span className="input-border"></span>

                        </div>

                        <div className='input-box'>
                            <label htmlFor="beneficioAdicional">Beneficio adicional:</label>
                            <input
                                className="input"
                                type="text"
                                id="beneficioAdicional"
                                value={formData.beneficioAdicional}
                                placeholder='En caso de contar con ayuda adicional'
                                onChange={(e) => setFormData({ ...formData, beneficioAdicional: e.target.value })}
                                required
                            />
                            <span className="input-border"></span>

                        </div>





                    </div>

                    <div className='input-box'>
                        <label htmlFor="organizacionBeneficio">Organizacion benefica:</label>
                        <input
                            className="input"
                            type="text"
                            id="organizacionBeneficio"
                            value={formData.organizacionBeneficio}
                            placeholder='Nombre de la organizacion que brinda el beneficio'
                            onChange={(e) => setFormData({ ...formData, organizacionBeneficio: e.target.value })}
                            required
                        />
                        <span className="input-border"></span>

                    </div>


                    <div className="gender-box">
                        <label>¿En su hogar, viven personas con alguna discapacidad?:</label>

                        <div className='gender-option'>
                            <div className='gender'>

                                <input
                                    className="input"
                                    type="radio"
                                    id="genSiDis"
                                    name="genSiDis"
                                    value="true"
                                    checked={formData.discapacidadIntegrantes === true}
                                    onChange={(e) => setFormData({ ...formData, discapacidadIntegrantes: true })}

                                />
                                <label htmlFor="genSiDis">SI</label>
                                <span className="input-border"></span>


                                <input
                                    className="input"
                                    type="radio"
                                    id="genNoDis"
                                    name="genNoDis"
                                    value="false"
                                    checked={formData.discapacidadIntegrantes === false}
                                    onChange={(e) => setFormData({ ...formData, discapacidadIntegrantes: false })}

                                />
                                <label htmlFor="genNoDis">NO</label>
                                <span className="input-border"></span>

                            </div>
                        </div>

                    </div >




                    <div className="column">



                        <div className='input-box' >
                            <label htmlFor="barrio">Otras situaciones familiares:</label>
                            <input
                                className="input"
                                type="text"
                                id="otrasSituaciones"
                                value={formData.otrasSituaciones}
                                placeholder='Otras situaciones familiares relacionadas'
                                onChange={(e) => setFormData({ ...formData, otrasSituaciones: e.target.value })}
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
            </section >

        </>
    );
};

export default FichaFamiliar;
