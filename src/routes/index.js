import authRoutes from './auth.js'
import userRoutes from './user.js'
import medicRoutes from './medicals.js'

export default (app) => {
    app.use('/auth', authRoutes);
    app.use('/user', userRoutes);
    app.use('/medic', medicRoutes);
}
