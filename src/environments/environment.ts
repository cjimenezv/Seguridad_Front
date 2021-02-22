// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrlSeguridad: 'http://localhost:8081',
  apiUrlTramites: 'http://localhost:8091',
};


function crearURL(path){
  return (environment.apiUrlTramites + path);
}

function crearURLSeguridad(path){
  return (environment.apiUrlSeguridad + path);
}

export const listaURLMicrozonas = {
  urladicionarMicrozona: crearURL('/tramitesAdmon/crearMicrozona'),
  urlactualizarMicrozona: crearURL('/tramitesAdmon/actualizarMicrozona'),
  urllistarMicrozona: crearURL('/tramitesAdmon/getAllMicrozonas'),
  urllistarMicrozonaByPage: crearURL('/tramitesAdmon/getMicrozonasByPage'),
  urlgetMicrozona: crearURL('/tramitesAdmon/getMicrozonaById'),
  urleliminarMicrozona: crearURL('/tramitesAdmon/eliminarMicrozona'),
}

export const listaURLUsuarios = {
  urladicionarUsuario: crearURLSeguridad('/usuarios/crearUsuario'),
  urlactualizarUsuario: crearURLSeguridad('/usuarios/actualizarUsuario'),
  urllistarUsuario: crearURLSeguridad('/usuarios/getAllUsuarios'),
  urllistarUsuarioByPage: crearURLSeguridad('/usuarios/getUsuarioByPage'),
  urlgetUsuario: crearURLSeguridad('/usuarios/getUsuarioById'),
  urleliminarUsuario: crearURLSeguridad('/usuarios/eliminarUsuario'),
  urlnotificarRegistroUsuarioById: crearURLSeguridad('/usuarios/notificarRegistroUsuarioById'),
}