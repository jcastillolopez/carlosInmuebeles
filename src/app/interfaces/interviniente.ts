export interface intervinienteInterface {
    idInterviniente?: number,
    porcentajePropiedad: number,

    createTime?: Date,
    updateTime?: Date,
    borrado?: boolean,

    administradorId?: number,
    usuarioId?: number,

    clienteId?: number,
    apellidosNombreCliente?: string,
    tipoIntervinienteid?: number,
    tipoInterviniente: string,
    contratosId?: number,
}