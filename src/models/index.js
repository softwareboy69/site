// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Transaction, Wallet, VideoCall, Article, Notification, Reviews, Appointment, ChatRoom, Message, ChatParticipant, PatientModel, DayTimeModel, ConsultationFeeModel, DoctorModel } = initSchema(schema);

export {
  Transaction,
  Wallet,
  VideoCall,
  Article,
  Notification,
  Reviews,
  Appointment,
  ChatRoom,
  Message,
  ChatParticipant,
  PatientModel,
  DayTimeModel,
  ConsultationFeeModel,
  DoctorModel
};