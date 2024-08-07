/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createVideoCall = /* GraphQL */ `
  mutation CreateVideoCall(
    $input: CreateVideoCallInput!
    $condition: ModelVideoCallConditionInput
  ) {
    createVideoCall(input: $input, condition: $condition) {
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
        doctorModelChatParticipantId
        __typename
      }
      subscriberDeviceToken
      createdAt
      endedAt
      picked
      expiryTime
      updatedAt
      __typename
    }
  }
`;
export const updateVideoCall = /* GraphQL */ `
  mutation UpdateVideoCall(
    $input: UpdateVideoCallInput!
    $condition: ModelVideoCallConditionInput
  ) {
    updateVideoCall(input: $input, condition: $condition) {
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
        doctorModelChatParticipantId
        __typename
      }
      subscriberDeviceToken
      createdAt
      endedAt
      picked
      expiryTime
      updatedAt
      __typename
    }
  }
`;
export const deleteVideoCall = /* GraphQL */ `
  mutation DeleteVideoCall(
    $input: DeleteVideoCallInput!
    $condition: ModelVideoCallConditionInput
  ) {
    deleteVideoCall(input: $input, condition: $condition) {
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
        doctorModelChatParticipantId
        __typename
      }
      subscriberDeviceToken
      createdAt
      endedAt
      picked
      expiryTime
      updatedAt
      __typename
    }
  }
`;
export const createArticle = /* GraphQL */ `
  mutation CreateArticle(
    $input: CreateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    createArticle(input: $input, condition: $condition) {
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
        doctorModelChatParticipantId
        __typename
      }
      createdAt
      categories
      updatedAt
      __typename
    }
  }
`;
export const updateArticle = /* GraphQL */ `
  mutation UpdateArticle(
    $input: UpdateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    updateArticle(input: $input, condition: $condition) {
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
        doctorModelChatParticipantId
        __typename
      }
      createdAt
      categories
      updatedAt
      __typename
    }
  }
`;
export const deleteArticle = /* GraphQL */ `
  mutation DeleteArticle(
    $input: DeleteArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    deleteArticle(input: $input, condition: $condition) {
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
        doctorModelChatParticipantId
        __typename
      }
      createdAt
      categories
      updatedAt
      __typename
    }
  }
`;
export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
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
        patientModelChatParticipantId
        __typename
      }
      createdAt
      receipientDeviceToken
      updatedAt
      __typename
    }
  }
`;
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
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
        patientModelChatParticipantId
        __typename
      }
      createdAt
      receipientDeviceToken
      updatedAt
      __typename
    }
  }
`;
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification(
    $input: DeleteNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    deleteNotification(input: $input, condition: $condition) {
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
        patientModelChatParticipantId
        __typename
      }
      createdAt
      receipientDeviceToken
      updatedAt
      __typename
    }
  }
