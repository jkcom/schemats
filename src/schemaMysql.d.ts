import { TableDefinition, Database } from './schemaInterfaces';
import Options from './options';
export declare class MysqlDatabase implements Database {
    connectionString: string;
    private db;
    private defaultSchema;
    constructor(connectionString: string);
    private static mapTableDefinitionToType(tableDefinition, customTypes, options);
    private static parseMysqlEnumeration(mysqlEnum);
    private static getEnumNameFromColumn(dataType, columnName);
    query(queryString: string): Promise<Object[]>;
    getEnumTypes(schema?: string): Promise<any>;
    getTableDefinition(tableName: string, tableSchema: string): Promise<TableDefinition>;
    getTableTypes(tableName: string, tableSchema: string, options: Options): Promise<TableDefinition>;
    getSchemaTables(schemaName: string): Promise<string[]>;
    queryAsync(queryString: string, escapedValues?: Array<string>): Promise<Object[]>;
    getDefaultSchema(): string;
}
