import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('decretos')
class Decreto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  decreto: string;

  @Column()
  area: number;

  @Column()
  pessoasmetro: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Decreto;
