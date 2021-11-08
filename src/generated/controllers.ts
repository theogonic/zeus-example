import { ApiTags, ApiPropertyOptional, ApiProperty, ApiOkResponse } from "@nestjs/swagger";
import { Inject, Controller, Get, Post, Delete, Put, Param, Query, Body, ParseIntPipe, ParseBoolPipe } from "@nestjs/common";
import { ExampleService, EXAMPLE_SERVICE, CreateExampleRequest } from "./types";
export class ExampleDto {
    @ApiPropertyOptional()
    strProp: string;
    @ApiPropertyOptional()
    numProp: number;
}
export class CreateExampleRequestDto {
    @ApiPropertyOptional()
    strProp: string;
    @ApiPropertyOptional()
    numProp: number;
}
export class CreateExampleResponseDto {
    @ApiPropertyOptional()
    example: ExampleDto;
}
export class CreateExampleRequestBodyDto {
    @ApiPropertyOptional()
    strProp: string;
    @ApiPropertyOptional()
    numProp: number;
}
@Controller("/")
export class ExampleServiceController {
    constructor(
    @Inject(EXAMPLE_SERVICE)
    private readonly exampleService: ExampleService) { }
    @Post("examples")
    @ApiOkResponse({ type: CreateExampleResponseDto })
    createExample(
    @Body()
    body: CreateExampleRequestBodyDto) {
        const ucReq = {
            strProp: body.strProp,
            numProp: body.numProp
        } as CreateExampleRequest;
        return this.exampleService.createExample(ucReq);
    }
}
