import { Injectable } from '@nestjs/common';
import { CreateRaviDto } from './dto/create-ravi.dto';
import { UpdateRaviDto } from './dto/update-ravi.dto';

@Injectable()
export class RaviService {
  create(createRaviDto: CreateRaviDto) {
    return 'This action adds a new ravi';
  }

  findAll() {
    return `This action returns all ravi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ravi`;
  }

  update(id: number, updateRaviDto: UpdateRaviDto) {
    return `This action updates a #${id} ravi`;
  }

  remove(id: number) {
    return `This action removes a #${id} ravi`;
  }
}
