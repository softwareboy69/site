import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

type ArticleMetaData = {
  readOnlyFields: 'updatedAt';
}

type NotificationMetaData = {
  readOnlyFields: 'updatedAt';
}

type VideoCallMetaData = {
  readOnlyFields: 'updatedAt';
}

type ReviewsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AppointmentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ConsultationFeeModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChatRoomMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MessageMetaData = {
  readOnlyFields: 'updatedAt';
}

type ChatParticipantMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PatientModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DayTimeModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DoctorModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerArticle = {
  readonly id: string;
  readonly title: string;
  readonly contentMessage: string;
  readonly image: string;
  readonly doctor?: DoctorModel | null;
  readonly createdAt: string;
  readonly categories?: (string | null)[] | null;
  readonly updatedAt?: string | null;
}

type LazyArticle = {
  readonly id: string;
  readonly title: string;
  readonly contentMessage: string;
  readonly image: string;
  readonly doctor: AsyncItem<DoctorModel | undefined>;
  readonly createdAt: string;
  readonly categories?: (string | null)[] | null;
  readonly updatedAt?: string | null;
}

export declare type Article = LazyLoading extends LazyLoadingDisabled ? EagerArticle : LazyArticle

export declare const Article: (new (init: ModelInit<Article, ArticleMetaData>) => Article) & {
  copyOf(source: Article, mutator: (draft: MutableModel<Article, ArticleMetaData>) => MutableModel<Article, ArticleMetaData> | void): Article;
}

