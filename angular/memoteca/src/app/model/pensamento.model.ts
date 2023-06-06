export type TipoModelo = "modelo1" | "modelo2" | "modelo3";

export interface Pensamento {
    id?: number;
    conteudo: string;
    autoria: string;
    modelo: TipoModelo;
}
