import {Controller} from '@nestjs/common';
import {HeroById} from "./interface/HeroById";
import {Hero} from "./interface/Hero";
import {GrpcMethod} from "@nestjs/microservices";

@Controller()
export class HeroController {

    @GrpcMethod('HeroService')
    findOne(data: HeroById): Hero {
        const items: Hero[] = [{id: 1, name: 'Damon'}, {id: 2, name: 'Ran'}];
        return items.find(h => h.id === data.id);
    }
}
