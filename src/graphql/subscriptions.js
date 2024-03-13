/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateArticle = /* GraphQL */ `
  subscription OnCreateArticle($filter: ModelSubscriptionArticleFilterInput) {
    onCreateArticle(filter: $filter) {
      id
      title
      contentMessage
      image
      doctormodelID
      doctor {
        id
        firstname
        lastname
        email
        country
        city
        license
        specialization
        experience
        workplace
        workAddress
        workContact
        about
        image
        status
        qualifications
        averagerating
        ratings
        basicinfocompletion
        specialistinfocompletion
        workinfocompletion
        makePublic
        confirmed
        devicetoken
        chatParticipant {
          id
          patientmodelID
          doctormodelID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        DoctorDayTimeModel {
          nextToken
          startedAt
          __typename
        }
        DoctorConFeeModels {
          nextToken
          startedAt
          __typename
        }
        DoctorVideoCalls {
          nextToken
          startedAt
          __typename
        }
        DoctorAppointments {
          nextToken
          startedAt
          __typename
        }
        DoctorArticles {
          nextToken
          startedAt
          __typename
        }
        Reviews {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        doctorModelChatParticipantId
        __typename
      }
      createdAt
      categories
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateArticle = /* GraphQL */ `
  subscription OnUpdateArticle($filter: ModelSubscriptionArticleFilterInput) {
    onUpdateArticle(filter: $filter) {
      id
      title
      contentMessage
      image
      doctormodelID
      doctor {
        id
        firstname
        lastname
        email
        country
        city
        license
        specialization
        experience
        workplace
        workAddress
        workContact
        about
        image
        status
        qualifications
        averagerating
        ratings
        basicinfocompletion
        specialistinfocompletion
        workinfocompletion
        makePublic
        confirmed
        devicetoken
        chatParticipant {
          id
          patientmodelID
          doctormodelID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        DoctorDayTimeModel {
          nextToken
          startedAt
          __typename
        }
        DoctorConFeeModels {
          nextToken
          startedAt
          __typename
        }
        DoctorVideoCalls {
          nextToken
          startedAt
          __typename
        }
        DoctorAppointments {
          nextToken
          startedAt
          __typename
        }
        DoctorArticles {
          nextToken
          startedAt
          __typename
        }
        Reviews {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        doctorModelChatParticipantId
        __typename
      }
      createdAt
      categories
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteArticle = /* GraphQL */ `
  subscription OnDeleteArticle($filter: ModelSubscriptionArticleFilterInput) {
    onDeleteArticle(filter: $filter) {
      id
      title
      contentMessage
      image
      doctormodelID
      doctor {
        id
        firstname
        lastname
        email
        country
        city
        license
        specialization
        experience
        workplace
        workAddress
        workContact
        about
        image
        status
        qualifications
        averagerating
        ratings
        basicinfocompletion
        specialistinfocompletion
        workinfocompletion
        makePublic
        confirmed
        devicetoken
        chatParticipant {
          id
          patientmodelID
          doctormodelID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        DoctorDayTimeModel {
          nextToken
          startedAt
          __typename
        }
        DoctorConFeeModels {
          nextToken
          startedAt
          __typename
        }
        DoctorVideoCalls {
          nextToken
          startedAt
          __typename
        }
        DoctorAppointments {
          nextToken
          startedAt
          __typename
        }
        DoctorArticles {
          nextToken
          startedAt
          __typename
        }
        Reviews {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        doctorModelChatParticipantId
        __typename
      }
      createdAt
      categories
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onCreateNotification(filter: $filter) {
      id
      title
      contentMessage
      sourceType
      navigationID
      action
      image
      seen
      doctormodelID
      patientmodelID
      doctor {
        id
        firstname
        lastname
        email
        country
        city
        license
        specialization
        experience
        workplace
        workAddress
        workContact
        about
        image
        status
        qualifications
        averagerating
        ratings
        basicinfocompletion
        specialistinfocompletion
        workinfocompletion
        makePublic
        confirmed
        devicetoken
        chatParticipant {
          id
          patientmodelID
          doctormodelID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        DoctorDayTimeModel {
          nextToken
          startedAt
          __typename
        }
        DoctorConFeeModels {
          nextToken
          startedAt
          __typename
        }
        DoctorVideoCalls {
          nextToken
          startedAt
          __typename
        }
        DoctorAppointments {
          nextToken
          startedAt
          __typename
        }
        DoctorArticles {
          nextToken
          startedAt
          __typename
        }
        Reviews {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        doctorModelChatParticipantId
        __typename
      }
      patient {
        id
        firstname
        lastname
        birthdate
        email
        homeaddress
        country
        city
        race
        gender
        smokingstatus
        drinkingstatus
        disability
        image
        status
        agreedtoterms
        basicinfocompletion
        medicalinfocompletion
        devicetoken
        chatParticipant {
          id
          patientmodelID
          doctormodelID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        PatientVideoCalls {
          nextToken
          startedAt
          __typename
        }
        PatientAppointments {
          nextToken
          startedAt
          __typename
        }
        PatientReviews {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        patientModelChatParticipantId
        __typename
      }
      createdAt
      receipientDeviceToken
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onUpdateNotification(filter: $filter) {
      id
      title
      contentMessage
      sourceType
      navigationID
      action
      image
      seen
      doctormodelID
      patientmodelID
      doctor {
        id
        firstname
        lastname
        email
        country
        city
        license
        specialization
        experience
        workplace
        workAddress
        workContact
        about
        image
        status
        qualifications
        averagerating
        ratings
        basicinfocompletion
        specialistinfocompletion
        workinfocompletion
        makePublic
        confirmed
        devicetoken
        chatParticipant {
          id
          patientmodelID
          doctormodelID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        DoctorDayTimeModel {
          nextToken
          startedAt
          __typename
        }
        DoctorConFeeModels {
          nextToken
          startedAt
          __typename
        }
        DoctorVideoCalls {
          nextToken
          startedAt
          __typename
        }
        DoctorAppointments {
          nextToken
          startedAt
          __typename
        }
        DoctorArticles {
          nextToken
          startedAt
          __typename
        }
        Reviews {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        doctorModelChatParticipantId
        __typename
      }
      patient {
        id
        firstname
        lastname
        birthdate
        email
        homeaddress
        country
        city
        race
        gender
        smokingstatus
        drinkingstatus
        disability
        image
        status
        agreedtoterms
        basicinfocompletion
        medicalinfocompletion
        devicetoken
        chatParticipant {
          id
          patientmodelID
          doctormodelID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        PatientVideoCalls {
          nextToken
          startedAt
          __typename
        }
        PatientAppointments {
          nextToken
          startedAt
          __typename
        }
        PatientReviews {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        patientModelChatParticipantId
        __typename
      }
      createdAt
      receipientDeviceToken
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onDeleteNotification(filter: $filter) {
      id
      title
      contentMessage
      sourceType
      navigationID
      action
      image
      seen
      doctormodelID
      patientmodelID
      doctor {
        id
        firstname
        lastname
        email
        country
        city
        license
        specialization
        experience
        workplace
        workAddress
        workContact
        about
        image
        status
        qualifications
        averagerating
        ratings
        basicinfocompletion
        specialistinfocompletion
        workinfocompletion
        makePublic
        confirmed
        devicetoken
        chatParticipant {
          id
          patientmodelID
          doctormodelID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        DoctorDayTimeModel {
          nextToken
          startedAt
          __typename
        }
        DoctorConFeeModels {
          nextToken
          startedAt
          __typename
        }
        DoctorVideoCalls {
          nextToken
          startedAt
          __typename
        }
        DoctorAppointments {
          nextToken
          startedAt
          __typename
        }
        DoctorArticles {
          nextToken
          startedAt
          __typename
        }
        Reviews {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        doctorModelChatParticipantId
        __typename
      }
      patient {
        id
        firstname
        lastname
        birthdate
        email
        homeaddress
        country
        city
        race
        gender
        smokingstatus
        drinkingstatus
        disability
        image
        status
        agreedtoterms
        basicinfocompletion
        medicalinfocompletion
        devicetoken
        chatParticipant {
          id
          patientmodelID
          doctormodelID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        PatientVideoCalls {
          nextToken
          startedAt
          __typename
        }
        PatientAppointments {
          nextToken
          startedAt
          __typename
        }
        PatientReviews {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        patientModelChatParticipantId
        __typename
      }
      createdAt
      receipientDeviceToken
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateVideoCall = /* GraphQL */ `
  subscription OnCreateVideoCall(
    $filter: ModelSubscriptionVideoCallFilterInput
  ) {
    onCreateVideoCall(filter: $filter) {
      id
      channelName
      patientmodelID
      doctormodelID
      patient {
        id
        firstname
        lastname
        birthdate
        email
        homeaddress
        country
        city
        race
        gender
        smokingstatus
        drinkingstatus
        disability
        image
        status
        agreedtoterms
        basicinfocompletion
        medicalinfocompletion
        devicetoken
        chatParticipant {
          id
          patientmodelID
          doctormodelID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        PatientVideoCalls {
          nextToken
          startedAt
          __typename
        }
        PatientAppointments {
          nextToken
          startedAt
          __typename
        }
        PatientReviews {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        patientModelChatParticipantId
        __typename
      }
      doctor {
        id
        firstname
        lastname
        email
        country
        city
        license
        specialization
        experience
        workplace
        workAddress
        workContact
        about
        image
        status
        qualifications
        averagerating
        ratings
        basicinfocompletion
        specialistinfocompletion
        workinfocompletion
        makePublic
        confirmed
        devicetoken
        chatParticipant {
          id
          patientmodelID
          doctormodelID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        DoctorDayTimeModel {
          nextToken
          startedAt
          __typename
        }
        DoctorConFeeModels {
          nextToken
          startedAt
          __typename
        }
        DoctorVideoCalls {
          nextToken
          startedAt
          __typename
        }
        DoctorAppointments {
          nextToken
          startedAt
          __typename
        }
        DoctorArticles {
          nextToken
          startedAt
          __typename
        }
        Reviews {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        doctorModelChatParticipantId
        __typename
      }
      subscriberDeviceToken
      createdAt
      picked
      expiryTime
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateVideoCall = /* GraphQL */ `
  subscription OnUpdateVideoCall(
    $filter: ModelSubscriptionVideoCallFilterInput
  ) {
    onUpdateVideoCall(filter: $filter) {
      id
      channelName
      patientmodelID
      doctormodelID
      patient {
        id
        firstname
        lastname
        birthdate
        email
        homeaddress
        country
        city
        race
        gender
        smokingstatus
        drinkingstatus
        disability
        image
        status
        agreedtoterms
        basicinfocompletion
        medicalinfocompletion
        devicetoken
        chatParticipant {
          id
          patientmodelID
          doctormodelID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        PatientVideoCalls {
          nextToken
          startedAt
          __typename
        }
        PatientAppointments {
          nextToken
          startedAt
          __typename
        }
        PatientReviews {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        patientModelChatParticipantId
        __typename
      }
      doctor {
        id
        firstname
        lastname
        email
        country
        city
        license
        specialization
        experience
        workplace
        workAddress
        workContact
        about
        image
        status
        qualifications
        averagerating
        ratings
        basicinfocompletion
        specialistinfocompletion
        workinfocompletion
        makePublic
        confirmed
        devicetoken
        chatParticipant {
          id
          patientmodelID
          doctormodelID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        DoctorDayTimeModel {
          nextToken
          startedAt
          __typename
        }
        DoctorConFeeModels {
          nextToken
          startedAt
          __typename
        }
        DoctorVideoCalls {
          nextToken
          startedAt
          __typename
        }
        DoctorAppointments {
          nextToken
          startedAt
          __typename
        }
        DoctorArticles {
          nextToken
          startedAt
          __typename
        }
        Reviews {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        doctorModelChatParticipantId
        __typename
      }
      subscriberDeviceToken
      createdAt
      picked
      expiryTime
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteVideoCall = /* GraphQL */ `
  subscription OnDeleteVideoCall(
    $filter: ModelSubscriptionVideoCallFilterInput
  ) {
    onDeleteVideoCall(filter: $filter) {
      id
      channelName
      patientmodelID
      doctormodelID
      patient {
        id
        firstname
        lastname
        birthdate
        email
        homeaddress
        country
        city
        race
        gender
        smokingstatus
        drinkingstatus
        disability
        image
        status
        agreedtoterms
        basicinfocompletion
        medicalinfocompletion
        devicetoken
        chatParticipant {
          id
          patientmodelID
          doctormodelID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        PatientVideoCalls {
          nextToken
          startedAt
          __typename
        }
        PatientAppointments {
          nextToken
          startedAt
          __typename
        }
        PatientReviews {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        patientModelChatParticipantId
        __typename
      }
      doctor {
        id
        firstname
        lastname
        email
        country
        city
        license
        specialization
        experience
        workplace
        workAddress
        workContact
        about
        image
        status
        qualifications
        averagerating
        ratings
        basicinfocompletion
        specialistinfocompletion
        workinfocompletion
        makePublic
        confirmed
        devicetoken
        chatParticipant {
          id
          patientmodelID
          doctormodelID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        DoctorDayTimeModel {
          nextToken
          startedAt
          __typename
        }
        DoctorConFeeModels {
          nextToken
          startedAt
          __typename
        }
        DoctorVideoCalls {
          nextToken
          startedAt
          __typename
        }
        DoctorAppointments {
          nextToken
          startedAt
          __typename
        }
        DoctorArticles {
          nextToken
          startedAt
          __typename
        }
        Reviews {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        doctorModelChatParticipantId
        __typename
      }
      subscriberDeviceToken
      createdAt
      picked
      expiryTime
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateReviews = /* GraphQL */ `
  subscription OnCreateReviews($filter: ModelSubscriptionReviewsFilterInput) {
    onCreateReviews(filter: $filter) {
      id
      reviewtext
      ratings
      patientmodelID
      doctormodelID
      patient {
        id
        firstname
        lastname
        birthdate
        email
        homeaddress
        country
        city
        race
        gender
        smokingstatus
        drinkingstatus
        disability
        image
        status
        agreedtoterms
        basicinfocompletion
        medicalinfocompletion
        devicetoken
        chatParticipant {
          id
          patientmodelID
          doctormodelID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        PatientVideoCalls {
          nextToken
          startedAt
          __typename
        }
        PatientAppointments {
          nextToken
          startedAt
          __typename
        }
        PatientReviews {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        patientModelChatParticipantId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateReviews = /* GraphQL */ `
  subscription OnUpdateReviews($filter: ModelSubscriptionReviewsFilterInput) {
    onUpdateReviews(filter: $filter) {
      id
      reviewtext
      ratings
      patientmodelID
      doctormodelID
      patient {
        id
        firstname
        lastname
        birthdate
        email
        homeaddress
        country
        city
        race
        gender
        smokingstatus
        drinkingstatus
        disability
        image
        status
        agreedtoterms
        basicinfocompletion
        medicalinfocompletion
        devicetoken
        chatParticipant {
          id
          patientmodelID
          doctormodelID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        PatientVideoCalls {
          nextToken
          startedAt
          __typename
        }
        PatientAppointments {
          nextToken
          startedAt
          __typename
        }
        PatientReviews {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        patientModelChatParticipantId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteReviews = /* GraphQL */ `
  subscription OnDeleteReviews($filter: ModelSubscriptionReviewsFilterInput) {
    onDeleteReviews(filter: $filter) {
      id
      reviewtext
      ratings
      patientmodelID
      doctormodelID
      patient {
        id
        firstname
        lastname
        birthdate
        email
        homeaddress
        country
        city
        race
        gender
        smokingstatus
        drinkingstatus
        disability
        image
        status
        agreedtoterms
        basicinfocompletion
        medicalinfocompletion
        devicetoken
        chatParticipant {
          id
          patientmodelID
          doctormodelID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        PatientVideoCalls {
          nextToken
          startedAt
          __typename
        }
        PatientAppointments {
          nextToken
          startedAt
          __typename
        }
        PatientReviews {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        patientModelChatParticipantId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateAppointment = /* GraphQL */ `
  subscription OnCreateAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
  ) {
    onCreateAppointment(filter: $filter) {
      id
      consultationtype
      starthour
      endhour
      day
      month
      date
      timeframe
      shortnote
      category
      status
      countdown
      doctormodelID
      patientmodelID
      patient {
        id
        firstname
        lastname
        birthdate
        email
        homeaddress
        country
        city
        race
        gender
        smokingstatus
        drinkingstatus
        disability
        image
        status
        agreedtoterms
        basicinfocompletion
        medicalinfocompletion
        devicetoken
        chatParticipant {
          id
          patientmodelID
          doctormodelID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        PatientVideoCalls {
          nextToken
          startedAt
          __typename
        }
        PatientAppointments {
          nextToken
          startedAt
          __typename
        }
        PatientReviews {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        patientModelChatParticipantId
        __typename
      }
      doctor {
        id
        firstname
        lastname
        email
        country
        city
        license
        specialization
        experience
        workplace
        workAddress
        workContact
        about
        image
        status
        qualifications
        averagerating
        ratings
        basicinfocompletion
        specialistinfocompletion
        workinfocompletion
        makePublic
        confirmed
        devicetoken
        chatParticipant {
          id
          patientmodelID
          doctormodelID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        DoctorDayTimeModel {
          nextToken
          startedAt
          __typename
        }
        DoctorConFeeModels {
          nextToken
          startedAt
          __typename
        }
        DoctorVideoCalls {
          nextToken
          startedAt
          __typename
        }
        DoctorAppointments {
          nextToken
          startedAt
          __typename
        }
        DoctorArticles {
          nextToken
          startedAt
          __typename
        }
        Reviews {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        doctorModelChatParticipantId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateAppointment = /* GraphQL */ `
  subscription OnUpdateAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
  ) {
    onUpdateAppointment(filter: $filter) {
      id
      consultationtype
      starthour
      endhour
      day
      month
      date
      timeframe
      shortnote
      category
      status
      countdown
      doctormodelID
      patientmodelID
      patient {
        id
        firstname
        lastname
        birthdate
        email
        homeaddress
        country
        city
        race
        gender
        smokingstatus
        drinkingstatus
        disability
        image
        status
        agreedtoterms
        basicinfocompletion
        medicalinfocompletion
        devicetoken
        chatParticipant {
          id
          patientmodelID
          doctormodelID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        PatientVideoCalls {
          nextToken
          startedAt
          __typename
        }
        PatientAppointments {
          nextToken
          startedAt
          __typename
        }
        PatientReviews {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        patientModelChatParticipantId
        __typename
      }
      doctor {
        id
        firstname
        lastname
        email
        country
        city
        license
        specialization
        experience
        workplace
        workAddress
        workContact
        about
        image
        status
        qualifications
        averagerating
        ratings
        basicinfocompletion
        specialistinfocompletion
        workinfocompletion
        makePublic
        confirmed
        devicetoken
        chatParticipant {
          id
          patientmodelID
          doctormodelID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        DoctorDayTimeModel {
          nextToken
          startedAt
          __typename
        }
        DoctorConFeeModels {
          nextToken
          startedAt
          __typename
        }
        DoctorVideoCalls {
          nextToken
          startedAt
          __typename
        }
        DoctorAppointments {
          nextToken
          startedAt
          __typename
        }
        DoctorArticles {
          nextToken
          startedAt
          __typename
        }
        Reviews {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        doctorModelChatParticipantId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteAppointment = /* GraphQL */ `
  subscription OnDeleteAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
  ) {
    onDeleteAppointment(filter: $filter) {
      id
      consultationtype
      starthour
      endhour
      day
      month
      date
      timeframe
      shortnote
      category
      status
      countdown
      doctormodelID
      patientmodelID
      patient {
        id
        firstname
        lastname
        birthdate
        email
        homeaddress
        country
        city
        race
        gender
        smokingstatus
        drinkingstatus
        disability
        image
        status
        agreedtoterms
        basicinfocompletion
        medicalinfocompletion
        devicetoken
        chatParticipant {
          id
          patientmodelID
          doctormodelID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        PatientVideoCalls {
          nextToken
          startedAt
          __typename
        }
        PatientAppointments {
          nextToken
          startedAt
          __typename
        }
        PatientReviews {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        patientModelChatParticipantId
        __typename
      }
      doctor {
        id
        firstname
        lastname
        email
        country
        city
        license
        specialization
        experience
        workplace
        workAddress
        workContact
        about
        image
        status
        qualifications
        averagerating
        ratings
        basicinfocompletion
        specialistinfocompletion
        workinfocompletion
        makePublic
        confirmed
        devicetoken
        chatParticipant {
          id
          patientmodelID
          doctormodelID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        DoctorDayTimeModel {
          nextToken
          startedAt
          __typename
        }
        DoctorConFeeModels {
          nextToken
          startedAt
          __typename
        }
        DoctorVideoCalls {
          nextToken
          startedAt
          __typename
        }
        DoctorAppointments {
          nextToken
          startedAt
          __typename
        }
        DoctorArticles {
          nextToken
          startedAt
          __typename
        }
        Reviews {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        doctorModelChatParticipantId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateConsultationFeeModel = /* GraphQL */ `
  subscription OnCreateConsultationFeeModel(
    $filter: ModelSubscriptionConsultationFeeModelFilterInput
    $owner: String
  ) {
    onCreateConsultationFeeModel(filter: $filter, owner: $owner) {
      id
      rateperminute
      timeframe
      consultationtype
      doctormodelID
      rate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onUpdateConsultationFeeModel = /* GraphQL */ `
  subscription OnUpdateConsultationFeeModel(
    $filter: ModelSubscriptionConsultationFeeModelFilterInput
    $owner: String
  ) {
    onUpdateConsultationFeeModel(filter: $filter, owner: $owner) {
      id
      rateperminute
      timeframe
      consultationtype
      doctormodelID
      rate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onDeleteConsultationFeeModel = /* GraphQL */ `
  subscription OnDeleteConsultationFeeModel(
    $filter: ModelSubscriptionConsultationFeeModelFilterInput
    $owner: String
  ) {
    onDeleteConsultationFeeModel(filter: $filter, owner: $owner) {
      id
      rateperminute
      timeframe
      consultationtype
      doctormodelID
      rate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom(
    $filter: ModelSubscriptionChatRoomFilterInput
    $owner: String
  ) {
    onCreateChatRoom(filter: $filter, owner: $owner) {
      id
      name
      image
      participants {
        items {
          id
          patientmodelID
          doctormodelID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      messages {
        items {
          id
          text
          createdAt
          chatroomID
          senderID
          seen
          images
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      lastMessage {
        id
        text
        createdAt
        chatroomID
        chatroom {
          id
          name
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomLastMessageId
          owner
          __typename
        }
        senderID
        sender {
          id
          patientmodelID
          doctormodelID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        seen
        images
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      chatRoomLastMessageId
      owner
      __typename
    }
  }
`;
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom(
    $filter: ModelSubscriptionChatRoomFilterInput
    $owner: String
  ) {
    onUpdateChatRoom(filter: $filter, owner: $owner) {
      id
      name
      image
      participants {
        items {
          id
          patientmodelID
          doctormodelID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      messages {
        items {
          id
          text
          createdAt
          chatroomID
          senderID
          seen
          images
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      lastMessage {
        id
        text
        createdAt
        chatroomID
        chatroom {
          id
          name
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomLastMessageId
          owner
          __typename
        }
        senderID
        sender {
          id
          patientmodelID
          doctormodelID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        seen
        images
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      chatRoomLastMessageId
      owner
      __typename
    }
  }
`;
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom(
    $filter: ModelSubscriptionChatRoomFilterInput
    $owner: String
  ) {
    onDeleteChatRoom(filter: $filter, owner: $owner) {
      id
      name
      image
      participants {
        items {
          id
          patientmodelID
          doctormodelID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      messages {
        items {
          id
          text
          createdAt
          chatroomID
          senderID
          seen
          images
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      lastMessage {
        id
        text
        createdAt
        chatroomID
        chatroom {
          id
          name
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomLastMessageId
          owner
          __typename
        }
        senderID
        sender {
          id
          patientmodelID
          doctormodelID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        seen
        images
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      chatRoomLastMessageId
      owner
      __typename
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $owner: String
  ) {
    onCreateMessage(filter: $filter, owner: $owner) {
      id
      text
      createdAt
      chatroomID
      chatroom {
        id
        name
        image
        participants {
          nextToken
          startedAt
          __typename
        }
        messages {
          nextToken
          startedAt
          __typename
        }
        lastMessage {
          id
          text
          createdAt
          chatroomID
          senderID
          seen
          images
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatRoomLastMessageId
        owner
        __typename
      }
      senderID
      sender {
        id
        patientmodelID
        doctormodelID
        chatroomID
        patient {
          id
          firstname
          lastname
          birthdate
          email
          homeaddress
          country
          city
          race
          gender
          smokingstatus
          drinkingstatus
          disability
          image
          status
          agreedtoterms
          basicinfocompletion
          medicalinfocompletion
          devicetoken
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          patientModelChatParticipantId
          __typename
        }
        doctor {
          id
          firstname
          lastname
          email
          country
          city
          license
          specialization
          experience
          workplace
          workAddress
          workContact
          about
          image
          status
          qualifications
          averagerating
          ratings
          basicinfocompletion
          specialistinfocompletion
          workinfocompletion
          makePublic
          confirmed
          devicetoken
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          doctorModelChatParticipantId
          __typename
        }
        chatroom {
          id
          name
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomLastMessageId
          owner
          __typename
        }
        messages {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      seen
      images
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $owner: String
  ) {
    onUpdateMessage(filter: $filter, owner: $owner) {
      id
      text
      createdAt
      chatroomID
      chatroom {
        id
        name
        image
        participants {
          nextToken
          startedAt
          __typename
        }
        messages {
          nextToken
          startedAt
          __typename
        }
        lastMessage {
          id
          text
          createdAt
          chatroomID
          senderID
          seen
          images
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatRoomLastMessageId
        owner
        __typename
      }
      senderID
      sender {
        id
        patientmodelID
        doctormodelID
        chatroomID
        patient {
          id
          firstname
          lastname
          birthdate
          email
          homeaddress
          country
          city
          race
          gender
          smokingstatus
          drinkingstatus
          disability
          image
          status
          agreedtoterms
          basicinfocompletion
          medicalinfocompletion
          devicetoken
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          patientModelChatParticipantId
          __typename
        }
        doctor {
          id
          firstname
          lastname
          email
          country
          city
          license
          specialization
          experience
          workplace
          workAddress
          workContact
          about
          image
          status
          qualifications
          averagerating
          ratings
          basicinfocompletion
          specialistinfocompletion
          workinfocompletion
          makePublic
          confirmed
          devicetoken
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          doctorModelChatParticipantId
          __typename
        }
        chatroom {
          id
          name
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomLastMessageId
          owner
          __typename
        }
        messages {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      seen
      images
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $owner: String
  ) {
    onDeleteMessage(filter: $filter, owner: $owner) {
      id
      text
      createdAt
      chatroomID
      chatroom {
        id
        name
        image
        participants {
          nextToken
          startedAt
          __typename
        }
        messages {
          nextToken
          startedAt
          __typename
        }
        lastMessage {
          id
          text
          createdAt
          chatroomID
          senderID
          seen
          images
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatRoomLastMessageId
        owner
        __typename
      }
      senderID
      sender {
        id
        patientmodelID
        doctormodelID
        chatroomID
        patient {
          id
          firstname
          lastname
          birthdate
          email
          homeaddress
          country
          city
          race
          gender
          smokingstatus
          drinkingstatus
          disability
          image
          status
          agreedtoterms
          basicinfocompletion
          medicalinfocompletion
          devicetoken
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          patientModelChatParticipantId
          __typename
        }
        doctor {
          id
          firstname
          lastname
          email
          country
          city
          license
          specialization
          experience
          workplace
          workAddress
          workContact
          about
          image
          status
          qualifications
          averagerating
          ratings
          basicinfocompletion
          specialistinfocompletion
          workinfocompletion
          makePublic
          confirmed
          devicetoken
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          doctorModelChatParticipantId
          __typename
        }
        chatroom {
          id
          name
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomLastMessageId
          owner
          __typename
        }
        messages {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      seen
      images
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onCreateChatParticipant = /* GraphQL */ `
  subscription OnCreateChatParticipant(
    $filter: ModelSubscriptionChatParticipantFilterInput
    $owner: String
  ) {
    onCreateChatParticipant(filter: $filter, owner: $owner) {
      id
      patientmodelID
      doctormodelID
      chatroomID
      patient {
        id
        firstname
        lastname
        birthdate
        email
        homeaddress
        country
        city
        race
        gender
        smokingstatus
        drinkingstatus
        disability
        image
        status
        agreedtoterms
        basicinfocompletion
        medicalinfocompletion
        devicetoken
        chatParticipant {
          id
          patientmodelID
          doctormodelID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        PatientVideoCalls {
          nextToken
          startedAt
          __typename
        }
        PatientAppointments {
          nextToken
          startedAt
          __typename
        }
        PatientReviews {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        patientModelChatParticipantId
        __typename
      }
      doctor {
        id
        firstname
        lastname
        email
        country
        city
        license
        specialization
        experience
        workplace
        workAddress
        workContact
        about
        image
        status
        qualifications
        averagerating
        ratings
        basicinfocompletion
        specialistinfocompletion
        workinfocompletion
        makePublic
        confirmed
        devicetoken
        chatParticipant {
          id
          patientmodelID
          doctormodelID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        DoctorDayTimeModel {
          nextToken
          startedAt
          __typename
        }
        DoctorConFeeModels {
          nextToken
          startedAt
          __typename
        }
        DoctorVideoCalls {
          nextToken
          startedAt
          __typename
        }
        DoctorAppointments {
          nextToken
          startedAt
          __typename
        }
        DoctorArticles {
          nextToken
          startedAt
          __typename
        }
        Reviews {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        doctorModelChatParticipantId
        __typename
      }
      chatroom {
        id
        name
        image
        participants {
          nextToken
          startedAt
          __typename
        }
        messages {
          nextToken
          startedAt
          __typename
        }
        lastMessage {
          id
          text
          createdAt
          chatroomID
          senderID
          seen
          images
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatRoomLastMessageId
        owner
        __typename
      }
      messages {
        items {
          id
          text
          createdAt
          chatroomID
          senderID
          seen
          images
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onUpdateChatParticipant = /* GraphQL */ `
  subscription OnUpdateChatParticipant(
    $filter: ModelSubscriptionChatParticipantFilterInput
    $owner: String
  ) {
    onUpdateChatParticipant(filter: $filter, owner: $owner) {
      id
      patientmodelID
      doctormodelID
      chatroomID
      patient {
        id
        firstname
        lastname
        birthdate
        email
        homeaddress
        country
        city
        race
        gender
        smokingstatus
        drinkingstatus
        disability
        image
        status
        agreedtoterms
        basicinfocompletion
        medicalinfocompletion
        devicetoken
        chatParticipant {
          id
          patientmodelID
          doctormodelID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        PatientVideoCalls {
          nextToken
          startedAt
          __typename
        }
        PatientAppointments {
          nextToken
          startedAt
          __typename
        }
        PatientReviews {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        patientModelChatParticipantId
        __typename
      }
      doctor {
        id
        firstname
        lastname
        email
        country
        city
        license
        specialization
        experience
        workplace
        workAddress
        workContact
        about
        image
        status
        qualifications
        averagerating
        ratings
        basicinfocompletion
        specialistinfocompletion
        workinfocompletion
        makePublic
        confirmed
        devicetoken
        chatParticipant {
          id
          patientmodelID
          doctormodelID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        DoctorDayTimeModel {
          nextToken
          startedAt
          __typename
        }
        DoctorConFeeModels {
          nextToken
          startedAt
          __typename
        }
        DoctorVideoCalls {
          nextToken
          startedAt
          __typename
        }
        DoctorAppointments {
          nextToken
          startedAt
          __typename
        }
        DoctorArticles {
          nextToken
          startedAt
          __typename
        }
        Reviews {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        doctorModelChatParticipantId
        __typename
      }
      chatroom {
        id
        name
        image
        participants {
          nextToken
          startedAt
          __typename
        }
        messages {
          nextToken
          startedAt
          __typename
        }
        lastMessage {
          id
          text
          createdAt
          chatroomID
          senderID
          seen
          images
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatRoomLastMessageId
        owner
        __typename
      }
      messages {
        items {
          id
          text
          createdAt
          chatroomID
          senderID
          seen
          images
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onDeleteChatParticipant = /* GraphQL */ `
  subscription OnDeleteChatParticipant(
    $filter: ModelSubscriptionChatParticipantFilterInput
    $owner: String
  ) {
    onDeleteChatParticipant(filter: $filter, owner: $owner) {
      id
      patientmodelID
      doctormodelID
      chatroomID
      patient {
        id
        firstname
        lastname
        birthdate
        email
        homeaddress
        country
        city
        race
        gender
        smokingstatus
        drinkingstatus
        disability
        image
        status
        agreedtoterms
        basicinfocompletion
        medicalinfocompletion
        devicetoken
        chatParticipant {
          id
          patientmodelID
          doctormodelID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        PatientVideoCalls {
          nextToken
          startedAt
          __typename
        }
        PatientAppointments {
          nextToken
          startedAt
          __typename
        }
        PatientReviews {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        patientModelChatParticipantId
        __typename
      }
      doctor {
        id
        firstname
        lastname
        email
        country
        city
        license
        specialization
        experience
        workplace
        workAddress
        workContact
        about
        image
        status
        qualifications
        averagerating
        ratings
        basicinfocompletion
        specialistinfocompletion
        workinfocompletion
        makePublic
        confirmed
        devicetoken
        chatParticipant {
          id
          patientmodelID
          doctormodelID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        DoctorDayTimeModel {
          nextToken
          startedAt
          __typename
        }
        DoctorConFeeModels {
          nextToken
          startedAt
          __typename
        }
        DoctorVideoCalls {
          nextToken
          startedAt
          __typename
        }
        DoctorAppointments {
          nextToken
          startedAt
          __typename
        }
        DoctorArticles {
          nextToken
          startedAt
          __typename
        }
        Reviews {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        doctorModelChatParticipantId
        __typename
      }
      chatroom {
        id
        name
        image
        participants {
          nextToken
          startedAt
          __typename
        }
        messages {
          nextToken
          startedAt
          __typename
        }
        lastMessage {
          id
          text
          createdAt
          chatroomID
          senderID
          seen
          images
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatRoomLastMessageId
        owner
        __typename
      }
      messages {
        items {
          id
          text
          createdAt
          chatroomID
          senderID
          seen
          images
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onCreatePatientModel = /* GraphQL */ `
  subscription OnCreatePatientModel(
    $filter: ModelSubscriptionPatientModelFilterInput
  ) {
    onCreatePatientModel(filter: $filter) {
      id
      firstname
      lastname
      birthdate
      email
      homeaddress
      country
      city
      race
      gender
      smokingstatus
      drinkingstatus
      disability
      image
      status
      agreedtoterms
      basicinfocompletion
      medicalinfocompletion
      devicetoken
      chatParticipant {
        id
        patientmodelID
        doctormodelID
        chatroomID
        patient {
          id
          firstname
          lastname
          birthdate
          email
          homeaddress
          country
          city
          race
          gender
          smokingstatus
          drinkingstatus
          disability
          image
          status
          agreedtoterms
          basicinfocompletion
          medicalinfocompletion
          devicetoken
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          patientModelChatParticipantId
          __typename
        }
        doctor {
          id
          firstname
          lastname
          email
          country
          city
          license
          specialization
          experience
          workplace
          workAddress
          workContact
          about
          image
          status
          qualifications
          averagerating
          ratings
          basicinfocompletion
          specialistinfocompletion
          workinfocompletion
          makePublic
          confirmed
          devicetoken
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          doctorModelChatParticipantId
          __typename
        }
        chatroom {
          id
          name
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomLastMessageId
          owner
          __typename
        }
        messages {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      notifications {
        items {
          id
          title
          contentMessage
          sourceType
          navigationID
          action
          image
          seen
          doctormodelID
          patientmodelID
          createdAt
          receipientDeviceToken
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      PatientVideoCalls {
        items {
          id
          channelName
          patientmodelID
          doctormodelID
          subscriberDeviceToken
          createdAt
          picked
          expiryTime
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      PatientAppointments {
        items {
          id
          consultationtype
          starthour
          endhour
          day
          month
          date
          timeframe
          shortnote
          category
          status
          countdown
          doctormodelID
          patientmodelID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      PatientReviews {
        items {
          id
          reviewtext
          ratings
          patientmodelID
          doctormodelID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      patientModelChatParticipantId
      __typename
    }
  }
`;
export const onUpdatePatientModel = /* GraphQL */ `
  subscription OnUpdatePatientModel(
    $filter: ModelSubscriptionPatientModelFilterInput
  ) {
    onUpdatePatientModel(filter: $filter) {
      id
      firstname
      lastname
      birthdate
      email
      homeaddress
      country
      city
      race
      gender
      smokingstatus
      drinkingstatus
      disability
      image
      status
      agreedtoterms
      basicinfocompletion
      medicalinfocompletion
      devicetoken
      chatParticipant {
        id
        patientmodelID
        doctormodelID
        chatroomID
        patient {
          id
          firstname
          lastname
          birthdate
          email
          homeaddress
          country
          city
          race
          gender
          smokingstatus
          drinkingstatus
          disability
          image
          status
          agreedtoterms
          basicinfocompletion
          medicalinfocompletion
          devicetoken
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          patientModelChatParticipantId
          __typename
        }
        doctor {
          id
          firstname
          lastname
          email
          country
          city
          license
          specialization
          experience
          workplace
          workAddress
          workContact
          about
          image
          status
          qualifications
          averagerating
          ratings
          basicinfocompletion
          specialistinfocompletion
          workinfocompletion
          makePublic
          confirmed
          devicetoken
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          doctorModelChatParticipantId
          __typename
        }
        chatroom {
          id
          name
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomLastMessageId
          owner
          __typename
        }
        messages {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      notifications {
        items {
          id
          title
          contentMessage
          sourceType
          navigationID
          action
          image
          seen
          doctormodelID
          patientmodelID
          createdAt
          receipientDeviceToken
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      PatientVideoCalls {
        items {
          id
          channelName
          patientmodelID
          doctormodelID
          subscriberDeviceToken
          createdAt
          picked
          expiryTime
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      PatientAppointments {
        items {
          id
          consultationtype
          starthour
          endhour
          day
          month
          date
          timeframe
          shortnote
          category
          status
          countdown
          doctormodelID
          patientmodelID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      PatientReviews {
        items {
          id
          reviewtext
          ratings
          patientmodelID
          doctormodelID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      patientModelChatParticipantId
      __typename
    }
  }
`;
export const onDeletePatientModel = /* GraphQL */ `
  subscription OnDeletePatientModel(
    $filter: ModelSubscriptionPatientModelFilterInput
  ) {
    onDeletePatientModel(filter: $filter) {
      id
      firstname
      lastname
      birthdate
      email
      homeaddress
      country
      city
      race
      gender
      smokingstatus
      drinkingstatus
      disability
      image
      status
      agreedtoterms
      basicinfocompletion
      medicalinfocompletion
      devicetoken
      chatParticipant {
        id
        patientmodelID
        doctormodelID
        chatroomID
        patient {
          id
          firstname
          lastname
          birthdate
          email
          homeaddress
          country
          city
          race
          gender
          smokingstatus
          drinkingstatus
          disability
          image
          status
          agreedtoterms
          basicinfocompletion
          medicalinfocompletion
          devicetoken
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          patientModelChatParticipantId
          __typename
        }
        doctor {
          id
          firstname
          lastname
          email
          country
          city
          license
          specialization
          experience
          workplace
          workAddress
          workContact
          about
          image
          status
          qualifications
          averagerating
          ratings
          basicinfocompletion
          specialistinfocompletion
          workinfocompletion
          makePublic
          confirmed
          devicetoken
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          doctorModelChatParticipantId
          __typename
        }
        chatroom {
          id
          name
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomLastMessageId
          owner
          __typename
        }
        messages {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      notifications {
        items {
          id
          title
          contentMessage
          sourceType
          navigationID
          action
          image
          seen
          doctormodelID
          patientmodelID
          createdAt
          receipientDeviceToken
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      PatientVideoCalls {
        items {
          id
          channelName
          patientmodelID
          doctormodelID
          subscriberDeviceToken
          createdAt
          picked
          expiryTime
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      PatientAppointments {
        items {
          id
          consultationtype
          starthour
          endhour
          day
          month
          date
          timeframe
          shortnote
          category
          status
          countdown
          doctormodelID
          patientmodelID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      PatientReviews {
        items {
          id
          reviewtext
          ratings
          patientmodelID
          doctormodelID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      patientModelChatParticipantId
      __typename
    }
  }
`;
export const onCreateDayTimeModel = /* GraphQL */ `
  subscription OnCreateDayTimeModel(
    $filter: ModelSubscriptionDayTimeModelFilterInput
    $owner: String
  ) {
    onCreateDayTimeModel(filter: $filter, owner: $owner) {
      id
      day
      starthour
      endhour
      doctormodelID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onUpdateDayTimeModel = /* GraphQL */ `
  subscription OnUpdateDayTimeModel(
    $filter: ModelSubscriptionDayTimeModelFilterInput
    $owner: String
  ) {
    onUpdateDayTimeModel(filter: $filter, owner: $owner) {
      id
      day
      starthour
      endhour
      doctormodelID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onDeleteDayTimeModel = /* GraphQL */ `
  subscription OnDeleteDayTimeModel(
    $filter: ModelSubscriptionDayTimeModelFilterInput
    $owner: String
  ) {
    onDeleteDayTimeModel(filter: $filter, owner: $owner) {
      id
      day
      starthour
      endhour
      doctormodelID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onCreateDoctorModel = /* GraphQL */ `
  subscription OnCreateDoctorModel(
    $filter: ModelSubscriptionDoctorModelFilterInput
  ) {
    onCreateDoctorModel(filter: $filter) {
      id
      firstname
      lastname
      email
      country
      city
      license
      specialization
      experience
      workplace
      workAddress
      workContact
      about
      image
      status
      qualifications
      averagerating
      ratings
      basicinfocompletion
      specialistinfocompletion
      workinfocompletion
      makePublic
      confirmed
      devicetoken
      chatParticipant {
        id
        patientmodelID
        doctormodelID
        chatroomID
        patient {
          id
          firstname
          lastname
          birthdate
          email
          homeaddress
          country
          city
          race
          gender
          smokingstatus
          drinkingstatus
          disability
          image
          status
          agreedtoterms
          basicinfocompletion
          medicalinfocompletion
          devicetoken
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          patientModelChatParticipantId
          __typename
        }
        doctor {
          id
          firstname
          lastname
          email
          country
          city
          license
          specialization
          experience
          workplace
          workAddress
          workContact
          about
          image
          status
          qualifications
          averagerating
          ratings
          basicinfocompletion
          specialistinfocompletion
          workinfocompletion
          makePublic
          confirmed
          devicetoken
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          doctorModelChatParticipantId
          __typename
        }
        chatroom {
          id
          name
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomLastMessageId
          owner
          __typename
        }
        messages {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      notifications {
        items {
          id
          title
          contentMessage
          sourceType
          navigationID
          action
          image
          seen
          doctormodelID
          patientmodelID
          createdAt
          receipientDeviceToken
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      DoctorDayTimeModel {
        items {
          id
          day
          starthour
          endhour
          doctormodelID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      DoctorConFeeModels {
        items {
          id
          rateperminute
          timeframe
          consultationtype
          doctormodelID
          rate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      DoctorVideoCalls {
        items {
          id
          channelName
          patientmodelID
          doctormodelID
          subscriberDeviceToken
          createdAt
          picked
          expiryTime
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      DoctorAppointments {
        items {
          id
          consultationtype
          starthour
          endhour
          day
          month
          date
          timeframe
          shortnote
          category
          status
          countdown
          doctormodelID
          patientmodelID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      DoctorArticles {
        items {
          id
          title
          contentMessage
          image
          doctormodelID
          createdAt
          categories
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Reviews {
        items {
          id
          reviewtext
          ratings
          patientmodelID
          doctormodelID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      doctorModelChatParticipantId
      __typename
    }
  }
`;
export const onUpdateDoctorModel = /* GraphQL */ `
  subscription OnUpdateDoctorModel(
    $filter: ModelSubscriptionDoctorModelFilterInput
  ) {
    onUpdateDoctorModel(filter: $filter) {
      id
      firstname
      lastname
      email
      country
      city
      license
      specialization
      experience
      workplace
      workAddress
      workContact
      about
      image
      status
      qualifications
      averagerating
      ratings
      basicinfocompletion
      specialistinfocompletion
      workinfocompletion
      makePublic
      confirmed
      devicetoken
      chatParticipant {
        id
        patientmodelID
        doctormodelID
        chatroomID
        patient {
          id
          firstname
          lastname
          birthdate
          email
          homeaddress
          country
          city
          race
          gender
          smokingstatus
          drinkingstatus
          disability
          image
          status
          agreedtoterms
          basicinfocompletion
          medicalinfocompletion
          devicetoken
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          patientModelChatParticipantId
          __typename
        }
        doctor {
          id
          firstname
          lastname
          email
          country
          city
          license
          specialization
          experience
          workplace
          workAddress
          workContact
          about
          image
          status
          qualifications
          averagerating
          ratings
          basicinfocompletion
          specialistinfocompletion
          workinfocompletion
          makePublic
          confirmed
          devicetoken
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          doctorModelChatParticipantId
          __typename
        }
        chatroom {
          id
          name
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomLastMessageId
          owner
          __typename
        }
        messages {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      notifications {
        items {
          id
          title
          contentMessage
          sourceType
          navigationID
          action
          image
          seen
          doctormodelID
          patientmodelID
          createdAt
          receipientDeviceToken
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      DoctorDayTimeModel {
        items {
          id
          day
          starthour
          endhour
          doctormodelID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      DoctorConFeeModels {
        items {
          id
          rateperminute
          timeframe
          consultationtype
          doctormodelID
          rate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      DoctorVideoCalls {
        items {
          id
          channelName
          patientmodelID
          doctormodelID
          subscriberDeviceToken
          createdAt
          picked
          expiryTime
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      DoctorAppointments {
        items {
          id
          consultationtype
          starthour
          endhour
          day
          month
          date
          timeframe
          shortnote
          category
          status
          countdown
          doctormodelID
          patientmodelID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      DoctorArticles {
        items {
          id
          title
          contentMessage
          image
          doctormodelID
          createdAt
          categories
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Reviews {
        items {
          id
          reviewtext
          ratings
          patientmodelID
          doctormodelID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      doctorModelChatParticipantId
      __typename
    }
  }
`;
export const onDeleteDoctorModel = /* GraphQL */ `
  subscription OnDeleteDoctorModel(
    $filter: ModelSubscriptionDoctorModelFilterInput
  ) {
    onDeleteDoctorModel(filter: $filter) {
      id
      firstname
      lastname
      email
      country
      city
      license
      specialization
      experience
      workplace
      workAddress
      workContact
      about
      image
      status
      qualifications
      averagerating
      ratings
      basicinfocompletion
      specialistinfocompletion
      workinfocompletion
      makePublic
      confirmed
      devicetoken
      chatParticipant {
        id
        patientmodelID
        doctormodelID
        chatroomID
        patient {
          id
          firstname
          lastname
          birthdate
          email
          homeaddress
          country
          city
          race
          gender
          smokingstatus
          drinkingstatus
          disability
          image
          status
          agreedtoterms
          basicinfocompletion
          medicalinfocompletion
          devicetoken
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          patientModelChatParticipantId
          __typename
        }
        doctor {
          id
          firstname
          lastname
          email
          country
          city
          license
          specialization
          experience
          workplace
          workAddress
          workContact
          about
          image
          status
          qualifications
          averagerating
          ratings
          basicinfocompletion
          specialistinfocompletion
          workinfocompletion
          makePublic
          confirmed
          devicetoken
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          doctorModelChatParticipantId
          __typename
        }
        chatroom {
          id
          name
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomLastMessageId
          owner
          __typename
        }
        messages {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      notifications {
        items {
          id
          title
          contentMessage
          sourceType
          navigationID
          action
          image
          seen
          doctormodelID
          patientmodelID
          createdAt
          receipientDeviceToken
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      DoctorDayTimeModel {
        items {
          id
          day
          starthour
          endhour
          doctormodelID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      DoctorConFeeModels {
        items {
          id
          rateperminute
          timeframe
          consultationtype
          doctormodelID
          rate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      DoctorVideoCalls {
        items {
          id
          channelName
          patientmodelID
          doctormodelID
          subscriberDeviceToken
          createdAt
          picked
          expiryTime
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      DoctorAppointments {
        items {
          id
          consultationtype
          starthour
          endhour
          day
          month
          date
          timeframe
          shortnote
          category
          status
          countdown
          doctormodelID
          patientmodelID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      DoctorArticles {
        items {
          id
          title
          contentMessage
          image
          doctormodelID
          createdAt
          categories
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Reviews {
        items {
          id
          reviewtext
          ratings
          patientmodelID
          doctormodelID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      doctorModelChatParticipantId
      __typename
    }
  }
`;
