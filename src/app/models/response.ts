export interface Response<T> {
  sucesso: boolean;
  data?: T
  msg?: string
}
