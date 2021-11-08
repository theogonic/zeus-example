import { Inject, Logger } from "@nestjs/common";
import { Args, Context, Mutation, Parent, Query, ResolveField, Resolver, ResolveReference } from "@nestjs/graphql";
import { ExampleService, EXAMPLE_SERVICE } from "./types";
@Resolver()
export class ExampleServiceResolver {
    constructor(
    @Inject(EXAMPLE_SERVICE)
    private readonly exampleService: ExampleService) { }
    @Mutation()
    async createExample(
    @Args("request")
    request) {
        return this.exampleService.createExample({
            ...request
        });
    }
}
