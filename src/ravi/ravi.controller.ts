import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RaviService } from './ravi.service';
import { CreateRaviDto } from './dto/create-ravi.dto';
import { UpdateRaviDto } from './dto/update-ravi.dto';

@Controller('ravi')
export class RaviController {
  constructor(private readonly raviService: RaviService) {}

  @Post()
  create(@Body() createRaviDto: CreateRaviDto) {
    return this.raviService.create(createRaviDto);
  }

  @Get()
  findAll() {
    return this.raviService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.raviService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRaviDto: UpdateRaviDto) {
    return this.raviService.update(+id, updateRaviDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.raviService.remove(+id);
  }
}
