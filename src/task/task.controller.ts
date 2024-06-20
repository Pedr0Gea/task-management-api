import { Body, Controller, Param, Post, Get, Put, Delete, Query } from '@nestjs/common';
import { FindAllParameters, TaskDto } from './task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() task: TaskDto) {
    this.taskService.create(task)
  }

  @Get('/:id')
  findById(@Param('id') id: string): TaskDto{
    return this.taskService.findById(id)
  }

  @Get()
  findAll(@Query() params: FindAllParameters): TaskDto[]{
    return this.taskService.findAll(params)
  }

  @Put()
  updateById(@Body() task: TaskDto){
    this.taskService.updateById(task)
  } 

  @Delete('/:id')
  remove(@Param('id') id: string){
    this.taskService.remove(id)
  }
}