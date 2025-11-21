import { RaviService } from './ravi.service';
import { CreateRaviDto } from './dto/create-ravi.dto';
import { UpdateRaviDto } from './dto/update-ravi.dto';
export declare class RaviController {
    private readonly raviService;
    constructor(raviService: RaviService);
    create(createRaviDto: CreateRaviDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateRaviDto: UpdateRaviDto): string;
    remove(id: string): string;
}
