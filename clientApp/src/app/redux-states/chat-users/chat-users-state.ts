export interface loggedUser {
  userId: string;
  userName: string;
}
export interface loggedUserState {
	loggedUser: Array<loggedUser>; 
};