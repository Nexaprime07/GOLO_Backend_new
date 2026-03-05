import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EducationDocument = Education & Document;

@Schema({ _id: false, timestamps: false })
export class Education {
  @Prop({ enum: ['School', 'College', 'Coaching', 'Tutorial', 'Online Course'] })
  institutionType?: string;

  @Prop()
  institutionName?: string;

  @Prop()
  courseName?: string;

  @Prop()
  duration?: string;

  @Prop()
  fees?: number;

  @Prop()
  eligibility?: string;

  @Prop()
  admissionStartDate?: Date;

  @Prop()
  admissionEndDate?: Date;

  @Prop({ type: [String] })
  facilities?: string[];

  @Prop()
  website?: string;

  @Prop()
  contactPerson?: string;

  @Prop()
  contactNumber?: string;

  @Prop()
  email?: string;

  @Prop()
  affiliatedTo?: string;

  @Prop()
  accreditation?: string;

  @Prop()
  establishedYear?: number;

  @Prop()
  studentCapacity?: number;

  @Prop()
  mode?: string;

  @Prop()
  demo?: string;

  @Prop()
  experience?: string;

  @Prop()
  qualification?: string;
}

export const EducationSchema = SchemaFactory.createForClass(Education);