Auth microservice

- when try to encrypt and decrypt the password the best way to do this in model layer becuase cant to this is controller becuase
  it is used to accept the request,  can`t do in service layer becuase it contain business logic and password encrytion doesnt bend in
  any bunsines logic and in repository it is used to deal with database only not to do any logical work like this. So yeah best layer
  is model layer. so in this porject i put encryption and decryption logic