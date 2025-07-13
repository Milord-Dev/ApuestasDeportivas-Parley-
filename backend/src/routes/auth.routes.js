async function authRoutes(fastify, options) {

    /**
     * Endpoint para el Registro de Usuarios (Simulado)
     * Ruta: POST /api/v1/auth/register
     */
    fastify.post('/register', async (request, reply) => {
        // Obtenemos los datos que el frontend enviaría en el body de la petición
        const { username, email, password } = request.body;
        
        // Imprimimos en la consola del backend para saber que la petición llegó
        console.log(`Intento de registro para el email: ${email}`);
        
        
        // solo simulamos que todo salió bien.
        
        // Enviamos una respuesta de éxito al frontend
        return reply.status(201).send({ 
            message: 'Usuario registrado exitosamente (simulación)',
            // Devolvemos el email para que el frontend pueda confirmar
            user: {
                email: email
            }
        });
    });

    /**
     * Endpoint para el Login de Usuarios (Simulado)
     * Ruta: POST /api/v1/auth/login
     */
    fastify.post('/login', async (request, reply) => {
        const { email, password } = request.body;

        console.log(`Intento de login para el email: ${email}`);

        // Asumimos que las credenciales son correctas

        // Enviamos una respuesta de éxito. 
        // podemos enviar unaconfirmación.
        return reply.send({
            message: 'Login exitoso (simulación)',
            // Podríamos enviar algunos datos del usuario para que el frontend los use
            userData: {
                email: email,
                role: 'user' // Podríamos simular un rol
            }
        });
    });

}

// Exportamos la función para que app.js pueda registrarla
export default authRoutes;