var Room = {
  initialize: function(room){
    console.log('>>>>>>>>>>>>>>>>>>')
    console.log(room)
    console.log('>>>>>>>>>>>>>>>>>>')
    this.room = room;
    this.webrtc = this.connect();
    this.webrtc.on('readyToCall', this.readyToCall.bind(this));
    this.webrtc.on('videoAdded', this.videoAdded.bind(this));
    this.webrtc.on('videoRemoved', this.videoRemoved.bind(this));
    // this.webrtc.on('channelMessage', this.channelMessage.bind(this));
    // this.webrtc.on('volumeChange', this.volumeChange.bind(this));
    // this.webrtc.on('localScreenRemoved', this.localScreenRemoved.bind(this));

    // this.shareButton = $('#screenShareButton');
    // this.shareButton.click(this.share.bind(this));
    // this.setShareButton(true);
  },
  connect: function(){
    return new SimpleWebRTC({
      // the id/element dom element that will hold "our" video
      localVideoEl: 'localVideo',
      // the id/element dom element that will hold remote videos
      remoteVideosEl: 'remotesVideos',
      // immediately ask for camera access
      autoRequestMedia: true,
      debug: false,
      detectSpeakingEvents: true,
      autoAdjustMic: false,
      url: 'https://quiet-harbor-24198.herokuapp.com/'
    });
  },
  readyToCall: function() {
    console.log('readyToCall');
    if (this.room) this.webrtc.joinRoom(this.room);
  },
  // showVolume: function(el, volume){
  //   console.log('showVolume')
  //   if (!el) return;
  //   if (volume < -45) { // vary between -45 and -20
  //     el.style.height = '0px';
  //   } else if (volume > -20) {
  //     el.style.height = '100%';
  //   } else {
  //     el.style.height = '' + Math.floor((volume + 100) * 100 / 25 - 220) + '%';
  //   }
  // },
  // channelMessage: function (peer, label, data) {
  //   console.log('channelMessage')
  //   if (data.type == 'volume') {
  //     this.showVolume(document.getElementById('volume_' + peer.id), data.volume);
  //   }
  // },
  videoAdded: function(video, peer){
    var remotes = document.getElementById('remotes');
    if (remotes) {
      var d = document.createElement('div');
      d.className = 'videoContainer';
      d.id = 'peer_' + peer.id;
      d.appendChild(video);
      var vol = document.createElement('div');
      vol.id = 'volume_' + peer.id;
      vol.className = 'volume_bar';
      d.appendChild(vol);
      remotes.appendChild(d);
    }
  },
  videoRemoved: function(video, peer){
    console.log('....')
      var remotes = document.getElementById('remotes');
      var el = document.getElementById('peer_' + peer.id);
      if (remotes && el) {
        remotes.removeChild(el);
      }
  },
  // volumeChange: function (volume, treshold) {
  //   console.log('volumeChange')
  //   this.showVolume(document.getElementById('localVolume'), volume);
  // },
  // localScreenRemoved: function(){
  //   this.shareButton.set(true);
  // },
  // setShareButton: function(bool){
  //   this.shareButton.text(bool ? 'Share Screen' : 'Stop Sharing');
  // },
  // share: function () {
  //   if (this.webrtc.getLocalScreen()) {
  //     this.webrtc.stopScreenShare();
  //     this.setShareButton(true);
  //   } else {
  //     this.webrtc.shareScreen(function (err) {
  //       if (err) {
  //         this.setShareButton(false);
  //         console.log(err.message);
  //       } else {
  //         this.setShareButton(true);
  //       }
  //     }.bind(this));
  //   }
  // }
  leaveRoom: function () {
    // this.webrtc.stopLocalVideo();
    // this.webrtc.disconnect()
    this.webrtc.leaveRoom();
    // this.webrtc = null;
    // this.room = null;
  },
  pauseVideo: function () {
    this.webrtc.pause();
  },
  resumeVideo: function () {
    this.webrtc.resume();
  },
  mute: function () {
    this.webrtc.mute();
  },
  unMute: function () {
    this.webrtc.unmute();
  }
};
