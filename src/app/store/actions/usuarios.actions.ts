
import {Usuario} from '../../models/usuario.model';
import { Action } from '@ngrx/store';

export const CARGAR_USUARIOS = '[Usuarios] Cargar usuarios';
export const CARGAR_USUARIOS_FAIL = '[Usuarios] Cargar usuarios FAILS';
export const CARGAR_USUARIOS_SUCCESS = '[Usuarios] Cargar usuarios SUCCESS';

export class CargarUsuarios implements Action {
  readonly type = CARGAR_USUARIOS;
}

export class CargarUsuariosFail implements Action {
  readonly type = CARGAR_USUARIOS_FAIL;

  constructor( public payload: any) {}
}

export class CargarUsuariosSucces implements Action {
  readonly type = CARGAR_USUARIOS_SUCCESS;

  constructor( public usuarios: Usuario[] ) {}
}


export type usuariosAcciones = CargarUsuarios |
                               CargarUsuariosFail |
                               CargarUsuariosSucces;
