export interface CreateExampleRequest {
    strProp?: string;
    numProp?: number;
}
export interface CreateExampleResponse {
    example?: Example;
}
export interface ExampleService {
    createExample(request: CreateExampleRequest): Promise<CreateExampleResponse>;
}
export const EXAMPLE_SERVICE = Symbol("EXAMPLE_SERVICE");
export interface Example {
    strProp?: string;
    numProp?: number;
}
