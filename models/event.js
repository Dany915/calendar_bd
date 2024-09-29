const {Schema, model} = require('mongoose');

// Definir el esquema de User
const eventSchema = Schema({
  fecha: {
    type: Date,
    default: Date.now, // Establece la fecha actual por defecto
    required: [true, 'Campo obligatorio'],
  },
  nombre: {
    type: String,
    required: [true, 'Campo obligatorio'], // Campo obligatorio
    //trim: true,     // Elimina espacios en blanco
    minlength: 3,   // Longitud mínima
  },
  descripcion: {
    type: String,
    //trim: true,     // Elimina espacios en blanco
    maxlength: 500, // Longitud máxima opcional
  },
  url: {
    type: String,
    required: [true, 'Campo obligatorio'], // Campo obligatorio
    //trim: true,     // Elimina espacios en blanco
    default: 'assets/event_day.png', 
  },
  icon: {
    type: String,
    required: [true, 'Campo obligatorio'], // Campo obligatorio
    //trim: true,     // Elimina espacios en blanco
    default: 'assets/icons/default.svg', 
  },
  tipo: {
    type: String,    
    required: true,
  }
});

// Crear el modelo basado en el esquema
const Event = model('Events', eventSchema);

module.exports = Event;
