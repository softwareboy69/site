/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getArticle = /* GraphQL */ `
  query GetArticle($id: ID!) {
    getArticle(id: $id) {
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
export const listArticles = /* GraphQL */ `
  query ListArticles(
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncArticles = /* GraphQL */ `
  query SyncArticles(
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncArticles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const articlesByDoctormodelID = /* GraphQL */ `
  query ArticlesByDoctormodelID(
    $doctormodelID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    articlesByDoctormodelID(
      doctormodelID: $doctormodelID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
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
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncNotifications = /* GraphQL */ `
  query SyncNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const notificationsByDoctormodelID = /* GraphQL */ `
  query NotificationsByDoctormodelID(
    $doctormodelID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notificationsByDoctormodelID(
      doctormodelID: $doctormodelID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const notificationsByPatientmodelID = /* GraphQL */ `
  query NotificationsByPatientmodelID(
    $patientmodelID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notificationsByPatientmodelID(
      patientmodelID: $patientmodelID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getVideoCall = /* GraphQL */ `
  query GetVideoCall($id: ID!) {
    getVideoCall(id: $id) {
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
export const listVideoCalls = /* GraphQL */ `
  query ListVideoCalls(
    $filter: ModelVideoCallFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideoCalls(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
  }
`;
export const syncVideoCalls = /* GraphQL */ `
  query SyncVideoCalls(
    $filter: ModelVideoCallFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVideoCalls(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
  }
`;
export const videoCallsByPatientmodelID = /* GraphQL */ `
  query VideoCallsByPatientmodelID(
    $patientmodelID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelVideoCallFilterInput
    $limit: Int
    $nextToken: String
  ) {
    videoCallsByPatientmodelID(
      patientmodelID: $patientmodelID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
  }
`;
export const videoCallsByDoctormodelID = /* GraphQL */ `
  query VideoCallsByDoctormodelID(
    $doctormodelID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelVideoCallFilterInput
    $limit: Int
    $nextToken: String
  ) {
    videoCallsByDoctormodelID(
      doctormodelID: $doctormodelID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
  }
`;
export const getReviews = /* GraphQL */ `
  query GetReviews($id: ID!) {
    getReviews(id: $id) {
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
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncReviews = /* GraphQL */ `
  query SyncReviews(
    $filter: ModelReviewsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncReviews(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const reviewsByPatientmodelID = /* GraphQL */ `
  query ReviewsByPatientmodelID(
    $patientmodelID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelReviewsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reviewsByPatientmodelID(
      patientmodelID: $patientmodelID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const reviewsByDoctormodelID = /* GraphQL */ `
  query ReviewsByDoctormodelID(
    $doctormodelID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelReviewsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reviewsByDoctormodelID(
      doctormodelID: $doctormodelID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getAppointment = /* GraphQL */ `
  query GetAppointment($id: ID!) {
    getAppointment(id: $id) {
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
export const listAppointments = /* GraphQL */ `
  query ListAppointments(
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppointments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncAppointments = /* GraphQL */ `
  query SyncAppointments(
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAppointments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const appointmentsByDoctormodelID = /* GraphQL */ `
  query AppointmentsByDoctormodelID(
    $doctormodelID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    appointmentsByDoctormodelID(
      doctormodelID: $doctormodelID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const appointmentsByPatientmodelID = /* GraphQL */ `
  query AppointmentsByPatientmodelID(
    $patientmodelID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    appointmentsByPatientmodelID(
      patientmodelID: $patientmodelID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getConsultationFeeModel = /* GraphQL */ `
  query GetConsultationFeeModel($id: ID!) {
    getConsultationFeeModel(id: $id) {
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
export const listConsultationFeeModels = /* GraphQL */ `
  query ListConsultationFeeModels(
    $filter: ModelConsultationFeeModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConsultationFeeModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const syncConsultationFeeModels = /* GraphQL */ `
  query SyncConsultationFeeModels(
    $filter: ModelConsultationFeeModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncConsultationFeeModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const consultationFeeModelsByDoctormodelID = /* GraphQL */ `
  query ConsultationFeeModelsByDoctormodelID(
    $doctormodelID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelConsultationFeeModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    consultationFeeModelsByDoctormodelID(
      doctormodelID: $doctormodelID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
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
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncChatRooms = /* GraphQL */ `
  query SyncChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChatRooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncMessages = /* GraphQL */ `
  query SyncMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const listMessagesByChatRoom = /* GraphQL */ `
  query ListMessagesByChatRoom(
    $chatroomID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessagesByChatRoom(
      chatroomID: $chatroomID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const messagesBySenderID = /* GraphQL */ `
  query MessagesBySenderID(
    $senderID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesBySenderID(
      senderID: $senderID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getChatParticipant = /* GraphQL */ `
  query GetChatParticipant($id: ID!) {
    getChatParticipant(id: $id) {
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
export const listChatParticipants = /* GraphQL */ `
  query ListChatParticipants(
    $filter: ModelChatParticipantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatParticipants(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncChatParticipants = /* GraphQL */ `
  query SyncChatParticipants(
    $filter: ModelChatParticipantFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChatParticipants(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const chatParticipantsByPatientmodelID = /* GraphQL */ `
  query ChatParticipantsByPatientmodelID(
    $patientmodelID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChatParticipantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    chatParticipantsByPatientmodelID(
      patientmodelID: $patientmodelID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const chatParticipantsByDoctormodelID = /* GraphQL */ `
  query ChatParticipantsByDoctormodelID(
    $doctormodelID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChatParticipantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    chatParticipantsByDoctormodelID(
      doctormodelID: $doctormodelID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const chatParticipantsByChatroomID = /* GraphQL */ `
  query ChatParticipantsByChatroomID(
    $chatroomID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChatParticipantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    chatParticipantsByChatroomID(
      chatroomID: $chatroomID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getPatientModel = /* GraphQL */ `
  query GetPatientModel($id: ID!) {
    getPatientModel(id: $id) {
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
export const listPatientModels = /* GraphQL */ `
  query ListPatientModels(
    $filter: ModelPatientModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPatientModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncPatientModels = /* GraphQL */ `
  query SyncPatientModels(
    $filter: ModelPatientModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPatientModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getDayTimeModel = /* GraphQL */ `
  query GetDayTimeModel($id: ID!) {
    getDayTimeModel(id: $id) {
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
export const listDayTimeModels = /* GraphQL */ `
  query ListDayTimeModels(
    $filter: ModelDayTimeModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDayTimeModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncDayTimeModels = /* GraphQL */ `
  query SyncDayTimeModels(
    $filter: ModelDayTimeModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDayTimeModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const dayTimeModelsByDoctormodelID = /* GraphQL */ `
  query DayTimeModelsByDoctormodelID(
    $doctormodelID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDayTimeModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    dayTimeModelsByDoctormodelID(
      doctormodelID: $doctormodelID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getDoctorModel = /* GraphQL */ `
  query GetDoctorModel($id: ID!) {
    getDoctorModel(id: $id) {
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
export const listDoctorModels = /* GraphQL */ `
  query ListDoctorModels(
    $filter: ModelDoctorModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDoctorModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncDoctorModels = /* GraphQL */ `
  query SyncDoctorModels(
    $filter: ModelDoctorModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDoctorModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
