import { Module } from '@nestjs/common';

import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './shared/database/prisma.module';
import { MembersModule } from './modules/members/members.module';
import { AuthGuard } from './shared/guards/auth.guard';
import { UploadModule } from './modules/upload/upload.module';

@Module({
  imports: [AuthModule, DatabaseModule, MembersModule, UploadModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
