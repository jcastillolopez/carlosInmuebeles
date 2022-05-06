export interface inmuebleInterface {
    idInmueble: number,
    alias: string,
    refCatastral: string,
    localidad: string,
    direccion: string,
    cp: string,
    usuario_id?: number,
    borrado: boolean,
    create_time?: Date,
    update_time?: Date,

}