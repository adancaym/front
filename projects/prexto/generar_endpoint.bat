Echo "Generando Archivos" && ^
ng g cl src/api/endpoints/%1/model/model --type=%1.api && ^
Echo "Modelo generado" && ^
ng g cl src/api/endpoints/%1/entity/entity --type=%1.api && ^
Echo "Entidad generada" && ^
ng g cl src/api/endpoints/%1/controller/controller --type=%1.api && ^
Echo "Controlador generado" && ^
ng g c src/lib/cruds-api/%1/ --module=cruds-api.module && ^
Echo "Componenten generado" && ^
Echo export * from './entity/entity.%1.api';> src/api/endpoints/%1/index.ts && ^
Echo export * from './model/model.%1.api';>> src/api/endpoints/%1/index.ts && ^
Echo export * from './controller/controller.%1.api';>> src/api/endpoints/%1/index.ts && ^
Echo "Exportador generado generado"
Echo export * from './%1'; >> src/api/endpoints/index.ts && ^
