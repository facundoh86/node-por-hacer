
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias:'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
            .command('crear', 'Crear tarea por hacer', {
                descripcion
            })
            .command('actualizar', 'Actualizar el estado completado de una tarea', {
                descripcion,
                completado
                },
                )
            .command('borrar', 'Borrar  una tarea', {
                descripcion
            })
            .help()
            .argv;

module.exports = {
    argv
}



