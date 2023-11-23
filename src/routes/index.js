import authRoutes from './auth.js'
import userRoutes from './user.js'

export default (app) => {
    app.use('/auth', authRoutes);
    app.use('/user', userRoutes);
}
