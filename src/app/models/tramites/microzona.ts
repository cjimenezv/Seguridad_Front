import { Parametro } from '../comun/parametro';
import { Regional } from '../comun/regional';

export class Microzona {
    public idMicrozona: number = 0;
	public diasEstadoMicrozona: number = 0;
	public diasEstadoProrroga: number = 0;
	public fechaActoMicrozona: Date;
	public fechaAprobacionCatastral: Date;
	public fechaAprobacionRegional: Date;
	public fechaAprobacionTi: Date;
	public fechaRegistro: Date;
	public fechaRegistroEstado: Date;
	public idMotivoEstadoMicrozona: Parametro;
	public idZona: Parametro;
	public motivoEstado: string;
	public nombreMicrozona: string;
	public numeroActoMicrozona: string;
	public txMicrozona: string;
	public usuarioAprobacionCatastral: string;
	public usuarioAprobacionRegional: string;
	public usuarioAprobacionTi: string;
	public usuarioRegistro: string;
	public resolucionCargada: boolean;
	public idAprobacionCatastral: Parametro;
	public idAprobacionRegional: Parametro;
	public idAprobacionTi: Parametro;
	public idEstadoMicrozona: Parametro;
	public idDireccionRegional: Regional;
	public idOficinaRegional: Regional;
	public usuarioSolicitaRevision: string;
	public usuarioAutorizaNuevaResolucion: string;
}
