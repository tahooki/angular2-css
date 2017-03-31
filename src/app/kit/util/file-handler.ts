export class THKFileHandler {
  static getPromiseImageSource(file: any): Promise<any> {
    return new Promise<any>(
      (resolve) => {
        let reader = new FileReader();
        reader.addEventListener('load', (event: any) => {
          let imageSource = event.target.result;
          resolve(imageSource);
        }, false);

        reader.readAsDataURL(file);
      }
    )
  }

  static checkImageFile(file: any): boolean {
    return new RegExp("image").test(file.type);
  }
}
