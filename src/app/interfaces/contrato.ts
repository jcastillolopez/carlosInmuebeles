export interface contratoInterface {
    idContratos?: number,
    valorContrato: number,
    fechaContrato: Date,
    fechaInicio?: Date,
    fechaFin?: Date,
    cantidadPeriodo?: number,

    createTime?: Date,
    updateTime?: Date,
    administradorId?: number,
    usuarioId?: number,
    borrado?: boolean,

    tipoPeriodoId?: number,
    tipoPeriodo?: string,
    tipoContratoId?: number,
    tipoContrato?: string,
    inmuebleId?: number,
    aliasInmueble?: string,
}