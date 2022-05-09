export interface inmuebleInterface {
    idInmueble: number,
    idTipoInmueble: number,
    tipoInmueble: string,
    alias: string,
    refCatastral: string,
    localidad: string,
    direccion: string,
    codigoPostal: number,
    usuario_id?: number,
    borrado: boolean,
    idAdministrador: number,
    create_time?: Date,
    update_time?: Date,
    planta: number,
    nhabitaciones: number,
    mcuadrados: number,
    nbanos:number,

}