import 'dotenv/config';
import server from './app';

server.listen(process.env.PORT || 3000, () => console.log(`Server Up ${process.env.PORT || 3000}`));