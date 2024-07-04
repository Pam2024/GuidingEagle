export interface User {
   id?: string;
   firstName?: string;
   lastName?: string;
   email?: string;
   phone?: string;
   imagePath?: string;
   imageName?: string;
   password?: string;
   repeatPassword?: string;
}


export interface UserRead {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  imagePath?: string;
  imageName?: string;
  description?: string;
}
