"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Cupcake currency API')
        .setDescription('The Cupcake currency API for test task')
        .setVersion('1.0')
        .addServer('/api/v1')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('/', app, document);
    app.setGlobalPrefix('api/v1');
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map