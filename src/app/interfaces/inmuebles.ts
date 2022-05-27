export interface inmuebleInterface {
    alias: string,
    refCatastral: string,
    localidad: string,
    direccion: string,
    codigoPostal: number,
    planta: number,
    nhabitaciones: number,
    mcuadrados: number,
    nbanos: number,

    idInmueble: number,
    idTipoInmueble: number,
    tipoInmueble: string,

    usuario_id?: number,
    idAdministrador: number,
    borrado: boolean,
    create_time?: Date,
    update_time?: Date,
}