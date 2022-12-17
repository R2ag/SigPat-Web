export interface Ambiente {
  _id: number;
  name: string;
  filiacao: Ambiente;
  endereco: string;
  cidade: string;
  estado: string;
}
