import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column('int')
  quantity: number;

  increaseQuantity(add: number) {
    this.quantity += add;
  }
}
