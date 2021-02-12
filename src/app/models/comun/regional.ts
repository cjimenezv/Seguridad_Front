import { Institucion } from "./institucion";
import { Parametro } from "./parametro";

export class Regional {
    public idRegional: number = 0;;
	public  ciudadSedeExterior: string;
	public  codRegional: string;
	public  codRegionalPadre: string;
	public  correoElectronico: string;
	public  direccionOficina: string;
	public  fechaRegistro: Date;
	public  nombreDirector: string;
	public  nombreRegional: string;
	public  numeroTelefono: string;
	public  observacionesRegional: string;
	public  regionalActiva: boolean;
	public  usuarioRegistro: string;
    public  paisSede: Parametro;
    public  departamentoSede: Parametro;
    public  municipioSede: Parametro;
	public  institucion: Institucion;
}