`;
export const createReviews = /* GraphQL */ `
  mutation CreateReviews(
    $input: CreateReviewsInput!
    $condition: ModelReviewsConditionInput
  ) {
    createReviews(input: $input, condition: $condition) {
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
        patientModelChatParticipantId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateReviews = /* GraphQL */ `
  mutation UpdateReviews(
    $input: UpdateReviewsInput!
    $condition: ModelReviewsConditionInput
  ) {
    updateReviews(input: $input, condition: $condition) {
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
        patientModelChatParticipantId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteReviews = /* GraphQL */ `
  mutation DeleteReviews(
    $input: DeleteReviewsInput!
    $condition: ModelReviewsConditionInput
  ) {
    deleteReviews(input: $input, condition: $condition) {
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
        patientModelChatParticipantId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createAppointment = /* GraphQL */ `
  mutation CreateAppointment(
    $input: CreateAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    createAppointment(input: $input, condition: $condition) {
      id
      consultationtype
      starthour
      endhour
      day
      month
      date
      timeframe
      fee
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
        doctorModelChatParticipantId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateAppointment = /* GraphQL */ `
  mutation UpdateAppointment(
    $input: UpdateAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    updateAppointment(input: $input, condition: $condition) {
      id
      consultationtype
      starthour
      endhour
      day
      month
      date
      timeframe
      fee
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
        doctorModelChatParticipantId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteAppointment = /* GraphQL */ `
  mutation DeleteAppointment(
    $input: DeleteAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    deleteAppointment(input: $input, condition: $condition) {
      id
      consultationtype
      starthour
      endhour
      day
      month
      date
      timeframe
      fee
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
        doctorModelChatParticipantId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPatientModel = /* GraphQL */ `
  mutation CreatePatientModel(
    $input: CreatePatientModelInput!
    $condition: ModelPatientModelConditionInput
  ) {
    createPatientModel(input: $input, condition: $condition) {
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
        owner
        __typename
      }
      notifications {
        nextToken
        __typename
      }
      PatientVideoCalls {
        nextToken
        __typename
      }
      PatientAppointments {
        nextToken
        __typename
      }
      PatientReviews {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      patientModelChatParticipantId
      __typename
    }
  }
`;
export const updatePatientModel = /* GraphQL */ `
  mutation UpdatePatientModel(
    $input: UpdatePatientModelInput!
    $condition: ModelPatientModelConditionInput
  ) {
    updatePatientModel(input: $input, condition: $condition) {
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
        owner
        __typename
      }
      notifications {
        nextToken
        __typename
      }
      PatientVideoCalls {
        nextToken
        __typename
      }
      PatientAppointments {
        nextToken
        __typename
      }
      PatientReviews {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      patientModelChatParticipantId
      __typename
    }
  }
`;
export const deletePatientModel = /* GraphQL */ `
  mutation DeletePatientModel(
    $input: DeletePatientModelInput!
    $condition: ModelPatientModelConditionInput
  ) {
    deletePatientModel(input: $input, condition: $condition) {
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
        owner
        __typename
      }
      notifications {
        nextToken
        __typename
      }
      PatientVideoCalls {
        nextToken
        __typename
      }
      PatientAppointments {
        nextToken
        __typename
      }
      PatientReviews {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      patientModelChatParticipantId
      __typename
    }
  }
`;
export const createDoctorModel = /* GraphQL */ `
  mutation CreateDoctorModel(
    $input: CreateDoctorModelInput!
    $condition: ModelDoctorModelConditionInput
  ) {
    createDoctorModel(input: $input, condition: $condition) {
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
        owner
        __typename
      }
      notifications {
        nextToken
        __typename
      }
      DoctorDayTimeModel {
        nextToken
        __typename
      }
      DoctorConFeeModels {
        nextToken
        __typename
      }
      DoctorVideoCalls {
        nextToken
        __typename
      }
      DoctorAppointments {
        nextToken
        __typename
      }
      DoctorArticles {
        nextToken
        __typename
      }
      Reviews {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      doctorModelChatParticipantId
      __typename
    }
  }
`;
export const updateDoctorModel = /* GraphQL */ `
  mutation UpdateDoctorModel(
    $input: UpdateDoctorModelInput!
    $condition: ModelDoctorModelConditionInput
  ) {
    updateDoctorModel(input: $input, condition: $condition) {
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
        owner
        __typename
      }
      notifications {
        nextToken
        __typename
      }
      DoctorDayTimeModel {
        nextToken
        __typename
      }
      DoctorConFeeModels {
        nextToken
        __typename
      }
      DoctorVideoCalls {
        nextToken
        __typename
      }
      DoctorAppointments {
        nextToken
        __typename
      }
      DoctorArticles {
        nextToken
        __typename
      }
      Reviews {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      doctorModelChatParticipantId
      __typename
    }
  }
`;
export const deleteDoctorModel = /* GraphQL */ `
  mutation DeleteDoctorModel(
    $input: DeleteDoctorModelInput!
    $condition: ModelDoctorModelConditionInput
  ) {
    deleteDoctorModel(input: $input, condition: $condition) {
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
        owner
        __typename
      }
      notifications {
        nextToken
        __typename
      }
      DoctorDayTimeModel {
        nextToken
        __typename
      }
      DoctorConFeeModels {
        nextToken
        __typename
      }
      DoctorVideoCalls {
        nextToken
        __typename
      }
      DoctorAppointments {
        nextToken
        __typename
      }
      DoctorArticles {
        nextToken
        __typename
      }
      Reviews {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      doctorModelChatParticipantId
      __typename
    }
  }
`;
export const createTransaction = /* GraphQL */ `
  mutation CreateTransaction(
    $input: CreateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    createTransaction(input: $input, condition: $condition) {
      id
      message
      category
      status
      amount
      type
      currency
      transactiontype
      sender
      receiver
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateTransaction = /* GraphQL */ `
  mutation UpdateTransaction(
    $input: UpdateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    updateTransaction(input: $input, condition: $condition) {
      id
      message
      category
      status
      amount
      type
      currency
      transactiontype
      sender
      receiver
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteTransaction = /* GraphQL */ `
  mutation DeleteTransaction(
    $input: DeleteTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    deleteTransaction(input: $input, condition: $condition) {
      id
      message
      category
      status
      amount
      type
      currency
      transactiontype
      sender
      receiver
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createWallet = /* GraphQL */ `
  mutation CreateWallet(
    $input: CreateWalletInput!
    $condition: ModelWalletConditionInput
  ) {
    createWallet(input: $input, condition: $condition) {
      id
      ownerID
      accountNumber
      accountName
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateWallet = /* GraphQL */ `
  mutation UpdateWallet(
    $input: UpdateWalletInput!
    $condition: ModelWalletConditionInput
  ) {
    updateWallet(input: $input, condition: $condition) {
      id
      ownerID
      accountNumber
      accountName
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteWallet = /* GraphQL */ `
  mutation DeleteWallet(
    $input: DeleteWalletInput!
    $condition: ModelWalletConditionInput
  ) {
    deleteWallet(input: $input, condition: $condition) {
      id
      ownerID
      accountNumber
      accountName
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
      id
      name
      image
      participants {
        nextToken
        __typename
      }
      messages {
        nextToken
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
        owner
        __typename
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
      owner
      __typename
    }
  }
`;
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
      id
      name
      image
      participants {
        nextToken
        __typename
      }
      messages {
        nextToken
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
        owner
        __typename
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
      owner
      __typename
    }
  }
`;
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
      id
      name
      image
      participants {
        nextToken
        __typename
      }
      messages {
        nextToken
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
        owner
        __typename
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
      owner
      __typename
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
        owner
        __typename
      }
      seen
      images
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
        owner
        __typename
      }
      seen
      images
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
        owner
        __typename
      }
      seen
      images
      updatedAt
      owner
      __typename
    }
  }
`;
export const createChatParticipant = /* GraphQL */ `
  mutation CreateChatParticipant(
    $input: CreateChatParticipantInput!
    $condition: ModelChatParticipantConditionInput
  ) {
    createChatParticipant(input: $input, condition: $condition) {
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
        doctorModelChatParticipantId
        __typename
      }
      chatroom {
        id
        name
        image
        createdAt
        updatedAt
        chatRoomLastMessageId
        owner
        __typename
      }
      messages {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateChatParticipant = /* GraphQL */ `
  mutation UpdateChatParticipant(
    $input: UpdateChatParticipantInput!
    $condition: ModelChatParticipantConditionInput
  ) {
    updateChatParticipant(input: $input, condition: $condition) {
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
        doctorModelChatParticipantId
        __typename
      }
      chatroom {
        id
        name
        image
        createdAt
        updatedAt
        chatRoomLastMessageId
        owner
        __typename
      }
      messages {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteChatParticipant = /* GraphQL */ `
  mutation DeleteChatParticipant(
    $input: DeleteChatParticipantInput!
    $condition: ModelChatParticipantConditionInput
  ) {
    deleteChatParticipant(input: $input, condition: $condition) {
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
        doctorModelChatParticipantId
        __typename
      }
      chatroom {
        id
        name
        image
        createdAt
        updatedAt
        chatRoomLastMessageId
        owner
        __typename
      }
      messages {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createDayTimeModel = /* GraphQL */ `
  mutation CreateDayTimeModel(
    $input: CreateDayTimeModelInput!
    $condition: ModelDayTimeModelConditionInput
  ) {
    createDayTimeModel(input: $input, condition: $condition) {
      id
      day
      starthour
      endhour
      doctormodelID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateDayTimeModel = /* GraphQL */ `
  mutation UpdateDayTimeModel(
    $input: UpdateDayTimeModelInput!
    $condition: ModelDayTimeModelConditionInput
  ) {
    updateDayTimeModel(input: $input, condition: $condition) {
      id
      day
      starthour
      endhour
      doctormodelID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteDayTimeModel = /* GraphQL */ `
  mutation DeleteDayTimeModel(
    $input: DeleteDayTimeModelInput!
    $condition: ModelDayTimeModelConditionInput
  ) {
    deleteDayTimeModel(input: $input, condition: $condition) {
      id
      day
      starthour
      endhour
      doctormodelID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createConsultationFeeModel = /* GraphQL */ `
  mutation CreateConsultationFeeModel(
    $input: CreateConsultationFeeModelInput!
    $condition: ModelConsultationFeeModelConditionInput
  ) {
    createConsultationFeeModel(input: $input, condition: $condition) {
      id
      rateperminute
      timeframe
      consultationtype
      doctormodelID
      rate
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateConsultationFeeModel = /* GraphQL */ `
  mutation UpdateConsultationFeeModel(
    $input: UpdateConsultationFeeModelInput!
    $condition: ModelConsultationFeeModelConditionInput
  ) {
    updateConsultationFeeModel(input: $input, condition: $condition) {
      id
      rateperminute
      timeframe
      consultationtype
      doctormodelID
      rate
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteConsultationFeeModel = /* GraphQL */ `
  mutation DeleteConsultationFeeModel(
    $input: DeleteConsultationFeeModelInput!
    $condition: ModelConsultationFeeModelConditionInput
  ) {
    deleteConsultationFeeModel(input: $input, condition: $condition) {
      id
      rateperminute
      timeframe
      consultationtype
      doctormodelID
      rate
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
