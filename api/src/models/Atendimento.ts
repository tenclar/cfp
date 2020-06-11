import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import Decreto from './Decreto';

@Entity('atendimentos')
class Atendimento {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  decreto_id: string;

  @ManyToOne(() => Decreto)
  @JoinColumn({ name: 'decreto_id' })
  decreto: Decreto;

  @Column()
  tipo: 'entrada' | 'saida';

  @Column()
  valor: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Atendimento;
