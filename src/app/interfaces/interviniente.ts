export interface intervinienteInterface {
    idInterviniente?: number,
    porcentajePropiedad: number,

    createTime?: Date,
    updateTime?: Date,
    borrado?: boolean,

    administradorId?: number,
    usuarioId?: number,

    clienteId?: number,
    nombreCliente?: string,
    apellidosCliente?: string,
    tipoIntervinienteid?: number,
    tipoInterviniente: string,
    contratoId?: number,
}