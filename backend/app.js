import Fastify from 'fastify';
import dotenv from 'dotenv';
import cors from '@fastify/cors';
import authRoutes from './src/routes/auth.routes.js';

// función de conexión a la base de datos
//import { connectDB } from './src/config/db.js';

// --- para las rutas que usaremos (ejemplos) ---
//import authRoutes from './src/routes/auth.routes.js';
// import userRoutes from './src/routes/user.routes.js';

// variables de entorno
dotenv.config();

const app = Fastify({
  logger: true, 
});

//CORS para permitir peticiones del frontend
app.register(cors, {
  origin: '*', 
});

// --- rutas del fastify (ejemplo)---
    app.register(authRoutes, { 
        prefix: '/api/v1/auth' 
    });
// app.register(userRoutes, { prefix: '/api/v1/users' });


// Ruta de prueba para verificar que el servidor está vivo
app.get('/api/v1/health', (request, reply) => {
  reply.send({ status: 'OK', message: 'El servidor backend está funcionando' });
});


const start = async () => {
  try {
    const PORT = process.env.PORT || 3000;
    
    // no usamos bd de momento await connectDB();
    
    // iniciar el servidor para que escuche peticiones
    await app.listen({ port: PORT, host: '0.0.0.0' });
    
    // El 'host: 0.0.0.0' es importante si corres esto dentro de Docker,

  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();