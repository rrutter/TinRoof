import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { AlbumService } from '../../commons/services/albumservice/album.service'
import { PhotoService } from '../../commons/services/photoservice/photo.service'

//if i was going to be more indepth with the user
interface album {
  userid: number;
  id: number;
  title: string;
}

@Component({
  selector: 'app-cardnav',
  templateUrl: './cardnav.component.html',
  styleUrls: ['./cardnav.component.css'],
  providers: [
    AlbumService,
    PhotoService
  ]
})
export class CardnavComponent implements OnInit
{
  private type: string = "album";


  public index: number = 1;
  public count: number = 30;
  public albumList: any;
  public photoList: any;
  public isPhoto: boolean = false;
  public isReady: boolean = false;

  @Input() userId: string; //give me the user's context

  constructor(private albumService: AlbumService, private photoService: PhotoService) { }

  ngOnInit()
  {
  }

  ngOnChanges(userId: SimpleChanges)
  {
    if(this.userId)this.loadAlbums(this.userId);
    this.isPhoto = false;
    this.isReady = false;
  }

  loadAlbums(userId)
  {
    this.albumList = [];
    console.log("loading albums for user id with "+userId);
    //http://jsonplaceholder.typicode.com/albums?userId=1
    this.albumService.getAlbums(userId, this.index, this.count).subscribe(
      data=> {this.albumList = data},
      error=> {console.error(error)},
      () => {this.loadAllPhotos()});
  }

  loadAllPhotos()
  {
    for(let i=0; i<this.albumList.length; i++)
    {
      this.albumList[i].photos = [];
      this.albumList[i].photos = this.loadPhotos(this.albumList[i].id, i);
    }
  }

  showPhotos(event)
  {
    this.isPhoto = true;
    this.photoList = this.getPhotosByAlbumId(event.target.parentElement.id);
  }

  showBigPhoto(event)
  {
    const id = event.target.parentElement.id;
    const selectedPhoto = this.getPhotoById(id);
    console.log(selectedPhoto);
    //too lazy to write a modal
    window.open(selectedPhoto.url);
    //here is the text to display under the modal if i built one
    console.log(selectedPhoto.title);
  }

  updateAlbumList(response): any
  {
    console.log(response);
    this.albumList = response;
    return response;
  }

  loadPhotos(albumId, index): any
  {
    this.photoService.getPhotos(albumId).subscribe(
      data=> {
        this.albumList[index].photos = data;
        return data},
      error=> {console.error(error)},
      () => {
        //element is binding before observable is back from subscription
        // (this is not the right way to fix it)
        setTimeout(()=>{this.isReady=true},100)
      });

  }

  getPhotosByAlbumId(id)
  {
    for(let i=0; i<=this.albumList.length; i++)
    {
      if(this.albumList[i].id == id)
      {
        return this.albumList[i].photos;
      }
    }
    return null;
  }

  getPhotoById(id)
  {
    for(let i=0; i<=this.photoList.length; i++)
    {
      if(this.photoList[i].id == id)
      {
        return this.photoList[i];
      }
    }
    return null;
  }

  handleError(error)
  {
    console.error(error);
  }

}
