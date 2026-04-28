import { AlbumController, ArtistController, SearchController, SongController } from '../src/modules/index'
import { PlaylistController } from '../src/modules/playlists/controllers'
import { App } from '../src/app'

const honoApp = new App([
  new SearchController(),
  new SongController(),
  new AlbumController(),
  new ArtistController(),
  new PlaylistController()
]).getApp()

export default honoApp