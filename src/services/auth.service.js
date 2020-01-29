import { Auth } from "aws-amplify";

export default class AuthService {
  signup(email, password) {
    return Auth.signUp(email, password);
  }
  verify(email, code) {
    return Auth.confirmSignUp(email, code);
  }
  signIn(email, password) {
    return Auth.signIn(email, password);
  }
  signOut() {
    return Auth.signOut();
  }
  forgotPassword(email) {
    return Auth.forgotPassword(email);
  }
  forgotPasswordSubmit(email, code, password) {
    return Auth.forgotPasswordSubmit(email, code, password);
  }
  getCurrentUser() {
    return Auth.currentAuthenticatedUser({
      bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    });
  }
  currentSession() {
    return Auth.currentSession();
  }
  async getCurrentUserRole() {
    const user = await this.getCurrentUser();
    try {
      return user.signInUserSession.idToken.payload["cognito:groups"][0];
    } catch (err) {
      console.error("Failed to get group");
      return "";
    }
  }
  async getCurrentUserId() {
    const user = await this.getCurrentUser();
    try {
      return user.attributes.sub;
    } catch (err) {
      console.error("Failed to get id");
      return "";
    }
  }
  static isClientUser(role) {
    return role === "CLIENT_USER";
  }
  static isClientContriburor(role) {
    return role === "CLIENT_CONTRIBUTOR";
  }
  static isClient(role) {
    return (
      AuthService.isClientUser(role) || AuthService.isClientContriburor(role)
    );
  }
  static isAdmin(role) {
    return role === "ADMIN";
  }
  async isClientUser() {
    const role = await this.getCurrentUserRole();
    return AuthService.isClientUser(role);
  }
  async isClientContriburor() {
    const role = await this.getCurrentUserRole();
    return AuthService.isClientContriburor(role);
  }
  async isClient() {
    return this.isClientUser() || this.isClientContriburor();
  }
  async isAdmin() {
    const role = await this.getCurrentUserRole();
    return AuthService.isAdmin(role);
  }
}
