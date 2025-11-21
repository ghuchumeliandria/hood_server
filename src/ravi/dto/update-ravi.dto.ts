import { PartialType } from '@nestjs/mapped-types';
import { CreateRaviDto } from './create-ravi.dto';

export class UpdateRaviDto extends PartialType(CreateRaviDto) {}