type EagerNotification = {
  readonly id: string;
  readonly title: string;
  readonly contentMessage: string;
  readonly sourceType?: string | null;
  readonly navigationID?: string | null;
  readonly action: string;
  readonly image?: string | null;
  readonly seen?: boolean | null;
  readonly doctor?: DoctorModel | null;
  readonly patient?: PatientModel | null;
  readonly createdAt: string;
  readonly receipientDeviceToken?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNotification = {
  readonly id: string;
  readonly title: string;
  readonly contentMessage: string;
  readonly sourceType?: string | null;
  readonly navigationID?: string | null;
  readonly action: string;
  readonly image?: string | null;
  readonly seen?: boolean | null;
  readonly doctor: AsyncItem<DoctorModel | undefined>;
  readonly patient: AsyncItem<PatientModel | undefined>;
  readonly createdAt: string;
  readonly receipientDeviceToken?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Notification = LazyLoading extends LazyLoadingDisabled ? EagerNotification : LazyNotification

export declare const Notification: (new (init: ModelInit<Notification, NotificationMetaData>) => Notification) & {
  copyOf(source: Notification, mutator: (draft: MutableModel<Notification, NotificationMetaData>) => MutableModel<Notification, NotificationMetaData> | void): Notification;
}

type EagerVideoCall = {
  readonly id: string;
  readonly channelName?: string | null;
  readonly patient?: PatientModel | null;
  readonly doctor?: DoctorModel | null;
  readonly subscriberDeviceToken: string;
  readonly createdAt: string;
  readonly picked?: boolean | null;
  readonly expiryTime?: number | null;
  readonly updatedAt?: string | null;
}

type LazyVideoCall = {
  readonly id: string;
  readonly channelName?: string | null;
  readonly patient: AsyncItem<PatientModel | undefined>;
  readonly doctor: AsyncItem<DoctorModel | undefined>;
  readonly subscriberDeviceToken: string;
  readonly createdAt: string;
  readonly picked?: boolean | null;
  readonly expiryTime?: number | null;
  readonly updatedAt?: string | null;
}

export declare type VideoCall = LazyLoading extends LazyLoadingDisabled ? EagerVideoCall : LazyVideoCall

export declare const VideoCall: (new (init: ModelInit<VideoCall, VideoCallMetaData>) => VideoCall) & {
  copyOf(source: VideoCall, mutator: (draft: MutableModel<VideoCall, VideoCallMetaData>) => MutableModel<VideoCall, VideoCallMetaData> | void): VideoCall;
}

type EagerReviews = {
  readonly id: string;
  readonly reviewtext?: string | null;
  readonly ratings?: number | null;
  readonly doctormodelID: string;
  readonly patient?: PatientModel | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReviews = {
  readonly id: string;
  readonly reviewtext?: string | null;
  readonly ratings?: number | null;
  readonly doctormodelID: string;
  readonly patient: AsyncItem<PatientModel | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Reviews = LazyLoading extends LazyLoadingDisabled ? EagerReviews : LazyReviews

export declare const Reviews: (new (init: ModelInit<Reviews, ReviewsMetaData>) => Reviews) & {
  copyOf(source: Reviews, mutator: (draft: MutableModel<Reviews, ReviewsMetaData>) => MutableModel<Reviews, ReviewsMetaData> | void): Reviews;
}

type EagerAppointment = {
  readonly id: string;
  readonly consultationtype?: string | null;
  readonly starthour?: string | null;
  readonly endhour?: string | null;
  readonly day?: string | null;
  readonly month?: string | null;
  readonly date?: string | null;
  readonly timeframe?: string | null;
  readonly shortnote?: string | null;
  readonly category?: string | null;
  readonly status?: string | null;
  readonly countdown?: string | null;
  readonly patient?: PatientModel | null;
  readonly doctor?: DoctorModel | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAppointment = {
  readonly id: string;
  readonly consultationtype?: string | null;
  readonly starthour?: string | null;
  readonly endhour?: string | null;
  readonly day?: string | null;
  readonly month?: string | null;
  readonly date?: string | null;
  readonly timeframe?: string | null;
  readonly shortnote?: string | null;
  readonly category?: string | null;
  readonly status?: string | null;
  readonly countdown?: string | null;
  readonly patient: AsyncItem<PatientModel | undefined>;
  readonly doctor: AsyncItem<DoctorModel | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Appointment = LazyLoading extends LazyLoadingDisabled ? EagerAppointment : LazyAppointment

export declare const Appointment: (new (init: ModelInit<Appointment, AppointmentMetaData>) => Appointment) & {
  copyOf(source: Appointment, mutator: (draft: MutableModel<Appointment, AppointmentMetaData>) => MutableModel<Appointment, AppointmentMetaData> | void): Appointment;
}

type EagerConsultationFeeModel = {
  readonly id: string;
  readonly rateperminute?: number | null;
  readonly timeframe?: string | null;
  readonly consultationtype?: string | null;
  readonly doctormodelID: string;
  readonly rate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyConsultationFeeModel = {
  readonly id: string;
  readonly rateperminute?: number | null;
  readonly timeframe?: string | null;
  readonly consultationtype?: string | null;
  readonly doctormodelID: string;
  readonly rate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ConsultationFeeModel = LazyLoading extends LazyLoadingDisabled ? EagerConsultationFeeModel : LazyConsultationFeeModel

export declare const ConsultationFeeModel: (new (init: ModelInit<ConsultationFeeModel, ConsultationFeeModelMetaData>) => ConsultationFeeModel) & {
  copyOf(source: ConsultationFeeModel, mutator: (draft: MutableModel<ConsultationFeeModel, ConsultationFeeModelMetaData>) => MutableModel<ConsultationFeeModel, ConsultationFeeModelMetaData> | void): ConsultationFeeModel;
}

type EagerChatRoom = {
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly participants?: (ChatParticipant | null)[] | null;
  readonly messages?: (Message | null)[] | null;
  readonly lastMessage?: Message | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatRoomLastMessageId?: string | null;
}

type LazyChatRoom = {
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly participants: AsyncCollection<ChatParticipant>;
  readonly messages: AsyncCollection<Message>;
  readonly lastMessage: AsyncItem<Message | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatRoomLastMessageId?: string | null;
}

export declare type ChatRoom = LazyLoading extends LazyLoadingDisabled ? EagerChatRoom : LazyChatRoom

export declare const ChatRoom: (new (init: ModelInit<ChatRoom, ChatRoomMetaData>) => ChatRoom) & {
  copyOf(source: ChatRoom, mutator: (draft: MutableModel<ChatRoom, ChatRoomMetaData>) => MutableModel<ChatRoom, ChatRoomMetaData> | void): ChatRoom;
}

type EagerMessage = {
  readonly id: string;
  readonly text: string;
  readonly createdAt: string;
  readonly chatroom?: ChatRoom | null;
  readonly sender?: ChatParticipant | null;
  readonly seen?: boolean | null;
  readonly images?: (string | null)[] | null;
  readonly updatedAt?: string | null;
}

type LazyMessage = {
  readonly id: string;
  readonly text: string;
  readonly createdAt: string;
  readonly chatroom: AsyncItem<ChatRoom | undefined>;
  readonly sender: AsyncItem<ChatParticipant | undefined>;
  readonly seen?: boolean | null;
  readonly images?: (string | null)[] | null;
  readonly updatedAt?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message, MessageMetaData>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message, MessageMetaData>) => MutableModel<Message, MessageMetaData> | void): Message;
}

type EagerChatParticipant = {
  readonly id: string;
  readonly patient?: PatientModel | null;
  readonly doctor?: DoctorModel | null;
  readonly chatroom?: ChatRoom | null;
  readonly messages?: (Message | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChatParticipant = {
  readonly id: string;
  readonly patient: AsyncItem<PatientModel | undefined>;
  readonly doctor: AsyncItem<DoctorModel | undefined>;
  readonly chatroom: AsyncItem<ChatRoom | undefined>;
  readonly messages: AsyncCollection<Message>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ChatParticipant = LazyLoading extends LazyLoadingDisabled ? EagerChatParticipant : LazyChatParticipant

export declare const ChatParticipant: (new (init: ModelInit<ChatParticipant, ChatParticipantMetaData>) => ChatParticipant) & {
  copyOf(source: ChatParticipant, mutator: (draft: MutableModel<ChatParticipant, ChatParticipantMetaData>) => MutableModel<ChatParticipant, ChatParticipantMetaData> | void): ChatParticipant;
}

type EagerPatientModel = {
  readonly id: string;
  readonly firstname?: string | null;
  readonly lastname?: string | null;
  readonly birthdate?: string | null;
  readonly email?: string | null;
  readonly homeaddress?: string | null;
  readonly country?: string | null;
  readonly city?: string | null;
  readonly race?: string | null;
  readonly gender?: string | null;
  readonly smokingstatus?: string | null;
  readonly drinkingstatus?: string | null;
  readonly disability?: string | null;
  readonly image?: string | null;
  readonly status?: string | null;
  readonly agreedtoterms?: boolean | null;
  readonly basicinfocompletion?: number | null;
  readonly medicalinfocompletion?: number | null;
  readonly devicetoken?: string | null;
  readonly chatParticipant?: ChatParticipant | null;
  readonly notifications?: (Notification | null)[] | null;
  readonly PatientVideoCalls?: (VideoCall | null)[] | null;
  readonly PatientAppointments?: (Appointment | null)[] | null;
  readonly PatientReviews?: (Reviews | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly patientModelChatParticipantId?: string | null;
}

type LazyPatientModel = {
  readonly id: string;
  readonly firstname?: string | null;
  readonly lastname?: string | null;
  readonly birthdate?: string | null;
  readonly email?: string | null;
  readonly homeaddress?: string | null;
  readonly country?: string | null;
  readonly city?: string | null;
  readonly race?: string | null;
  readonly gender?: string | null;
  readonly smokingstatus?: string | null;
  readonly drinkingstatus?: string | null;
  readonly disability?: string | null;
  readonly image?: string | null;
  readonly status?: string | null;
  readonly agreedtoterms?: boolean | null;
  readonly basicinfocompletion?: number | null;
  readonly medicalinfocompletion?: number | null;
  readonly devicetoken?: string | null;
  readonly chatParticipant: AsyncItem<ChatParticipant | undefined>;
  readonly notifications: AsyncCollection<Notification>;
  readonly PatientVideoCalls: AsyncCollection<VideoCall>;
  readonly PatientAppointments: AsyncCollection<Appointment>;
  readonly PatientReviews: AsyncCollection<Reviews>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly patientModelChatParticipantId?: string | null;
}

export declare type PatientModel = LazyLoading extends LazyLoadingDisabled ? EagerPatientModel : LazyPatientModel

export declare const PatientModel: (new (init: ModelInit<PatientModel, PatientModelMetaData>) => PatientModel) & {
  copyOf(source: PatientModel, mutator: (draft: MutableModel<PatientModel, PatientModelMetaData>) => MutableModel<PatientModel, PatientModelMetaData> | void): PatientModel;
}

type EagerDayTimeModel = {
  readonly id: string;
  readonly day: string;
  readonly starthour: string;
  readonly endhour: string;
  readonly doctormodelID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDayTimeModel = {
  readonly id: string;
  readonly day: string;
  readonly starthour: string;
  readonly endhour: string;
  readonly doctormodelID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DayTimeModel = LazyLoading extends LazyLoadingDisabled ? EagerDayTimeModel : LazyDayTimeModel

export declare const DayTimeModel: (new (init: ModelInit<DayTimeModel, DayTimeModelMetaData>) => DayTimeModel) & {
  copyOf(source: DayTimeModel, mutator: (draft: MutableModel<DayTimeModel, DayTimeModelMetaData>) => MutableModel<DayTimeModel, DayTimeModelMetaData> | void): DayTimeModel;
}

type EagerDoctorModel = {
  readonly id: string;
  readonly firstname: string;
  readonly lastname: string;
  readonly email: string;
  readonly country: string;
  readonly city: string;
  readonly license: string;
  readonly specialization: string;
  readonly experience: number;
  readonly workplace?: string | null;
  readonly workAddress?: string | null;
  readonly workContact: string;
  readonly about?: string | null;
  readonly image?: string | null;
  readonly status?: string | null;
  readonly qualifications?: (string | null)[] | null;
  readonly averagerating?: number | null;
  readonly ratings?: number | null;
  readonly basicinfocompletion?: number | null;
  readonly specialistinfocompletion?: number | null;
  readonly workinfocompletion?: number | null;
  readonly makePublic?: boolean | null;
  readonly confirmed?: boolean | null;
  readonly devicetoken?: string | null;
  readonly chatParticipant?: ChatParticipant | null;
  readonly notifications?: (Notification | null)[] | null;
  readonly DoctorDayTimeModel?: (DayTimeModel | null)[] | null;
  readonly DoctorConFeeModels?: (ConsultationFeeModel | null)[] | null;
  readonly DoctorVideoCalls?: (VideoCall | null)[] | null;
  readonly DoctorAppointments?: (Appointment | null)[] | null;
  readonly DoctorArticles?: (Article | null)[] | null;
  readonly Reviews?: (Reviews | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly doctorModelChatParticipantId?: string | null;
}

type LazyDoctorModel = {
  readonly id: string;
  readonly firstname: string;
  readonly lastname: string;
  readonly email: string;
  readonly country: string;
  readonly city: string;
  readonly license: string;
  readonly specialization: string;
  readonly experience: number;
  readonly workplace?: string | null;
  readonly workAddress?: string | null;
  readonly workContact: string;
  readonly about?: string | null;
  readonly image?: string | null;
  readonly status?: string | null;
  readonly qualifications?: (string | null)[] | null;
  readonly averagerating?: number | null;
  readonly ratings?: number | null;
  readonly basicinfocompletion?: number | null;
  readonly specialistinfocompletion?: number | null;
  readonly workinfocompletion?: number | null;
  readonly makePublic?: boolean | null;
  readonly confirmed?: boolean | null;
  readonly devicetoken?: string | null;
  readonly chatParticipant: AsyncItem<ChatParticipant | undefined>;
  readonly notifications: AsyncCollection<Notification>;
  readonly DoctorDayTimeModel: AsyncCollection<DayTimeModel>;
  readonly DoctorConFeeModels: AsyncCollection<ConsultationFeeModel>;
  readonly DoctorVideoCalls: AsyncCollection<VideoCall>;
  readonly DoctorAppointments: AsyncCollection<Appointment>;
  readonly DoctorArticles: AsyncCollection<Article>;
  readonly Reviews: AsyncCollection<Reviews>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly doctorModelChatParticipantId?: string | null;
}

export declare type DoctorModel = LazyLoading extends LazyLoadingDisabled ? EagerDoctorModel : LazyDoctorModel

export declare const DoctorModel: (new (init: ModelInit<DoctorModel, DoctorModelMetaData>) => DoctorModel) & {
  copyOf(source: DoctorModel, mutator: (draft: MutableModel<DoctorModel, DoctorModelMetaData>) => MutableModel<DoctorModel, DoctorModelMetaData> | void): DoctorModel;
}