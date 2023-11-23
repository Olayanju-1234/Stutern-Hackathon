import authRoutes from './auth.js'

export default (app) => {
    app.use('/auth', authRoutes);
}
