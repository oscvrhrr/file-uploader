![Alt Text](https://fzyxhpuljtyplklakuoy.supabase.co/storage/v1/object/sign/misc/mydrive.gif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtaXNjL215ZHJpdmUuZ2lmIiwiaWF0IjoxNzI5NzAwMDIyLCJleHAiOjE3NjEyMzYwMjJ9.gL1DGrj098fbaFptNXp0NNSxn0myWptxEwnTPr7eTas&t=2024-10-23T16%3A13%3A42.712Z)

<h3 align="center">MyDrive</h3>
<p align="center">
   A Fullstack File Storage system that securely uploads & downloads files. Allows for file management
  and integrates with Supabase Storage for secure file storage.
  <br />
  <br />
</p>


## Users
| Description | Method | URL |
| ----------- | ------ | --- |
| create user | POST | /users/signup |
| login user | POST | /users/login |
| current user data | GET | /users/me |
| delete a user | DELETE | /users/:userid |

## Drives
| Description | Method | URL |
| ----------- | ------ | --- |
| new folder in a drive | POST | /drives/:driveid/folder |
| new file in a drive  | POST | /drives/:driveid/file |
| get a drive | GET | /drives/:driveid |


## Folders
| Description | Method | URL |
| ----------- | ------ | --- |
| new folder in a folder| POST | /folders/:folderid/folder |
| new file in a folder | POST | /foldres/:folderid/file |
| get a folder| GET | /folders/:folderid |
| get a file from a folder| GET | /folders/:folderid/files/:fileid |





## Auth
- [x] Sign Up
- [x] Log In
- [x] Log out

## Folder
- [x] Create
- [x] Read
- [x] Delete

## Files
- [x] Upload in Drive
- [x] Upload in Folder
- [x] Download Files
- [x] Manage Files

## Todo
- [dev] React for modern snapy frontend
- [ ] Make responsive 
 
## Technology Used
* Auth: Passport.js (Local)
* Frontend: React frontend in development
* Backend: Node, Express, Prisma
* Database: PostgreSQL
* Session management: Prisma session store
* Security: Bcrypt for hashing and salting passwords