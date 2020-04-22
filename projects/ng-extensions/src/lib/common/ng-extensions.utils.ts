export class NgExtensionsUtils{

  public static delay(ms: number){
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve, ms);
    });
  }

}
