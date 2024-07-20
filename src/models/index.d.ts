import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerTransaction = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Transaction, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly message?: string | null;
  readonly category?: string | null;
  readonly status?: string | null;
  readonly amount?: number | null;
  readonly type?: string | null;
  readonly currency?: string | null;
  readonly transactiontype?: string | null;
  readonly sender?: string | null;
  readonly receiver?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTransaction = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Transaction, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly message?: string | null;
  readonly category?: string | null;
  readonly status?: string | null;
  readonly amount?: number | null;
  readonly type?: string | null;
  readonly currency?: string | null;
  readonly transactiontype?: string | null;
  readonly sender?: string | null;
  readonly receiver?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Transaction = LazyLoading extends LazyLoadingDisabled ? EagerTransaction : LazyTransaction

export declare const Transaction: (new (init: ModelInit<Transaction>) => Transaction) & {
  copyOf(source: Transaction, mutator: (draft: MutableModel<Transaction>) => MutableModel<Transaction> | void): Transaction;
}

type EagerWallet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Wallet, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ownerID: string;
  readonly accountNumber: string;
  readonly accountName: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWallet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Wallet, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ownerID: string;
  readonly accountNumber: string;
  readonly accountName: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Wallet = LazyLoading extends LazyLoadingDisabled ? EagerWallet : LazyWallet

export declare const Wallet: (new (init: ModelInit<Wallet>) => Wallet) & {
  copyOf(source: Wallet, mutator: (draft: MutableModel<Wallet>) => MutableModel<Wallet> | void): Wallet;
}

type EagerVideoCall = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VideoCall, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly channelName?: string | null;
  readonly patientmodelID: string;
  readonly doctormodelID: string;
  readonly patient?: PatientModel | null;
  readonly doctor?: DoctorModel | null;
  readonly subscriberDeviceToken?: string | null;
  readonly createdAt: string;
  readonly endedAt?: string | null;
  readonly picked?: boolean | null;
  readonly expiryTime?: number | null;
  readonly updatedAt?: string | null;
}

type LazyVideoCall = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VideoCall, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly channelName?: string | null;
  readonly patientmodelID: string;
  readonly doctormodelID: string;
  readonly patient: AsyncItem<PatientModel | undefined>;
  readonly doctor: AsyncItem<DoctorModel | undefined>;
  readonly subscriberDeviceToken?: string | null;
  readonly createdAt: string;
  readonly endedAt?: string | null;
  readonly picked?: boolean | null;
  readonly expiryTime?: number | null;
  readonly updatedAt?: string | null;
}

export declare type VideoCall = LazyLoading extends LazyLoadingDisabled ? EagerVideoCall : LazyVideoCall

export declare const VideoCall: (new (init: ModelInit<VideoCall>) => VideoCall) & {
  copyOf(source: VideoCall, mutator: (draft: MutableModel<VideoCall>) => MutableModel<VideoCall> | void): VideoCall;
}

type EagerArticle = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Article, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly contentMessage: string;
  readonly image?: string | null;
  readonly doctormodelID: string;
  readonly doctor?: DoctorModel | null;
  readonly createdAt: string;
  readonly categories?: (string | null)[] | null;
  readonly updatedAt?: string | null;
}

type LazyArticle = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Article, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly contentMessage: string;
  readonly image?: string | null;
  readonly doctormodelID: string;
  readonly doctor: AsyncItem<DoctorModel | undefined>;
  readonly createdAt: string;
  readonly categories?: (string | null)[] | null;
  readonly updatedAt?: string | null;
}

export declare type Article = LazyLoading extends LazyLoadingDisabled ? EagerArticle : LazyArticle

export declare const Article: (new (init: ModelInit<Article>) => Article) & {
  copyOf(source: Article, mutator: (draft: MutableModel<Article>) => MutableModel<Article> | void): Article;
}

type EagerNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notification, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly contentMessage: string;
  readonly sourceType?: string | null;
  readonly navigationID?: string | null;
  readonly action: string;
  readonly image?: string | null;
  readonly seen?: boolean | null;
  readonly doctormodelID?: string | null;
  readonly patientmodelID?: string | null;
  readonly doctor?: DoctorModel | null;
  readonly patient?: PatientModel | null;
  readonly createdAt: string;
  readonly receipientDeviceToken?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notification, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly contentMessage: string;
  readonly sourceType?: string | null;
  readonly navigationID?: string | null;
  readonly action: string;
  readonly image?: string | null;
  readonly seen?: boolean | null;
  readonly doctormodelID?: string | null;
  readonly patientmodelID?: string | null;
  readonly doctor: AsyncItem<DoctorModel | undefined>;
  readonly patient: AsyncItem<PatientModel | undefined>;
  readonly createdAt: string;
  readonly receipientDeviceToken?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Notification = LazyLoading extends LazyLoadingDisabled ? EagerNotification : LazyNotification

export declare const Notification: (new (init: ModelInit<Notification>) => Notification) & {
  copyOf(source: Notification, mutator: (draft: MutableModel<Notification>) => MutableModel<Notification> | void): Notification;
}

type EagerReviews = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reviews, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly reviewtext?: string | null;
  readonly ratings?: number | null;
  readonly patientmodelID: string;
  readonly doctormodelID: string;
  readonly patient?: PatientModel | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReviews = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reviews, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly reviewtext?: string | null;
  readonly ratings?: number | null;
  readonly patientmodelID: string;
  readonly doctormodelID: string;
  readonly patient: AsyncItem<PatientModel | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Reviews = LazyLoading extends LazyLoadingDisabled ? EagerReviews : LazyReviews

