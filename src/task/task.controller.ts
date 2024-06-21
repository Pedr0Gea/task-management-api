import { Body, Controller, Param, Post, Get, Put, Delete, Query, UseGuards } from '@nestjs/common';
import { FindAllParameters, TaskDto } from './task.dto';
import { TaskService } from './task.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';


@ApiTags('Tasks')
@Controller('task') 
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  create(@Body() task: TaskDto) {
    this.taskService.create(task)
  }

  @Get('/:id')
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  findById(@Param('id') id: string): TaskDto{
    return this.taskService.findById(id)
  }

  @Get()
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  findAll(@Query() params: FindAllParameters): TaskDto[]{
    return this.taskService.findAll(params)
  }

  @Put()
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  updateById(@Body() task: TaskDto){
    this.taskService.updateById(task)
  } 

  @Delete('/:id') 
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  remove(@Param('id') id: string){
    this.taskService.remove(id)
  }
}
