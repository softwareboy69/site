// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Article, Notification, VideoCall, Reviews, Appointment, ConsultationFeeModel, ChatRoom, Message, ChatParticipant, PatientModel, DayTimeModel, DoctorModel } = initSchema(schema);

export {
  Article,
  Notification,
  VideoCall,
  Reviews,
  Appointment,
  ConsultationFeeModel,
  ChatRoom,
  Message,
  ChatParticipant,
  PatientModel,
  DayTimeModel,
  DoctorModel
};