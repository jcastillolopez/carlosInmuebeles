export interface ingresogastointerface {
    idInGa: number,
    concepto: string,
    fechaFactura: Date,
    numeroFactura: string,
    totalBaseImponible: number,
    totalImpuestoIva: number,
    totalGasto: number,
    totalIngreso: number,
    totalImporte: number,
    cuentaCorrienteProveedor: string,
    cuentaCorrienteCliente: string,
    conceptoPersonal: string,
    formaPago: string,
    fechaPago: Date,

    tipoConceptoId: number,
    tipoConcepto: string,

    tipoCategoriaId: number,
    tipoCategoria: string,

    tipoPagoId: number,
    tipoPago: string,

    clienteId: number,
    nombreApellidosCliente: string,
    nieCliente: string,

    inmuebleId: number,
    aliasInmueble: string,

    createTime: Date,
    updateTime: Date,
    borrado: boolean,
    usuarioId: number,
    administradorId: number
}