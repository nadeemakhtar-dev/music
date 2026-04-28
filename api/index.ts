import { AlbumController, ArtistController, SearchController, SongController } from '../dist/modules/index.js'
import { PlaylistController } from '../dist/modules/playlists/controllers/index.js'
import { App } from '../dist/app.js'
import { handle } from 'hono/vercel' // 👈 IMPORTANT

const honoApp = new App([
  new SearchController(),
  new SongController(),
  new AlbumController(),
  new ArtistController(),
  new PlaylistController()
]).getApp()

export default handle(honoApp)