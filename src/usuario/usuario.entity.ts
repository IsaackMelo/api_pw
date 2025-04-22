import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'; 
 
@Entity('evento')// nome da tabela no banco de dados 
export class Usuario { 
    
  @PrimaryGeneratedColumn()   
  id: number; 

  @Column()   
  nome_do_evento: string; 

  @Column() 
  data_do_evento: string; 

  @Column() 
  Endereço: string; 

  @Column() 
  Convidados: string; 
} 
