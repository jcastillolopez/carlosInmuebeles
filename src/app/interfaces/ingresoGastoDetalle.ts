export interface ingresogastodetalleinterface {
    inGaDetalle: number,
    conceptoDetalle: string,
    pv: number,
    descuento: number, 
    ivaPorcentaje: number,
    cantidad: number,
    importe: number,
    importeIngreso: number,
    importeGasto: number,
    valorTotal: number,

    inGaId: number,
    numeroFactura: string,

    createTime: Date,
    updateTime: Date,
    borrado: boolean,
    usuarioId: number,
    administradorId: number
}