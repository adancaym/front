Echo "Generando Archivos" && ^
Echo > src/api/endpoints/%1/model/model.%1.api.ts && ^
Echo > src/api/endpoints/%1/model/model.%1.api.spec.ts && ^
Echo "Modelo generado" && ^
Echo > src/api/endpoints/%1/entity/entity.%1.api && ^
Echo "Entidad generada" && ^
Echo > src/api/endpoints/%1/controller/controller.%1.api && ^
Echo "Controlador generado" && ^
ng g c src/lib/cruds-api/%1/ --module=cruds-api.module && ^

Echo export * from './entity/entity.%1.api';> src/api/endpoints/%1/index.ts && ^
Echo export * from './model/model.%1.api';>> src/api/endpoints/%1/index.ts && ^
Echo export * from './controller/controller.%1.api';>> src/api/endpoints/%1/index.ts && ^
Echo "Exportador generado generado"
Echo export * from './%1'; >> src/api/endpoints/index.ts
