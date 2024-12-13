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


## Problems I faced
<!-- * Decoupling a monolithic application into seperate components, modularizing the frontend and backend. This was a challenge
because it was the first time I faced this problem. -->


<!-- * how is tacked this issue was dessinging my api first and coding it out afterwards, this approached help because it allowed me to plan the way i was going to decouple the app before and set me up with a plan to execute -->

<!-- * issue i faced was preventing an infinte useEffect loop when i set the Drive as a dependecy. -->

<!-- * How i solved it was passing a boolean as a prop and tirggering it when i needed to run the useeffect again -->

<!-- * issue i face was sending contolled state to the backend as differnt types.  -->


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
- [x] React for modern snapy frontend
- [ ] Make responsive 
 
## Technology Used
* Auth: Passport.js (Local)
* Frontend: React frontend in development
* Backend: Node, Express, Prisma
* Database: PostgreSQL
* Session management: Prisma session store
* Security: Bcrypt for hashing and salting passwords