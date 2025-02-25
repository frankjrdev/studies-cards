import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { Asignature } from '../asignatures.entity';

@Injectable()
export class AsignaturesService {
  constructor(
    @InjectRepository(Asignature)
    private readonly asignatureRepository: Repository<Asignature>,
  ) {}

  async createAsignature(
    name: string,
    description: string,
    isPublic: boolean,
    owner: User,
  ) {
    const asignature = this.asignatureRepository.create({
      name,
      description,
      isPublic,
      owner,
    });
    return this.asignatureRepository.save(asignature);
  }

  async getAsignaturesByUser(userId: number) {
    return this.asignatureRepository.find({
      where: { owner: { id: userId } },
      relations: ['owner', 'cards'],
    });
  }

  async getAsignatureById(asignatureId: number) {
    return this.asignatureRepository.findOne({
      where: { id: asignatureId },
      relations: ['owner', 'cards'],
    });
  }
}
