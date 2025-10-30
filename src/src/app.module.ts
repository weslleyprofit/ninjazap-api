import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Para gerenciar variáveis de ambiente
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL, // Pega a URL do banco do ambiente
      autoLoadEntities: true,
      synchronize: true, // Em produção, mudar para false e usar migrations
    }),
    // Adicionaremos os módulos dos recursos aqui depois
  ],
})
export class AppModule {}
