 exports.LoginPage= class LoginPage{

 constructor(page) {
   
    this.page = page;

 this.username_textbox = page.getByRole('textbox', { name: 'Email Address' });
 this.password_textbox =  page.getByRole('textbox', { name: 'Password' });
this.login_button = page.getByRole('button', { name: 'Sign In' });
 }


 async gotoLoginPage() {
    await this.page.goto('https://bugbash.syook.com/'); 
    await this.page.screenshot({ path:'tests/screenshots/'+Date.now()+'LoginPage.png'});
  }



  async login(username, password) {
    await this.username_textbox.fill(username);
    await this.password_textbox.fill(password);
    await this.login_button.click();
    await this.page.screenshot({ path:'tests/screenshots/'+Date.now()+'LoginPage.png'});
  }

 

  
}






