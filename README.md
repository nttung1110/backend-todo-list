# backend-todo-list
Changing configuration of POSTGRES on your local host for testing module

# 1.Changing DB_NAME,DB_PASSWORD,DB_USER in database.js inside middleware folder .
# 2.Creating database in postgres local host for example :#databasename(this name should be match with your DB_NAME which you have changed before),creating table in POSTGRES as following:

# TABLE 1:user

userID (primary_key)

email

firstName

lastName

userPhone

birthDay

avatarURL

updatedAt

status

# TABLE 2:board

boardID(primary_key)

boardName

createdBy

updatedBy

createdAt

updatedAt

status

userID

# TABLE 3:task

taskID(primary_key)

taskName

createdBy

updatedBy

createdAt

updatedAt

status

boardID

+All of the above field is text datatype in postgres(text not text[])

# Remember to change environment variables for firebase authentication .Link here https://firebase.google.com/docs/admin/setup/