export declare const Reviews: (new (init: ModelInit<Reviews>) => Reviews) & {
  copyOf(source: Reviews, mutator: (draft: MutableModel<Reviews>) => MutableModel<Reviews> | void): Reviews;
}

type EagerAppointment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Appointment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly consultationtype?: string | null;
  readonly starthour?: string | null;
  readonly endhour?: string | null;
  readonly day?: string | null;
  readonly month?: string | null;
  readonly date?: string | null;
  readonly timeframe?: string | null;
  readonly fee?: number | null;
  readonly shortnote?: string | null;
  readonly category?: string | null;
  readonly status?: string | null;
  readonly countdown?: string | null;
  readonly doctormodelID: string;
  readonly patientmodelID: string;
  readonly patient?: PatientModel | null;
  readonly doctor?: DoctorModel | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAppointment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Appointment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly consultationtype?: string | null;
  readonly starthour?: string | null;
  readonly endhour?: string | null;
  readonly day?: string | null;
  readonly month?: string | null;
  readonly date?: string | null;
  readonly timeframe?: string | null;
  readonly fee?: number | null;
  readonly shortnote?: string | null;
  readonly category?: string | null;
  readonly status?: string | null;
  readonly countdown?: string | null;
  readonly doctormodelID: string;
  readonly patientmodelID: string;
  readonly patient: AsyncItem<PatientModel | undefined>;
  readonly doctor: AsyncItem<DoctorModel | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Appointment = LazyLoading extends LazyLoadingDisabled ? EagerAppointment : LazyAppointment

export declare const Appointment: (new (init: ModelInit<Appointment>) => Appointment) & {
  copyOf(source: Appointment, mutator: (draft: MutableModel<Appointment>) => MutableModel<Appointment> | void): Appointment;
}

type EagerChatRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
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
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
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

export declare const ChatRoom: (new (init: ModelInit<ChatRoom>) => ChatRoom) & {
  copyOf(source: ChatRoom, mutator: (draft: MutableModel<ChatRoom>) => MutableModel<ChatRoom> | void): ChatRoom;
}

type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly text: string;
  readonly createdAt: string;
  readonly chatroomID: string;
  readonly chatroom?: ChatRoom | null;
  readonly senderID: string;
  readonly sender?: ChatParticipant | null;
  readonly seen?: boolean | null;
  readonly images?: (string | null)[] | null;
  readonly updatedAt?: string | null;
}

type LazyMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly text: string;
  readonly createdAt: string;
  readonly chatroomID: string;
  readonly chatroom: AsyncItem<ChatRoom | undefined>;
  readonly senderID: string;
  readonly sender: AsyncItem<ChatParticipant | undefined>;
  readonly seen?: boolean | null;
  readonly images?: (string | null)[] | null;
  readonly updatedAt?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

type EagerChatParticipant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatParticipant, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly patientmodelID: string;
  readonly doctormodelID: string;
  readonly chatroomID: string;
  readonly patient?: PatientModel | null;
  readonly doctor?: DoctorModel | null;
  readonly chatroom?: ChatRoom | null;
  readonly messages?: (Message | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChatParticipant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatParticipant, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly patientmodelID: string;
  readonly doctormodelID: string;
  readonly chatroomID: string;
  readonly patient: AsyncItem<PatientModel | undefined>;
  readonly doctor: AsyncItem<DoctorModel | undefined>;
  readonly chatroom: AsyncItem<ChatRoom | undefined>;
  readonly messages: AsyncCollection<Message>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ChatParticipant = LazyLoading extends LazyLoadingDisabled ? EagerChatParticipant : LazyChatParticipant

export declare const ChatParticipant: (new (init: ModelInit<ChatParticipant>) => ChatParticipant) & {
  copyOf(source: ChatParticipant, mutator: (draft: MutableModel<ChatParticipant>) => MutableModel<ChatParticipant> | void): ChatParticipant;
}

type EagerPatientModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PatientModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
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
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PatientModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
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

export declare const PatientModel: (new (init: ModelInit<PatientModel>) => PatientModel) & {
  copyOf(source: PatientModel, mutator: (draft: MutableModel<PatientModel>) => MutableModel<PatientModel> | void): PatientModel;
}

type EagerDayTimeModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DayTimeModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly day: string;
  readonly starthour: string;
  readonly endhour: string;
  readonly doctormodelID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDayTimeModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DayTimeModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly day: string;
  readonly starthour: string;
  readonly endhour: string;
  readonly doctormodelID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DayTimeModel = LazyLoading extends LazyLoadingDisabled ? EagerDayTimeModel : LazyDayTimeModel

export declare const DayTimeModel: (new (init: ModelInit<DayTimeModel>) => DayTimeModel) & {
  copyOf(source: DayTimeModel, mutator: (draft: MutableModel<DayTimeModel>) => MutableModel<DayTimeModel> | void): DayTimeModel;
}

type EagerConsultationFeeModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ConsultationFeeModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
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
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ConsultationFeeModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
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

export declare const ConsultationFeeModel: (new (init: ModelInit<ConsultationFeeModel>) => ConsultationFeeModel) & {
  copyOf(source: ConsultationFeeModel, mutator: (draft: MutableModel<ConsultationFeeModel>) => MutableModel<ConsultationFeeModel> | void): ConsultationFeeModel;
}

type EagerDoctorModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DoctorModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
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
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DoctorModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
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

export declare const DoctorModel: (new (init: ModelInit<DoctorModel>) => DoctorModel) & {
  copyOf(source: DoctorModel, mutator: (draft: MutableModel<DoctorModel>) => MutableModel<DoctorModel> | void): DoctorModel;
}