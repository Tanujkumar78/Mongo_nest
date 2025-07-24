import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserDto {
@ApiProperty({ example: 'john_doe', description: 'Unique name' })
@IsString() 
@IsNotEmpty() 
name: string;
  
@ApiProperty({ example: 66, description: 'Unique age' })
@IsNumber()
age: number;

@ApiProperty({ example: 'tan@gmail.com', description: 'Unique mail' })
@IsString()
@IsEmail()
  email: string;
}
