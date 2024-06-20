import { Body, Controller, Param, Post, Get, Put, Delete, Query, UseGuards } from '@nestjs/common';
import { FindAllParameters, TaskDto } from './task.dto';
import { TaskService } from './task.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';


@ApiTags('Tasks')
@UseGuards(AuthGuard)
@Controller('task') 
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @ApiBearerAuth()
  create(@Body() task: TaskDto) {
    this.taskService.create(task)
  }

  @Get('/:id')
  @ApiBearerAuth()
  findById(@Param('id') id: string): TaskDto{
    return this.taskService.findById(id)
  }

  @Get()
  @ApiBearerAuth()
  findAll(@Query() params: FindAllParameters): TaskDto[]{
    return this.taskService.findAll(params)
  }

  @Put()
  @ApiBearerAuth()
  updateById(@Body() task: TaskDto){
    this.taskService.updateById(task)
  } 

  @Delete('/:id') 
  @ApiBearerAuth()
  remove(@Param('id') id: string){
    this.taskService.remove(id)
  }
}
