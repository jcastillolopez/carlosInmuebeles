export interface contratoInterface {
    idContrato?: number,   
    alias: string,
    valorContrato: number,
    fechaContrato: Date,
    tiposContratosId: number,
    createTime?: Date,
    updateTime?:Date,
    usuarioId?: number,
    borrado?: boolean,
    tipoContrato: string,
    fechaInicio?: Date,
    fechaFin?: Date,
    tipoPeriodo?: string,
    tipoPeriodoId?:number
    cantidadPeriodo?: number
}