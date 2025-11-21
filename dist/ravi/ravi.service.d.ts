import { CreateRaviDto } from './dto/create-ravi.dto';
import { UpdateRaviDto } from './dto/update-ravi.dto';
export declare class RaviService {
    create(createRaviDto: CreateRaviDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateRaviDto: UpdateRaviDto): string;
    remove(id: number): string;
}
