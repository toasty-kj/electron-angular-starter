import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css'],
})
export class FileUploaderComponent {
  @Output() filePathList = new EventEmitter<string[]>()
  @Input() infoContent = ''

  /**ファイルが選択された際に選択されたファイルパスを取得する */
  async onFileSelected(event: any) {
    const files: File = event.target.files
    const filePathList = this.getFilePathListFromFileList(files)
    this.filePathList.emit(filePathList)
  }

  getFilePathListFromFileList = (fileList: any) => {
    const filePathList: string[] = []
    for (let i = 0; i < fileList.length; i++) {
      filePathList.push(fileList[i.toString()].path)
    }
    return filePathList
  }
}
