import { App } from './app';

async function Main() {
    const app = new App(process.env.PORT || process.env.SERVER_PORT || "5000");
    await app.listen();
}

Main();