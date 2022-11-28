import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import UsuarioRotas from "./routes/UsuarioRotas.js";
import NoticiasRotas from "./routes/NoticiasRotas.js";
import AuthRota from "./routes/AuthRota.js";
dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
});
//subir o banco aqui
// (async()=>{
//     await db.sync();
// })();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(UsuarioRotas);
app.use(NoticiasRotas);
app.use(AuthRota);

// store.sync();

app.listen(process.env.APP_PORT, () => {
    console.log('Server up and running...');
});