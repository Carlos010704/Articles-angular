import app from './app';
import { getConnection } from './database/connection';
import router from './routes/article.routes';

app.listen(app.get('port'))

app.use('/', router)

console.log('Server on http://127.0.0.1:' + app.get('port'));
getConnection();