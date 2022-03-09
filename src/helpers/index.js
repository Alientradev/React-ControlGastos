// Generar un nuevo ID
export const generateID = () => {
    const random = Math.random().toString(36).substring(2)
    const date = Date.now().toString(36)
    return random + date
} 

//Formatear la fecha

export const dateFormat = (date) => {
    const newDate = new Date(date);
    const option = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    };
    return newDate.toLocaleDateString('es-ES', option);
}

